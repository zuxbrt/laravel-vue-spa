import VueRouter from 'vue-router';
import routes from './routes';

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  let user = localStorage.getItem('user');
  let isRestricted =  to.meta.restricted;
  let pathName = to.name;

  if(pathName == 'login' && user){
    next({ name: 'home'});
  }
  
  if (pathName !== 'login' && isRestricted && !user) next({ name: 'login' })
  else next();
})

export default router;