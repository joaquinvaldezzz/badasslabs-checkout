import { defineConfig } from 'astro/config'
import compress from 'astro-compress'

export default defineConfig({
  compressHTML: false,
  build: {
    inlineStylesheets: 'never',
  },
  server: {
    port: 8080,
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    compress({
      CSS: false,
      HTML: {
        'html-minifier-terser': {
          sortAttributes: false,
          sortClassName: false,
        },
      },
      Image: false,
      JavaScript: false,
      SVG: false,
    }),
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash].[ext]',
          // chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        },
      },
    },
  },
})
