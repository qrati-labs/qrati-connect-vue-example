<script setup lang="ts">
import TopBar from './components/TopBar.vue'
</script>

<template>
  <TopBar />
  <router-view />
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
