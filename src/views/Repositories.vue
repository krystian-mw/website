<template>
  <h1 class="text-center text-xl">Repositories</h1>
  <div class="flex flex-wrap justify-around">
    <div
      v-for="repo in repos"
      :key="repo.name"
      class="m-1 w-128 bg-gray-100 shadow-lg"
    >
      <div class="p-5 border rounded-t-lg">
        <a :href="repo.repo_url" class="max-w-md flex justify-between">
          <FontAwesomeIcon :icon="['fab', 'github']" class="my-auto" />
          <h5>{{ repo.name }}</h5>
          <FontAwesomeIcon
            :icon="['fas', 'external-link-alt']"
            class="my-auto"
          />
        </a>
      </div>
      <img class="border p-1" :src="repo.preview" />
      <div class="p-5 border flex justify-between">
        <div class="">
          <h6>Uptime</h6>
          <h6>Total: {{ ((new Date() - new Date(repo.uptime.created * 1000)) / 3.6e6).toFixed(2) }} hours </h6>
          <h6>Ratio: {{ repo.uptime.ratio }}%</h6>
          <span>(Data generated: {{ new Date().toGMTString() }} )</span>
        </div>
        <div class=""></div>
      </div>
      <div class="p-5 border rounded-b-lg">
        <a
          :href="repo.home_url"
          target="_blank"
          class="max-w-md flex justify-between"
        >
          <FontAwesomeIcon icon="link" class="my-auto" />
          <h5>{{ repo.home_url }}</h5>
          <FontAwesomeIcon icon="external-link-alt" class="my-auto" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import { get } from "axios";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// const repos = ["pmplusbud"];

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      repos: [
        {
          name: "pmpludbud",
          repo_url: "https://github.com/krystian-mw/pmplusbud",
          home_url: "https://pmplusbud.pl",
          uptime: {
            created: 1598274918,
            ratio: 100,
          },
          preview:
            "https://res.cloudinary.com/next-pmplusbud/image/upload/q_100/v1599830364/misc/PM%2BBUD-Snapshot.png",
        },
        {
          name: "pmpludbud",
          repo_url: "https://github.com/krystian-mw/pmplusbud",
          home_url: "https://pmplusbud.pl",
          uptime: {
            created: 1598274918,
            ratio: 100,
          },
          preview:
            "https://res.cloudinary.com/next-pmplusbud/image/upload/q_100/v1599830364/misc/PM%2BBUD-Snapshot.png",
        },
        {
          name: "pmpludbud",
          repo_url: "https://github.com/krystian-mw/pmplusbud",
          home_url: "https://pmplusbud.pl",
          uptime: {
            created: 1598274918,
            ratio: 100,
          },
          preview:
            "https://res.cloudinary.com/next-pmplusbud/image/upload/q_100/v1599830364/misc/PM%2BBUD-Snapshot.png",
        },
        {
          name: "pmpludbud",
          repo_url: "https://github.com/krystian-mw/pmplusbud",
          home_url: "https://pmplusbud.pl",
          uptime: {
            created: 1598274918,
            ratio: 100,
          },
          preview:
            "https://res.cloudinary.com/next-pmplusbud/image/upload/q_100/v1599830364/misc/PM%2BBUD-Snapshot.png",
        },
        {
          name: "pmpludbud",
          repo_url: "https://github.com/krystian-mw/pmplusbud",
          home_url: "https://pmplusbud.pl",
          uptime: {
            created: 1598274918,
            ratio: 100,
          },
          preview:
            "https://res.cloudinary.com/next-pmplusbud/image/upload/q_100/v1599830364/misc/PM%2BBUD-Snapshot.png",
        },
        {
          name: "pmpludbud",
          repo_url: "https://github.com/krystian-mw/pmplusbud",
          home_url: "https://pmplusbud.pl",
          uptime: {
            created: 1598274918,
            ratio: 100,
          },
          preview:
            "https://res.cloudinary.com/next-pmplusbud/image/upload/q_100/v1599830364/misc/PM%2BBUD-Snapshot.png",
        },
        {
          name: "pmpludbud",
          repo_url: "https://github.com/krystian-mw/pmplusbud",
          home_url: "https://pmplusbud.pl",
          uptime: {
            created: 1598274918,
            ratio: 100,
          },
          preview:
            "https://res.cloudinary.com/next-pmplusbud/image/upload/q_100/v1599830364/misc/PM%2BBUD-Snapshot.png",
        },
      ],
    };
  },
};
//   mounted() {
//     get(
//       // Cache repos during env to stop going over
//       // Github API's frame limit
//       process.env.NODE_ENV === "development"
//         ? "/repos.json"
//         : `https://api.github.com/users/krystian-mw/repos`
//     ).then((res) => {
//       res.data.forEach((fetchedRepo) => {
//         repos.forEach((repo) => {
//           if (repo === fetchedRepo.name) {
//             this.$store.commit("addRepo", fetchedRepo);
//           }
//         });
//       });
//     });
//   },
//   computed: {
//     repos() {
//       return this.$store.getters.repos;
//     },
//   },
//   components: {
//     FontAwesomeIcon,
//   },
// };
</script>
