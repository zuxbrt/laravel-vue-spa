const routes = [
    {
      path: '/about',
      component: () => import('../Pages/About.vue'),
      name: 'about'
    },
    {
      path: '/login',
      component: () => import('../Pages/Login.vue'),
      name: 'login'
    },
    {
      path: '/register',
      component: () => import('../Pages/Register.vue'),
      name: 'register'
    },
    { path: '*', component: () => import('../Pages/NotFound.vue'), name: 'notfound' }
  ]
  
  export default routes;