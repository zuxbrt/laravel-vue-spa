<template>
  <div class="navBar">
      <div class="navBar__links">
        <router-link class="link" :to="{ name: 'about' }">About</router-link>

        <router-link class="link" :to="{ name: 'login' }">Login</router-link>
        <router-link class="link" :to="{ name: 'register' }">Register</router-link>

      </div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>