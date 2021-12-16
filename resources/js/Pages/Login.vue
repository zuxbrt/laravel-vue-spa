<template>
  <div class="page-container">
    <h2 class="page-title">
      Login
    </h2>

    <form @submit.prevent="login" class="login-form">
      <input type="email" class="form-input" name="email" v-model="email">
      <input type="password" class="form-input" name="password" v-model="password">
      <button type="submit" class="form-button">Login</button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
      return {
          email: "",
          password: "",
          error: null
      }
  },
  methods: {
      login(){
          this.$store
          .dispatch('login', {
              email: this.email,
              password: this.password
          })
          .then(() => {
              this.$router.push({ name: 'home' })
          })
          .catch(err => {
              console.log(err)
          })
      }
  }
}
</script>