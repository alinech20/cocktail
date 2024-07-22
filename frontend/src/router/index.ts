import PostsFooter from '@/components/layouts/posts/PostsFooter.vue'
import PostsHeader from '@/components/layouts/posts/PostsHeader.vue'
import PostsLayout from '@/layouts/PostsLayout.vue'
import ExplorePage from '@/pages/explore/ExplorePage.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import ExploreIcon from '~icons/mdi/glass-cocktail'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PostsLayout,
    children: [
      {
        path: '',
        name: 'explore',
        components: {
          main: ExplorePage,
          header: PostsHeader,
          footer: PostsFooter
        },
        meta: {
          footerRoute: true,
          icon: ExploreIcon
        }
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
