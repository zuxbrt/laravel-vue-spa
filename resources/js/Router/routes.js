const routes = [
    {
      path: '/',
      component: () => import('../Pages/Index.vue'),
      name: 'index',
      meta: {
        restricted: false
      }
    },
    {
      path: '/home',
      component: () => import('../Pages/Home.vue'),
      name: 'home',
      meta: {
        restricted: true
      }
    },
    {
      path: '/login',
      component: () => import('../Pages/Login.vue'),
      name: 'login',
      meta: {
        restricted: false
      }
    },
    // {
    //   path: '/register',
    //   component: () => import('../Pages/Register.vue'),
    //   name: 'register',
    //   meta: {
    //     restricted: false
    //   }
    // },
    { path: '*', component: () => import('../Pages/NotFound.vue'), name: 'notfound' }
  ]
  
  export default routes;