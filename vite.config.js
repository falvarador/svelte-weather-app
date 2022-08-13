import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import path from 'node:path'

export default defineConfig({
  base: '/svelte-weather-app/',
  plugins: [svelte()],
  resolve: {
    alias: {
      $: path.resolve('./src')
    }
  }
})
