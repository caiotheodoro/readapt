import { pgTable, serial, text,  integer, boolean,decimal, timestamp } from "drizzle-orm/pg-core";


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
  Arched_Eyebrows: boolean("arched_eyebrows").notNull().default(true),
  Bags_Under_Eyes: boolean("bags_under_eyes").notNull().default(true),
  Bald: boolean("bald").notNull().default(true),
  Blurry: boolean("blurry").notNull().default(true),
  Bushy_Eyebrows: boolean("bushy_eyebrows").notNull().default(true),
  Eyeglasses: boolean("eyeglasses").notNull().default(true),
  Gray_Hair: boolean("gray_hair").notNull().default(false),
  Narrow_Eyes: boolean("narrow_eyes").notNull().default(true),
  Pale_Skin: boolean("pale_skin").notNull().default(false),
  Receding_Hairline: boolean("receding_hairline").notNull().default(false),
  Young: boolean("young").notNull().default(false),
  Predicted_Visual_Impairment: text("predicted_visual_impairment").notNull(),
});


export const reinforcementAcessibility = pgTable("reinforcement_acessibility", {
  id: serial("id").primaryKey(),
  processedImageId: integer("processed_image_id").references(() => processedImages.id),
  reinforcementVisualImpairment: text("reinforcement_visual_impairment").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type Book = typeof books.$inferSelect;
export type NewBook = typeof books.$inferInsert;
export type ProcessedImage = typeof processedImages.$inferSelect;
export type NewProcessedImage = typeof processedImages.$inferInsert;
export type ReinforcementAcessibility = typeof reinforcementAcessibility.$inferSelect;
export type NewReinforcementAcessibility = typeof reinforcementAcessibility.$inferInsert;
