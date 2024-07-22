<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'

const { recipes } = storeToRefs(useRecipeStore())

onBeforeMount(() => {
  useRecipeStore().fetchRecipes()
})
</script>

<template>
  <div>
    {{ recipes }}
  </div>
</template>
