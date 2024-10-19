import { eq, ilike, or } from 'drizzle-orm';
import { db } from '../../server';
import { Book, books as booksTable } from '../../server/schema';

export const bookService = {
  async getBooks({ page = 1, pageSize = 12, search = '' }): Promise<{ books: Book[], page: number, pageSize: number }> {
    const offset = (page - 1) * pageSize;
    
    let query = db.select().from(booksTable as any); 
    
    if (search) {
      query = query.where(or(
        ilike(booksTable.title, `%${search}%`),
        ilike(booksTable.author, `%${search}%`)
      )) as typeof query; 
    }
    
    const books = await query.limit(pageSize).offset(offset);
    
    return {
      books: books as Book[],
      page,
      pageSize,
    };
  },
};
