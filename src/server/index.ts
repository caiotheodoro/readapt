import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "../env";
import pkg from 'pg';
import { Elysia } from 'elysia'
import { bookRoutes } from "../routes/book.routes";
import swagger from "@elysiajs/swagger";
import { processedImageRoutes } from "../routes/processed-images.routes";
import { reinforcementAccessibilityRoutes } from "../routes/reinforcement-accessibility.routes";

const { Pool } = pkg;

const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

export const db = drizzle(pool);

const app = new Elysia({ prefix: '/api' })
  .use(swagger())
  .use(bookRoutes)
  .use(processedImageRoutes)
  .use(reinforcementAccessibilityRoutes)

export type App = typeof app

export default app
