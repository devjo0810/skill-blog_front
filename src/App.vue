<template>
  <perfect-scrollbar>
    <v-app>
      <AppBar v-if="headerShow" />
      <v-main>
        <v-container class="router-container">
          <router-view />
        </v-container>
      </v-main>
      <GlobalDialog v-bind="getModal" />
      <GlobalProgress :show="getProgressStatus" />
    </v-app>
  </perfect-scrollbar>
</template>

<script>
import AppBar from "./components/layout/appbar.vue";
import GlobalDialog from "./components/global/GlobalDialog.vue";
import GlobalProgress from "./components/global/GlobalProgress.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    AppBar,
    GlobalDialog,
    GlobalProgress,
  },
  computed: {
    ...mapGetters(["getModal", "getProgressStatus"]),
    headerShow() {
      return this.$route.meta.header ? this.$route.meta.header : false;
    },
  },
  methods: {
    ...mapActions(["getUserInfo", "showProgress", "hideProgress"]),
    init() {
      this.getUserInfo();
    },
  },
  created() {
    this.init();
  },
};
</script>
