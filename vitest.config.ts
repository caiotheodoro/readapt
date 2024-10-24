import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import path from 'path';
import { loadEnv } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
    env: loadEnv('', process.cwd(), ''),
    coverage: {
      reporter: ['text'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    },
  },

});
