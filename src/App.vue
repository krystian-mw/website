<template>
  <Header />
  <router-view />
  <Footer />
</template>

<style lang="scss">
$gradient: linear-gradient(90deg, #003459 0%, #007ea7 50%, #00a8e8 100%);
body {
  color: white;
  background: $gradient;
}
.logo {
  height: 100px;
  width: calc((4356 / 1290) * 100px);
  object-fit: contain;
}
.gradient {
  background: $gradient;
}
i:focus {
  outline: none;
}
</style>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./assets/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$router.afterEach(() => {
      this.$store.commit("closeNav");
    });
  },
};
</script>
