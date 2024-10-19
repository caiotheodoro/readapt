import { db } from "@/src/server";
import { books } from "@/src/server/schema";
import { sql } from "drizzle-orm";

export async function getRandomBook() {
  const [randomBook] = await db
    .select()
    .from(books)
    .orderBy(sql`RANDOM()`)
    .limit(1)
    .execute();

  return randomBook;
}
