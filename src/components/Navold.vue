<template>
  <div id="nav" class="shadow-lg sticky top-0 bg-white z-auto">
    <nav class="flex content-between">
      <img class="m-auto p-5" src="../assets/logo.png" />
      <ul>
        <router-link
          v-for="route in routes"
          :key="route.name"
          :to="route.path"
          tag="a"
        >{{ route.name }}</router-link>
      </ul>
      <div id="toggler">
        <div />
        <div />
      </div>
    </nav>
  </div>
</template>

<style>
#nav img {
  max-height: 100px;
}
</style>

<script>
export default {
  data() {
    const { routes } = this.$router.options;
    return {
      routes,
    };
  },
};
</script>
