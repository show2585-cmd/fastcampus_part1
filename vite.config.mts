import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    // vite-tsconfig-paths resolves aliases for JS/TS imports, but Sass'
    // own @import resolver doesn't go through it, so it's declared here too.
    alias: {
      '@scss': path.resolve(rootDir, 'src/scss'),
    },
  },
  server: {
    port: 3000,
  },
})
