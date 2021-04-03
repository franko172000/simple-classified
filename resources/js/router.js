import Vue from 'vue'
import Router from 'vue-router'
import localStore from 'store'
Vue.use(Router)
const router = new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('./views/public'),
      children:[
        {
          path: '/',
          component: () => import('./views/public/home'),
        },
        {
          path: '/post-ad',
          component: () => import('./views/public/post-ad'),
        },
      ]

    },
    {
      path: '/auth',
      redirect: 'auth/login',
      component: () => import('./views/auth'),
      children:[
        {
          path: '/auth/login',
          component: () => import('./views/auth/login'),
        },
        {
          path: '/auth/register',
          component: () => import('./views/auth/register'),
        }
      ]

    },
    {
      path: '/page-404',
      component: () => import('./views/public/404'),
    },
     // Redirect to 404
    {
      path: '*', redirect: '/page-404', hidden: true,
    },
    
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!localStore.get('accessToken')) {
      next({
        path: '/auth/login',
        query: { redirect: to.fullPath },
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
// router.beforeEach((to,from,next)=>{
//   if(to.matched.some(record=>record.meta.requiresAuth)){
//       if(TokenService.getAccessToken() === null || TokenService.getAccessToken() === undefined){
//           next({
//               path:'./login',
//               params : {nextUrl : to.fullPath}
//           })
//       }else{
//           next()
//       }
//   }else if(to.matched.some(record=>record.meta.logout)){
//       //remove access token
//       TokenService.removeAccessToken();
//       //redirect to login
//       window.location.href = './login'
//   }
//   else{
//       next()
//   }
// })

export default router