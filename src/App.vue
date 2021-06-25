<template>
  <perfect-scrollbar>
    <v-app>
      <AppBar v-if="headerShow" />

      <v-main>
        <v-container>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </perfect-scrollbar>
</template>

<script>
import AppBar from "./components/layout/appbar.vue";

export default {
  name: "App",
  components: {
    AppBar,
  },
  computed: {
    headerShow() {
      return this.$route.meta.header ? this.$route.meta.header : false;
    },
  },
};
</script>
