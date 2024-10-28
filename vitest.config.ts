import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,          // Use global test functions like 'describe', 'test', etc.
    environment: 'jsdom',   // Simulate a browser-like environment
    coverage: {
      provider: 'v8'        // Use v8 for code coverage
    }
  }
});
