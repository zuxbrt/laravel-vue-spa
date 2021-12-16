require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.prototype.$http = axios
Vue.prototype.$http.defaults.baseURL = 'http://127.0.0.1:8000/api'
Vue.prototype.$http.defaults.headers.post['Content-Type'] = 'application/json'

import router from './Router/index'
import store from './Store/index';
import App from './App.vue'

Vue.use(VueRouter)

const app = new Vue({
  el: '#app',
  router,
  store,
  created () {
    const userInfo = localStorage.getItem('user')
    if (userInfo) {
      const userData = JSON.parse(userInfo)
      this.$store.commit('setUserData', userData)
    }
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      }
    )
  },
  components: { App }
});
