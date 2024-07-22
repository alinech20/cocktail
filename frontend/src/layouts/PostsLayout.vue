<template>
  <header v-if="false" class="header">
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
  <footer class="footer">
    <router-view class="posts-footer" name="footer" />
  </footer>
</template>

<style lang="scss">
@use '../styles/variables/sizes.scss';

.header {
  height: sizes.$PostsHeaderHeight;
  background-color: red;
  position: sticky;
}

.footer {
  height: sizes.$PostsHeaderHeight;
  width: 100vw;
  background-color: red;
  position: fixed;
  bottom: 0;
}
</style>
