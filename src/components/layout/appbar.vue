<template>
  <div>
    <v-navigation-drawer
      v-if="!$vuetify.breakpoint.mdAndUp"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
    >
      <v-list nav color="primary">
        <v-list-item v-for="(item, i) in btnItems" :key="i" link :to="item.to">
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-for="(item, i) in barItems" :key="i" link :to="item.to">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      flat
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="white"
      elevate-on-scroll
    >
      <v-container :class="{ 'px-0': !$vuetify.breakpoint.mdAndUp }">
        <v-row
          align="center"
          justify="space-between"
          :no-gutters="!$vuetify.breakpoint.mdAndUp"
        >
          <v-col
            class="d-flex align-center"
            :cols="!$vuetify.breakpoint.mdAndUp ? 12 : 3"
          >
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
              v-if="!$vuetify.breakpoint.mdAndUp"
            />
            <v-toolbar-title
              style="cursor: pointer"
              class="font-weight-bold text-h5 primary--text"
              @click="$router.push('/')"
            >
              <AppLogo />
            </v-toolbar-title>
          </v-col>

          <v-col
            v-if="$vuetify.breakpoint.mdAndUp"
            cols="6"
            class="d-flex align-center justify-center"
          >
            <v-btn
              v-for="(item, i) in barItems"
              :key="i"
              text
              class="text-capitalize"
              :to="item.to"
              exact-active-class="accent--text"
              exact
              >{{ item.title }}</v-btn
            >
          </v-col>

          <v-col class="text-right" v-if="$vuetify.breakpoint.mdAndUp" cols="3">
            <v-btn
              v-for="(item, i) in btnItems"
              :key="i"
              :to="item.to"
              :color="item.color"
              class="ml-3 text-capitalize"
            >
              {{ item.text }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import AppLogo from "../common/AppLogo.vue";
export default {
  components: {
    AppLogo,
  },
  data: () => ({
    drawer: null,
    btnItems: [
      {
        text: "로그인",
        color: "primary",
        to: "/login",
      },
      {
        text: "회원가입",
        color: "secondary",
        to: "/signup",
      },
    ],
    barItems: [
      {
        title: "Home",
        to: "/",
      },
      {
        title: "Template",
        to: "/template",
      },
      {
        title: "Detail",
        to: "/detail",
      },
      {
        title: "Authors",
        to: "/authors",
      },
    ],
  }),
};
</script>
