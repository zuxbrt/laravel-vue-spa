<template>
  <div class="page-container">
    <h2 class="page-title">
      404 not found
    </h2>
    <router-link :to="{ name: 'index' }">Back</router-link>
  </div>
</template>

<script>
export default {
  name: 'notfound'
}
</script>