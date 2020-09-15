import { createStore } from "vuex";

export default createStore({
  state: {
    darkMode: false,
    repos: [],
    navOpen: false,
    locale: "pl",
  },
  mutations: {
    enableDark(state) {
      state.darkMode = true;
    },
    disableDark(state) {
      state.darkMode = false;
    },
    toggleNav(state) {
      state.navOpen = !state.navOpen;
    },
    closeNav(state) {
      state.navOpen = false;
    },
    addRepo(state, repo) {
      for (let i = 0; i < state.repos.length; i++) {
        const _repo = state.repos[i];
        if (_repo.name === repo.name) {
          console.log("refusing to add duplicate repo");
          return false;
        }
      }
      state.repos.push(repo);
    },
    setLocale(state, locale) {
      state.locale = locale;
    },
  },
  actions: {
    toggleLocale({commit}) {
      const locale = this.state.locale === "en" ? "pl" : "en";
      document.getElementsByTagName("html")[0].lang = locale
      commit('setLocale', locale)
      // Locale is located in nav so it'd be good to close it as well
      commit('closeNav')
    }
  },
  getters: {
    darkMode(state) {
      return state.darkMode;
    },
    repos(state) {
      return state.repos;
    },
    navOpen(state) {
      return state.navOpen;
    },
    locale(state) {
      return state.locale;
    },
  },
  modules: {},
});
