import { reactive, readonly } from 'vue'

type Theme = 'dark' | 'light'
const THEME_KEY = 'app_theme'

function loadTheme(): Theme {
  const saved = localStorage.getItem(THEME_KEY)
  return saved === 'light' ? 'light' : 'dark'
}

const state = reactive<{ theme: Theme }>({ theme: loadTheme() })

document.documentElement.setAttribute('data-theme', state.theme)

function toggleTheme(): void {
  state.theme = state.theme === 'dark' ? 'light' : 'dark'
  localStorage.setItem(THEME_KEY, state.theme)
  document.documentElement.setAttribute('data-theme', state.theme)
}

export function useTheme() {
  return { theme: readonly(state), toggleTheme }
}
