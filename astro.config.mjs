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
          assetFileNames: (info) => {
            let extension = info.name.split('.').at(1)

            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extension)) {
              extension = 'images'
            } else if (/css/i.test(extension)) {
              return 'assets/app.[hash].[ext]'
            }

            return `assets/${extension}/[name].[extname]`
          },
          // chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        },
      },
    },
  },
})
