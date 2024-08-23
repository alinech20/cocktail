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
  <footer v-if="false" class="footer">
    <router-view class="posts-footer" name="footer" />
  </footer>
</template>

<style lang="scss">
.header {
  height: var(--posts-header-height);
  width: var(--posts-header-width);
  background-color: red;
  position: sticky;
}

.content {
  padding: var(--main-content-padding);
}

.footer {
  height: var(--posts-footer-height);
  width: var(--posts-footer-width);
  background-color: red;
  position: fixed;
  bottom: 0;
}
</style>
