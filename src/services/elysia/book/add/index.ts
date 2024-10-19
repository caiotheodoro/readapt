import { db } from "@/src/server";
import { books, type NewBook } from "@/src/server/schema";

export async function addBook(bookData: NewBook) {
  try {
    const [insertedBook] = await db
      .insert(books)
      .values(bookData)
      .returning()
      .execute();

    return insertedBook;
  } catch (error) {
    console.error("Error adding book to database:", error);
    throw new Error("Failed to add book to database");
  }
}
