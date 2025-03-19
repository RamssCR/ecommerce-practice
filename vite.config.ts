import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [
      react(),
      tailwindcss(),
      tsconfigPaths(),
    ],
    build: {
      minify: isProduction ? 'esbuild' : false,
      sourcemap: !isProduction,
    },
    server: {
      open: true,
    },
  }
})
