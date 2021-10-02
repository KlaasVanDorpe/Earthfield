<template>
  <Default>
    <router-view />
  </Default>
</template>

<script>
export default {
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler: function () {
        if (
          this.$route.path !== "/construction" &&
          this.$route.path !== "/construction/"
        ) {
          this.$router.push("/construction");
        }
      },
    },
  },
};
</script>

<style lang="scss">
</style>