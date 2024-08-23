<script setup lang="ts">
import { useTextFormatter } from '@/utils/useTextFormatter'
import { defineProps } from 'vue'
import type { RouteRecordNormalized } from 'vue-router'

defineProps<{
  route: RouteRecordNormalized
}>()

const { capitalizeFirstLetter } = useTextFormatter()
</script>

<template>
  <article>
    <section v-if="route.meta.icon" class="item-icon-wrapper">
      <component class="item-icon" :is="route.meta.icon" />
    </section>
    <section class="route-item__text">
      {{ capitalizeFirstLetter(route.name!.toString()) }}
    </section>
  </article>
</template>

<style lang="css">
.route-item--active {
  color: var(--white);
}

.item-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  .item-icon {
    font-size: var(--footer-navigation-icon-size);
  }
}
</style>
