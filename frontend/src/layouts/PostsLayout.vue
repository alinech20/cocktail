<template>
  <header class="header">
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
