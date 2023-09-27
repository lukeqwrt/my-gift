import { createRouter, createWebHistory } from 'vue-router'
import Day from '../views/Day.vue'
import MessageView from '../views/MessageView.vue'
import Travels from '../views/TravelsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'day',
      component: Day
    },
    {
      path: '/message/:id',
      name: 'message',
      component: MessageView,
      props: true
    },
    {
      path: '/travels',
      name: 'travel',
      component: Travels
    },
  ]
})

export default router
