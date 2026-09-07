<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import {
  initGtm,
  checkConsentRequired,
  ensureCookieConsentInitialized,
  showCookiePreferences,
} from '../lib/cookieConsent';

let cancelled = false;

onMounted(() => {
  initGtm();

  if (typeof window !== 'undefined') {
    window.showCookiePreferences = () => {
      void showCookiePreferences();
    };
  }

  void checkConsentRequired().then((required) => {
    if (!cancelled) {
      void ensureCookieConsentInitialized(required);
    }
  });
});

onUnmounted(() => {
  cancelled = true;
});
</script>

<template>
  <!-- vanilla-cookieconsent injects its own accessible DOM into document.body -->
  <div class="cookie-consent-container" aria-hidden="true" />
</template>
