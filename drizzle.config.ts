import type { Config } from 'drizzle-kit';
import { env } from './src/env';


export default {
  schema: './src/server/schema.ts',
  out: './src/server/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
} satisfies Config;
