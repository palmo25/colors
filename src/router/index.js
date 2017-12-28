import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ColorBoard from '@/components/ColorBoard'
import NewColor from '@/components/NewColor'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/colorboard',
      name: 'ColorBoard',
      component: ColorBoard
    },
    {
      path: '/newcolor',
      name: 'new-color',
      component: NewColor
    }
  ]
})
