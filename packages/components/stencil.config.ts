import { Config } from '@stencil/core'
import { postcss } from '@stencil/postcss'
import { sass } from '@stencil/sass'
import autoprefixer from 'autoprefixer'

export const config: Config = {
  namespace: 'components',
  globalStyle: 'src/global/variables.scss',
  plugins: [
    sass({
      includePaths: ['node_modules']
    }),
    postcss({
      plugins: [
        autoprefixer({
          cascade: false
        })
      ]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
}
