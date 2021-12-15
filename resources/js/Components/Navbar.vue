<template>
  <div class="navBar">
      <div class="navBar__links">
        <router-link class="link logo" :to="{ name: 'index' }"><img src="/images/laravel.svg"></router-link>
        <router-link class="link" :to="{ name: 'about' }">About</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>