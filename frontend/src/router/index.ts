import PostsLayout from '@/layouts/PostsLayout.vue'
import ExplorePage from '@/pages/explore/ExplorePage.vue'
import RecipePage from '@/pages/explore/RecipePage.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import ExploreIcon from '~icons/mdi/glass-cocktail'
import { defaultLayout } from './layout/default'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PostsLayout,
    children: [
      {
        path: '',
        name: 'explore',
        components: {
          ...defaultLayout,
          main: ExplorePage
        },
        meta: {
          footerRoute: true,
          icon: ExploreIcon
        }
      }
    ]
  },
  {
    path: '/recipes/:recipeId',
    component: PostsLayout,
    children: [
      {
        path: '',
        name: 'recipe',
        components: {
          ...defaultLayout,
          main: RecipePage
        },
        meta: {
          header: false
        }
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition || { top: 0 }
  }
})
