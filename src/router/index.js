import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Video from '@/components/Video.vue'
import User from '@/components/User.vue'
import First from '@/components/First.vue'
import Alert from '@/components/Alert.vue'
import DataShow from '@/components/DataShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/first',
        name: 'first',
        component: First,
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/video',
        name: 'video',
        component: Video,
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/user',
        name: 'user',
        component: User,
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/alert',
        name: 'alert',
        component: Alert,
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/datashow',
        name: 'datashow',
        component: DataShow,
        meta: {
          requireAuth: true
        }
      }

    ]

  }

]

const router = new VueRouter({
  mode: 'history', // 解决网页#问题
  routes
})

export default router
