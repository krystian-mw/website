import { createStore } from "vuex";

export default createStore({
  state: {
    darkMode: false,
    repos: [],
    navOpen: false,
  },
  mutations: {
    enableDark(state) {
      state.darkMode = true;
    },
    disableDark(state) {
      state.darkMode = false;
    },
    toggleNav(state) {
      state.navOpen = !state.navOpen
    },
    closeNav (state) {
      state.navOpen = false
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
  },
  getters: {
    darkMode(state) {
      return state.darkMode;
    },
    repos(state) {
      return state.repos;
    },
    navOpen (state) {
      return state.navOpen
    }
  },
  modules: {},
});
