<script setup lang="ts">
import { computed } from 'vue'
import { useAuth } from '../composables/useAuth'
import { useTheme } from '../composables/useTheme'

const { user } = useAuth()
const { theme } = useTheme()

const fname = computed(() => {
  if (!user.user) return ''
  const parts = user.user.name.trim().split(' ')
  return parts[0] || ''
})

const lname = computed(() => {
  if (!user.user) return ''
  const parts = user.user.name.trim().split(' ')
  return parts.slice(1).join(' ') || ''
})

const orgId = import.meta.env.VITE_ORGANIZATION_ID as string
</script>

<template>
  <div class="connect-page">
    <qrati-connect
      id="qrati-connect-main"
      :organization-id="orgId"
      :theme="theme.theme"
      :user-id="user.user?.userId ?? ''"
      :fname="fname"
      :lname="lname"
      router="hash"
    />
  </div>
</template>

<style scoped>
.connect-page {
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
}
</style>
