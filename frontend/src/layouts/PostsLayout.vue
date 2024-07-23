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
@use '../styles/variables/sizes.scss';
@use '../styles/variables/spacing.scss';

.header {
  height: sizes.$PostsHeaderHeight;
  width: sizes.$PostsHeaderWidth;
  background-color: red;
  position: sticky;
}

.content {
  padding: spacing.$MainContentPadding;
}

.footer {
  height: sizes.$PostsFooterHeight;
  width: sizes.$PostsFooterWidth;
  background-color: red;
  position: fixed;
  bottom: 0;
}
</style>
