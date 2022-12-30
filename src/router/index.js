import { createRouter, createWebHistory } from 'vue-router'
import YtHome from '@/components/yt/YtHome.vue'
import YtStream from '@/components/yt/YtStream.vue'

const routes = [
  {
    path: '/',
    name: 'yt-home',
    component: YtHome,
    meta: {
        layout: 'GlobalLayout', 
    },
  },
  {
    path: '/watch/:id',
    name: 'yt-stream',
    component: YtStream,
    meta: {
        layout: 'GlobalLayout', 
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
        layout: 'StreamLayout', 
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
