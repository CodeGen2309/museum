import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: function () {return import('../views/Home')},
  },
  {
    path: '/papers',
    name: 'papers',
    component: function () {return import('../views/papersPage.vue')},
  },
  {
    path: '/papers/:year',
    name: 'paperDetails',
    props: true,
    component: function () {return import('../views/paperDetailsPage.vue')},
  },
  {
    path: '/empty',
    name: 'stars',
    component: function () {return import('../views/empty.vue')},
  },
  {
    path: '/pdf',
    name: 'pdf',
    component: function () {return import('../views/test.vue')},
  },
  {
    path: '/about',
    name: 'about',
    component: function () {return import('../views/aboutCorpPage.vue')},
  },
  {
    path: '/corp-history',
    name: 'aboutCorp',
    component: function () {return import('../views/corpHistoryPage.vue')},
  },
  {
    path: '/socotv',
    name: 'socOtv',
    component: function () {return import('../views/socOtv.vue')},
  },
  {
    path: '/selivanov',
    name: 'selivanov',
    component: function () {return import('../views/selivanov.vue')},
  },
  {
    path: '/jnkhistory',
    name: 'jnkHistory',
    component: function () {return import('../views/jnkHistoryPage.vue')},
  },
  {
    path: '/toppersonal',
    name: 'toppersonal',
    component: function () {return import('../views/personalPage.vue')},
  },
  {
    path: '/honorboard',
    name: 'honorboard',
    component: function () {return import('../views/honorBoardPage.vue')},
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 