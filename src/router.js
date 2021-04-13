import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Index from './views/index'
import Register from './views/register'

Vue.use(Router)

export default new Router({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/login',component:Login},
        {path:'/index',component:Index},
        {path:'/register',component:Register},
    ]

})
// const router =  new Router({
//     routes:[
//         {path:'/',redirect:'/index'},
//         {path:'/login',component:Login},
//         {path:'/index',component:Index}
//     ]

// })
// // 挂载路由导航守卫
// router.beforeEach((to,from,next) => {
//     // to 将要访问的路径
//     // from 代表从哪个路径跳转而来
//     // next 是一个函数，表示放行
//     //  next() 放行 next('/login)
//     if(to.path === '/login') return next()
//     // 获取token
//     const tokenStr = window.sessionStorage.getItem('token')
//     if(!tokenStr) return next('login')
//     next()
// })

// export default router