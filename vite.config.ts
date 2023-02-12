import { defineConfig } from 'vite'
import { dependencies } from './package.json';
import preact from '@preact/preset-vite'

function renderChunks(deps: Record<string, string>) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    chunks[key] = [key];
  });
  return chunks;
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          ...renderChunks(dependencies),
        },
      },
    },
  },
  })
