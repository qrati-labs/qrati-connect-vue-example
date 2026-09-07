import { reactive, readonly } from 'vue';

export type Theme = 'dark' | 'light';
const THEME_KEY = 'qc-theme';

function loadTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const saved = localStorage.getItem(THEME_KEY) as Theme | null;
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const state = reactive<{ theme: Theme }>({ theme: loadTheme() });

if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('data-theme', state.theme);
}

function toggleTheme(): void {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(THEME_KEY, state.theme);
  }
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', state.theme);
  }
}

export function useTheme() {
  return { theme: readonly(state), toggleTheme };
}
