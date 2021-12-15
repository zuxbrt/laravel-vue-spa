const routes = [
    {
      path: '/about',
      component: () => import('../Pages/About.vue'),
      name: 'about'
    },
  ]
  
  export default routes;