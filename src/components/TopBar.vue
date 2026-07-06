<script setup lang="ts">
import { useTheme } from '../composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <header class="topbar">
    <div class="topbar-brand">Qrati Connect</div>

    <nav class="topbar-nav">
      <button
        class="btn btn-icon"
        @click="toggleTheme"
        :title="theme.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        {{ theme.theme === 'dark' ? '☀' : '🌙' }}
      </button>
    </nav>
  </header>
</template>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 60px;
  background: var(--card-bg);
  border-bottom: 1px solid var(--pill-border);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background 0.2s, border-color 0.2s;
}

.topbar-brand {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--brand-accent);
  letter-spacing: 0.5px;
}

.topbar-nav {
  display: flex;
  align-items: center;
  gap: 16px;
}

.btn-icon {
  background: transparent;
  color: var(--page-muted);
  border: 1px solid var(--pill-border);
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  transition: all 0.15s;
}

.btn-icon:hover {
  background: var(--pill-bg-hover);
  color: var(--brand-accent);
  border-color: var(--pill-border-hover);
}
</style>
