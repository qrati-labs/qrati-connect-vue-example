<script setup lang="ts">
import { onMounted } from 'vue';
import {
  ensureCookieConsentInitialized,
  showCookiePreferences,
} from '../lib/cookieConsent';

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.showCookiePreferences = showCookiePreferences;
  }
  void ensureCookieConsentInitialized();
});
</script>

<template>
  <!-- vanilla-cookieconsent injects its own accessible DOM into document.body -->
  <div class="cookie-consent-container" aria-hidden="true" />
</template>
