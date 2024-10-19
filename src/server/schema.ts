import { pgTable, serial, text, varchar, integer } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 25 }).notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
});

export const books = pgTable("books", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  cover: text("cover").notNull(),
  downloadUrl: text("download_url").notNull(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Book = typeof books.$inferSelect;
export type NewBook = typeof books.$inferInsert;
