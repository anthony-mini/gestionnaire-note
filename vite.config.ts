import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import WindiCSS from 'vite-plugin-windicss';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), WindiCSS()],
  test: {
    environment: 'jsdom',
    globals: true,
    exclude: [...configDefaults.exclude, '**/tests/**'],
  },
});
