<script setup lang="ts">
import { router } from '@/router'
import { computed } from 'vue'

const footerRoutes = computed(() => router.getRoutes().filter((r) => r.meta.footerRoute))

const activeRoute = computed(() =>
  footerRoutes.value.find((r) => r.name === router.currentRoute.value.name)
)
</script>

<template>footer</template>
