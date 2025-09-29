// import { defineConfig } from 'vite'

// export default defineConfig(({ mode }) => {

//   if (mode === 'production') {
//     return {
//       build: {
//         rollupOptions: {
//           output: {
//             entryFileNames: 'form-lcbank.js',
//             assetFileNames: (assetInfo) => {
//               if (assetInfo.name!.endsWith('.css')) {
//                 return 'form-lcbank.css'
//               }
//               return '[name].[hash][extname]'
//             }
//           }
//         }
//       }
//     }
//   }
//   return {
//     test: {
//       includeSource: ['src/**/*.{js,ts}'],
//     },
//     define: {
//       'import.meta.vitest': 'undefined',
//     }
//   }
// })

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
  return {
    server: {
      host: true, // permite acesso via rede
      port: 5173, // ou outro se preferir
    },
    test: {
      includeSource: ['src/**/*.{js,ts}'],
    },
    define: {
      'import.meta.vitest': 'undefined',
    }
  }
})
