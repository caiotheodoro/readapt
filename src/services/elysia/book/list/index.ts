import { db } from "@/src/server";
import { books } from "@/src/server/schema";
import { sql } from "drizzle-orm";

interface GetBooksParams {
  page?: number;
  pageSize?: number;
  search?: string;
}

export async function getBooks({ page = 1, pageSize = 10, search }: GetBooksParams) {
  const offset = (page - 1) * pageSize;

  let query = db.select().from(books);

  if (search) {
    query = query.where(
      sql`${books.title} ILIKE ${`%${search}%`} OR ${books.author} ILIKE ${`%${search}%`}`
    ) as any;
  }

  const [booksResult, totalCount] = await Promise.all([
    query.limit(pageSize).offset(offset).execute(),
    db.select({ count: sql<number>`count(*)` }).from(books).execute(),
  ]);

  return {
    books: booksResult,
    totalCount: totalCount[0].count,
    page,
    pageSize,
    totalPages: Math.ceil(totalCount[0].count / pageSize),
  };
}
