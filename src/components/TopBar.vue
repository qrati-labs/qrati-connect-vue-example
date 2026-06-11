<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'
import { useTheme } from '../composables/useTheme'

const router = useRouter()
const { user, logout } = useAuth()
const { theme, toggleTheme } = useTheme()

function handleLogout() {
  logout()
  router.push('/login')
}
</script>

<template>
  <header class="topbar">
    <div class="topbar-brand">Qrati Connect</div>

    <nav class="topbar-nav">
      <template v-if="user.user">
        <div class="topbar-profile">
          <div class="avatar">{{ user.user.name.charAt(0).toUpperCase() }}</div>
          <div class="profile-info">
            <span class="profile-name">{{ user.user.name }}</span>
            <span class="profile-email">{{ user.user.email }}</span>
          </div>
        </div>
        <button class="btn btn-outline" @click="handleLogout">Logout</button>
      </template>
      <template v-else>
        <router-link to="/login" class="btn btn-primary">Login</router-link>
      </template>
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
  background: var(--bg-surface);
  border-bottom: 1px solid var(--bg-border);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background 0.2s, border-color 0.2s;
}

.topbar-brand {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.5px;
}

.topbar-nav {
  display: flex;
  align-items: center;
  gap: 16px;
}

.topbar-profile {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--accent);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.95rem;
}

.profile-info {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
}

.profile-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
}

.profile-email {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.btn {
  padding: 8px 18px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  border: none;
  transition: all 0.15s;
}

.btn-primary {
  background: var(--accent);
  color: #fff;
}

.btn-primary:hover {
  background: var(--accent-hover);
}

.btn-outline {
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--accent);
}

.btn-outline:hover {
  background: var(--accent-subtle);
}

.btn-icon {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--bg-border);
  padding: 6px 10px;
  font-size: 1rem;
  line-height: 1;
}

.btn-icon:hover {
  background: var(--accent-subtle);
  color: var(--accent);
  border-color: var(--accent);
}
</style>
