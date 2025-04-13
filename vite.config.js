import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Make sure the build folder is correctly specified
    rollupOptions: {
      external: [
        'react-slick',
        'slick-carousel/slick/slick.css',
        'slick-carousel/slick/slick-theme.css',
      ],
    },
  },
});
