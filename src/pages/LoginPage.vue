<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const { login } = useAuth()

const email = ref('')
const name = ref('')
const loading = ref(false)
const error = ref('')

async function handleSubmit() {
  if (!email.value.trim() || !name.value.trim()) {
    error.value = 'Email and name required.'
    return
  }

  loading.value = true
  error.value = ''

  try {
    await login(email.value.trim(), name.value.trim())
    router.push('/')
  } catch (e) {
    error.value = 'Login failed. Try again.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="login-page">
    <div class="login-card">
      <h1 class="login-title">Sign In</h1>
      <p class="login-sub">Enter your details to continue</p>

      <form @submit.prevent="handleSubmit" class="login-form">
        <div class="field">
          <label for="name">Full Name</label>
          <input
            id="name"
            v-model="name"
            type="text"
            placeholder="John Doe"
            autocomplete="name"
          />
        </div>

        <div class="field">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="john@example.com"
            autocomplete="email"
          />
        </div>

        <p v-if="error" class="error">{{ error }}</p>

        <button type="submit" class="submit-btn" :disabled="loading">
          <span v-if="loading">Signing in…</span>
          <span v-else>Sign In</span>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-body);
  padding: 24px;
}

.login-card {
  background: var(--bg-surface);
  border: 1px solid var(--bg-border);
  border-radius: 12px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  transition: background 0.2s, border-color 0.2s;
}

.login-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 6px;
}

.login-sub {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0 0 28px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-muted);
}

.field input {
  padding: 10px 14px;
  background: var(--bg-body);
  border: 1px solid var(--bg-border);
  border-radius: 6px;
  color: var(--text-primary);
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.15s, background 0.2s;
}

.field input:focus {
  border-color: var(--accent);
}

.field input::placeholder {
  color: var(--text-placeholder);
}

.error {
  font-size: 0.85rem;
  color: #f87171;
  margin: 0;
}

.submit-btn {
  padding: 11px;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
  margin-top: 4px;
}

.submit-btn:hover:not(:disabled) {
  background: var(--accent-hover);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
