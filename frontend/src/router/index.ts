import PostsLayout from '@/layouts/PostsLayout.vue'
import ExplorePage from '@/pages/explore/ExplorePage.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PostsLayout,
    children: [
      {
        path: '',
        name: 'Explore',
        components: {
          main: ExplorePage
        }
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
