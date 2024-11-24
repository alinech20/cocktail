<script setup lang="ts">
import AboutDialog from './components/AboutDialog.vue'
import SnackBar from './components/global/SnackBar.vue'
</script>

<template>
  <SnackBar />
  <AboutDialog />
  <RouterView />
</template>
