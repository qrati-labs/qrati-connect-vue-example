import { reactive, readonly } from 'vue'

export interface AuthUser {
  userId: string
  email: string
  name: string
}

const STORAGE_KEY = 'auth_user'

function loadFromStorage(): AuthUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

const state = reactive<{ user: AuthUser | null }>({
  user: loadFromStorage(),
})

async function hashEmail(email: string): Promise<string> {
  const encoded = new TextEncoder().encode(email.toLowerCase().trim())
  const hashBuffer = await crypto.subtle.digest('SHA-256', encoded)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 16)
}

async function login(email: string, name: string): Promise<void> {
  const userId = await hashEmail(email)
  try{
    await fetch(import.meta.env.VITE_API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, userId }),
    })
  }catch{(error: any) => {
    console.error('Login error:', error)
  }}  

  const user: AuthUser = {
    userId,
    email,
    name,
  }

  state.user = user
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
}

function logout(): void {
  state.user = null
  localStorage.removeItem(STORAGE_KEY)
}

export function useAuth() {
  return {
    user: readonly(state),
    login,
    logout,
  }
}
