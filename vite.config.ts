import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'production') {
    return {
      build: {
        rollupOptions: {
          output: {
            entryFileNames: 'form-lcbank.js',
            assetFileNames: (assetInfo) => {
              if (assetInfo.name!.endsWith('.css')) {
                return 'form-lcbank.css'
              }
              return '[name].[hash][extname]'
            }
          }
        }
      }
    }
  }
  return {}
})