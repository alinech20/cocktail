<script setup lang="ts">
import { ref } from 'vue'
import DialogBox from './global/DialogBox.vue'

const show = ref(false)
</script>

<template>
  <DialogBox v-if="show">
    <template #title>About this app</template>
    <template #content>
      <article class="about__content">
        <ul>
          <li>Current version: 1.0.3</li>
          <li>Developed by: The Witty Penguin</li>
        </ul>
      </article>
    </template>
  </DialogBox>
</template>

<style lang="scss">
.dialog__content {
  text-align: center;

  ul {
    list-style-type: none;
    padding: 0;
  }
}
</style>
