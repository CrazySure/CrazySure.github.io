import Vue from 'vue'
import App from './App.vue'
// 引入路由
import VueRouter from 'vue-router'

import {routes} from './routes'
Vue.use(VueRouter)



//引入store.js
import {store} from './store/store.js'


const router =new VueRouter({
  routes,
  mode:'history'
})


// 全局守卫
// router.beforeEach(
//   (to,from,next)=>{
   
//     if(to.path =='/login' || to.path == '/register'){
//       //console.log(to);
//       next();
//     }else{
//       alert('您还没有登录，请先登录');
//       next('/login');
//     }
//   }
// )


//后置钩子
// router.beforeEach(
//   (to,from) =>{
//     alert('还没有登录，请先登录');
//   }
// )

//引入axios
import axios from 'axios'
axios.defaults.baseURL = 'https://pizza-app-5582d.firebaseio.com/'
//配置vue原型(在任何组件中都可以正常使用axios)
Vue.prototype.http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
