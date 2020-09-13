<template>
  <nav id="header" class="fixed w-full z-30 top-0 bg-white text-darkblue">
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
        <button id="nav-toggle" class="flex items-center p-1 text-orange-800 hover:text-gray-900">
          <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 p-4 lg:p-0 z-20"
        id="nav-content"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li v-for="route in routes" :key="route.name" class="mr-3">
            <router-link
              tag="a"
              :to="route.path"
              class="inline-block no-underline hover:text-gray-800 hover:text-underline py-2 px-4F"
            >{{ route.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>

    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

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