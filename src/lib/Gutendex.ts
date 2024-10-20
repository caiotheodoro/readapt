import { apiService } from '@/src/services/ApiService';

export interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  downloadUrl: string;
}

export class Gutendex {
  private baseUrl = 'https://gutendex.com/books/';

  async searchBooks(searchParam: string = ''): Promise<Book[]> {
    try {
      const url = `${this.baseUrl}${searchParam}`;
      const data = await apiService.get<any>(url);

      return data.results.map((book: any) => {
        const epubUrl = book.formats['application/epub+zip'];
        return {
          id: book.id,
          title: book.title,
          author: book.authors[0]?.name || 'Unknown',
          cover: book.formats['image/jpeg'] || '/placeholder.svg?height=240&width=160',
          downloadUrl: epubUrl || '',
        };
      });
    } catch (error) {
      console.error('Error fetching books:', error);
      throw new Error('Failed to fetch books. Please try again.');
    }
  }
}
