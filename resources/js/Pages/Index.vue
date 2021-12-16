<template>
  <div class="page-container">
    <h2 class="page-title">
      Index
    </h2>
  </div>
</template>
<script>
export default {
    name: "index",
    data() {
        return {
            name: null,
        }
    },
    created() {
        // if (window.Laravel.user) {
        //     this.name = window.Laravel.user.name
        // }
    },
}
</script>