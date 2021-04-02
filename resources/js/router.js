import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./views/public'),
      children:[
        {
          path: '/',
          component: () => import('./views/public/home'),
        }
      ]

    }
  ]
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