<template>
  <nav id="header" class="fixed w-full z-30 top-0 bg-white text-darkblue shadow-xl">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <div class="pl-4 flex items-center">
        <a
          class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          href="#"
        >
          <img class="h-12" src="../assets/logo.png" />
        </a>
      </div>

      <div class="block lg:hidden pr-4">
        <button @click="toggleNav" class="flex items-center p-1">
          <i :class="navOpen ? 'fa fa-times' : 'fas fa-ellipsis-v'" class="text-2xl text-lightblue"></i>
        </button>
      </div>

      <div
        :class="navOpen ? '' : 'hidden'"
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 p-4 lg:p-0 z-20"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center text-center">
          <li v-for="route in routes" :key="route.name" class="mr-3">
            <router-link
              tag="a"
              :to="route.path"
              class="inline-block no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
            >{{ route.name }}</router-link>
          </li>
          <li
            id="toggler"
            @click="toggleLocale"
            class="inline-block w-auto h-8 border-darkblue border"
            :class="localeTogglerX ? 'flipped': ''"
          >
            <img src="../assets/localeToggler.svg" class="h-full" />
          </li>
        </ul>
      </div>
    </div>

    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<style lang="scss">
#toggler {
  transition: all 0.5s;
  &.flipped {
    transform: scaleX(-1);
  }
}
</style>

<script>
import $t from "../i18n";
export default {
  data: () => ({
    localeTogglerX: false,
  }),
  computed: {
    routes() {
      const { routes } = this.$router.options;
      let out = [];
      routes.forEach((route) => {
        out.push({
          name: $t(route.name),
          path: route.path,
        });
      });
      return out;
    },
    navOpen() {
      return this.$store.getters.navOpen;
    },
  },
  methods: {
    $t,
    flipLocaleTogglerX() {
      this.localeTogglerX = this.localeTogglerX ? false : true;
    },
    toggleLocale() {
      this.flipLocaleTogglerX();
      this.$store.dispatch("toggleLocale");
    },
    toggleNav() {
      this.$store.commit("toggleNav");
    },
  }
};
</script>