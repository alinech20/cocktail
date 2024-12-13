<script setup lang="ts">
import { router } from '@/router'
// import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'

const hideHeader = computed(() => router.currentRoute.value.meta.header === false)

// const headerRef = ref<HTMLElement | undefined>()
// const headerHeight = 60
// const { y: scrollY } = useWindowScroll()
// let prevScrollY = scrollY.value

// window.onscroll = () => {
//   if (!headerRef.value) return

//   if (scrollY.value < headerHeight) return (headerRef.value.style.top = '0px')

//   if (scrollY.value > prevScrollY) headerRef.value.style.top = `-${headerHeight}px`
//   else headerRef.value.style.top = '0px'

//   prevScrollY = scrollY.value
// }
</script>

<template>
  <header v-show="!hideHeader" class="header" ref="headerRef">
    <router-view class="posts-header" name="header" />
  </header>
  <aside class="sidebar-left">
    <router-view class="posts-sidebar--left" name="leftSidebar" />
  </aside>
  <main class="content">
    <router-view class="posts-main" name="main" />
  </main>
  <aside class="sidebar-right">
    <router-view class="posts-sidebar--right" name="rightSidebar" />
  </aside>
  <footer v-if="false" class="footer">
    <router-view class="posts-footer" name="footer" />
  </footer>
</template>

<style lang="scss">
.header {
  height: var(--posts-header-height);
  width: var(--posts-header-width);

  background-color: var(--white);
  box-shadow: var(--slightest-shadow);

  top: 0;
  position: sticky;
  transition: top 0.3s ease-in;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: var(--header-z-index);

  .posts-header {
    width: 100%;
  }
}

.content {
  background-color: var(--background-color);
}

.footer {
  height: var(--posts-footer-height);
  width: var(--posts-footer-width);

  background-color: red;

  position: fixed;
  bottom: 0;
}
</style>
