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

function applyTheme(theme: Theme): void {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', theme);
  if (theme === 'dark') {
    document.documentElement.classList.add('cc--darkmode');
  } else {
    document.documentElement.classList.remove('cc--darkmode');
  }
}

if (typeof document !== 'undefined') {
  applyTheme(state.theme);
}

function toggleTheme(): void {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(THEME_KEY, state.theme);
  }
  applyTheme(state.theme);
}

export function useTheme() {
  return { theme: readonly(state), toggleTheme };
}
