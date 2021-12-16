<template>
  <div class="navBar">
      <div class="navBar__links">
        <router-link class="link logo" :to="{ name: 'index' }">
          <img src="/images/laravel.svg">
        </router-link>
        <router-link class="link" v-if="isLogged" :to="{ name: 'home' }">Home</router-link>
        <router-link class="link" v-if="!isLogged" :to="{ name: 'login' }">Login</router-link>
        <!-- <router-link class="link" v-if="!isLogged" :to="{ name: 'register' }">Register</router-link> -->
        <button type="button" class="logout-btn" @click="logout()" v-if="isLogged">
          Logout
        </button>

      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'navbar',
  computed: {
    ...mapGetters([
      'isLogged'
    ])
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>