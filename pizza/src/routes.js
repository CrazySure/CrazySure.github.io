//一级路由
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import About from './components/about/About.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
//二级路由
import Contact from './components/about/Contact.vue'
import Delivery from './components/about/Delivery.vue'
import History from './components/about/History.vue'
import OrderingGuide from './components/about/OrderingGuide.vue'
//三级路由
import Phone from './components/about/contact/Phone.vue'
import Person from './components/about/contact/Person.vue'



export const routes = [
  {path:'/',name:'homeLink',
    components:{
      default:Home,
      'history':History,
      'orderingGuide':OrderingGuide,
      'delivery':Delivery
    }
  },
  {path:'/menu',name:'menuLink',component:Menu
    //路由独享守卫
    // ,beforeEnter:(to,from,next)=>{
    //   alert('非登录状态禁止访问此页面');
    //   next();
    // }
  
},
  {path:'/admin',name:'adminLink',component:Admin},
  {path:'/about',name:'aboutLink',component:About,redirect:'/about/history',children:
  [
    {path:'/about/history',name:'historyLink',component:History},
    {path:'/about/contact',name:'contactLink',component:Contact,redirect:'/contact/phone',children:
      [
        {path:'/contact/phone',name:'phoneLink',component:Phone},
        {path:'/contact/person',name:'personLink',component:Person}
      ]
    },
    {path:'/about/orderingGuide',name:'orderingGuideLink',component:OrderingGuide},
    {path:'/about/delivery',name:'deliveryLink',component:Delivery}
  ]

  },
  {path:'/login',name:'loginLink',component:Login},
  {path:'/register',name:'registerLink',component:Register},
  {path:'*',redirect:'/'}//用户输入错误默认跳转到首页
]


