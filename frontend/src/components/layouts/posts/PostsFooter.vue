<script setup lang="ts">
import { router } from '@/router'
import { computed } from 'vue'

import FooterNavigationItem from '@/components/FooterNavigationItem.vue'

const footerRoutes = computed(() => router.getRoutes().filter((r) => r.meta.footerRoute))

const activeRoute = computed(() =>
  footerRoutes.value.find((r) => r.name === router.currentRoute.value.name)
)

const goTo = (target: string) => router.push({ path: target })
</script>

<template>
  <nav class="footer-nav">
    <FooterNavigationItem
      v-for="route in footerRoutes"
      :key="route.path"
      class="route-item"
      :class="{
        'route-item--active': activeRoute === route
      }"
      :route="route"
      @click="goTo(route.path)"
    />
  </nav>
</template>

<style lang="scss">
.footer-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  .route-item {
    cursor: pointer;
  }
}
</style>
