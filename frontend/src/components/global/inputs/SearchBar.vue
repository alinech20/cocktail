<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <input class="custom-input search-bar" v-model="model" type="text" />
</template>

<style lang="scss">
.search-bar {
  width: 100%;
}
</style>
