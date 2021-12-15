<template>
    <div>
        Welcome {{ name }}
    </div>
</template>

<script>
export default {
    name: "dashboard",
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
    beforeRouteEnter(to, from, next) {
        // if (!window.Laravel.isLoggedin) {
        //     window.location.href = "/";
        // }
        next();
    }
}
</script>