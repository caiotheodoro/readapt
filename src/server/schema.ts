import { pgTable, serial, text,  integer, boolean,decimal } from "drizzle-orm/pg-core";


export const books = pgTable("books", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  cover: text("cover").notNull(),
  downloadUrl: text("download_url").notNull(),
});

export const processedImages = pgTable("processed_images", {
  id: serial("id").primaryKey(),
  score: decimal("score").notNull(),
  image: text("image").notNull(),
  Arched_Eyebrows: boolean("arched_eyebrows").notNull(),
  Bags_Under_Eyes: boolean("bags_under_eyes").notNull(),
  Bushy_Eyebrows: boolean("bushy_eyebrows").notNull(),
  Eyeglasses: boolean("eyeglasses").notNull(),
  Gray_Hair: boolean("gray_hair").notNull(),
  High_Cheekbones: boolean("high_cheekbones").notNull(),
  Male: boolean("male").notNull(),
  Narrow_Eyes: boolean("narrow_eyes").notNull(),
  Young: boolean("young").notNull(),
});

export type Book = typeof books.$inferSelect;
export type NewBook = typeof books.$inferInsert;
export type ProcessedImage = typeof processedImages.$inferSelect;
export type NewProcessedImage = typeof processedImages.$inferInsert;
