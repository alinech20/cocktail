import PostsFooter from '@/components/layouts/posts/PostsFooter.vue'
import PostsHeader from '@/components/layouts/posts/PostsHeader.vue'
import PostsLayout from '@/layouts/PostsLayout.vue'
import ExplorePage from '@/pages/explore/ExplorePage.vue'
import RecipePage from '@/pages/explore/RecipePage.vue'
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
  },
  {
    path: '/recipes/:recipeId',
    component: PostsLayout,
    children: [
      {
        path: '',
        name: 'recipe',
        components: {
          main: RecipePage
        }
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
