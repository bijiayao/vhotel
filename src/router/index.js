import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/html/home'
import music from '../page/html/music'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/music',
      name: 'music',
      component: music
    }
  ]
})
