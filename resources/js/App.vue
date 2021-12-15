<template>
  <div class="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <button class="btn" @click="$store.commit('INCREMENT')">INCREMENT</button>
    <h1>
      {{ count }}
    </h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'app',
  components: {
    Navbar: () => import('./Components/Navbar.vue')
  },
  computed: {
    ...mapState({
      count: state => state.count
    }),
  }
}
</script>