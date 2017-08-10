import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'; //发送ajax请求的对象
import ElementUI from 'element-ui'
import layer from 'vue-layer'
import 'element-ui/lib/theme-default/index.css'



import Login from '@/components/login.vue';
import Home from '@/components/home.vue';
import Silder1 from '@/components/Silder1';
import Silder2 from '@/components/Silder2';
import Silder3 from '@/components/Silder3';
import Silder4 from '@/components/Silder4';
//import File from '@/components/file';
Vue.prototype.$layer = layer(Vue);
Vue.use(ElementUI)
Vue.use(Router)
Vue.use(VueResource); //这个对象就可以直接用

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'default',
      path: '/',
      redirect:'/login'
    },
    {
      name:'home',
      path:'/home',
      component:Home,
      children:[
        {
          name:'silider1',
          path:'/base/silder1',
          component:Silder1
        },{
          name:'silider2',
          path:'/webmanage/silder2',
          component:Silder2
        },{
          name:'silider3',
          path:'/messagemanage/silder3',
          component:Silder3
        },{
          name:'silider4',
          path:'/peoplestyle/silder4',
          component:Silder4
        }
      ]
    }
  ]
})
