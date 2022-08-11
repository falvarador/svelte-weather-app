import { writable } from 'svelte/store'

const ls = window.localStorage

const createTheme = () => {
  const { subscribe, set } =
        writable((ls.getItem('theme') || 'auto'))

  const handleThemeChange = (/** @type {string} */ theme) => {
    ls.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }

  return {
    subscribe,
    setTheme: (theme) => {
      set(theme)
      handleThemeChange(theme)
    }
  }
}

export const themeStore = createTheme()
