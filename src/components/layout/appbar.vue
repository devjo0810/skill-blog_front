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
        <v-list-item
          v-for="(item, i) in btnItems"
          :key="'navi_drawer_btnItems' + i"
          link
          :to="item.to"
          @click="clickHandler(item.handlerName)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in barItems"
          :key="'navi_drawer_barItems' + i"
          link
          :to="item.to"
        >
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
              :key="'app_bar_barItems' + i"
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
              :key="'app_bar_btnItems' + i"
              :to="item.to"
              :color="item.color"
              class="ml-3 text-capitalize"
              @click="clickHandler(item.handlerName)"
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
import { mapGetters, mapActions } from "vuex";

const loginBeforeBtnItmes = [
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
];

const loginAfterBtnItmes = [
  {
    text: "마이페이지",
    color: "primary",
    to: "/mypage",
  },
  {
    text: "로그아웃",
    color: "secondary",
    handlerName: "logout",
  },
];

export default {
  components: {
    AppLogo,
  },
  data: () => ({
    drawer: null,
    btnItems: loginBeforeBtnItmes,
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
  computed: {
    ...mapGetters(["getIsLogin"]),
  },
  watch: {
    getIsLogin: "btnItemsUpdate",
  },
  methods: {
    ...mapActions(["logout", "showConfirm"]),
    clickHandler(handlerName) {
      switch (handlerName) {
        case "logout":
          this.onLogout();
          break;
        default:
          console.log("not defined click handler :", handlerName);
      }
    },
    onLogout() {
      this.showConfirm([
        "로그아웃 하시겠습니까?",
        "로그아웃 안내",
        this.onLogoutHandler,
      ]);
    },
    onLogoutHandler(flag) {
      if (flag) this.logout();
    },
    btnItemsUpdate(v) {
      if (v) this.btnItems = loginAfterBtnItmes;
      else this.btnItems = loginBeforeBtnItmes;
    },
  },
  created() {
    this.btnItemsUpdate(this.getIsLogin);
  },
};
</script>
