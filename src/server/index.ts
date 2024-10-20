import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "../env";
import pkg from 'pg';
import { Elysia } from 'elysia'
import { bookRoutes } from "../routes/book.routes";
import swagger from "@elysiajs/swagger";
import userRoutes from "../routes/user.routes";
import { processedImageRoutes } from "../routes/processed-images.routes";

const { Pool } = pkg;

const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

export const db = drizzle(pool);

const app = new Elysia({ prefix: '/api' })
  .use(swagger())
  .use(userRoutes)
  .use(bookRoutes)
  .use(processedImageRoutes)

export type App = typeof app

export default app
