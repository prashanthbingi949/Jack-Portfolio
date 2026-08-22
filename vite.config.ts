import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Jack-Portfolio/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
