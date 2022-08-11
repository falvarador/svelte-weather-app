import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import path from 'node:path'
// import preprocess from 'svelte-preprocess'

export default defineConfig({
  base: '/svelte-weather-app/',
  plugins: [svelte()],
  // plugins: [svelte({
  //   preprocess: preprocess({
  //     postcss: {
  //       plugins: [
  //         require('@fullhuman/postcss-purgecss')({
  //           content: ['./**/*.html', './**/*.svelte']
  //         })
  //       ]
  //     }
  //   })
  // })],
  resolve: {
    alias: {
      $: path.resolve('./src')
    }
  }
})
