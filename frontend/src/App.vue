<script setup lang="ts">
import { BASE_URL, ENDPOINTS } from './constants'

const fetchStuff = async () => {
  console.log('fetch')
  const url = BASE_URL + ENDPOINTS.TEST
  const response = await fetch(url)
  console.log(await response.json())
}
</script>

<template>
  <button @click="fetchStuff">CLICK ME YOU FUCKER</button>
</template>
