<template>
  <div class="login-page">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <h3 class="text-h4 font-weight-bold mb-3 text-center">로그인</h3>
        <div class="d-flex flex-column">
          <v-text-field
            label="아이디"
            v-model="id"
            :rules="idRules"
            :counter="12"
            required
          ></v-text-field>
          <v-text-field
            label="비밀번호"
            type="password"
            v-model="password"
            :rules="passwordRules"
            required
          ></v-text-field>
          <v-checkbox label="아이디 저장" v-model="isSave"></v-checkbox>
          <v-btn block color="accent" @click="validate">로그인</v-btn>
          <div class="d-flex justify-space-between mt-3">
            <router-link
              v-for="(item, i) in linkItems"
              :key="i"
              :to="item.to"
              >{{ item.text }}</router-link
            >
          </div>
        </div>
      </v-container>
    </v-form>
  </div>
</template>
<script>
import { getCookieId, delCookieId, saveCookieId } from "@/utils/cookie";
import { mapActions } from "vuex";

export default {
  data: () => ({
    valid: true,
    id: "",
    idRules: [
      v => !!v || "아이디를 입력해주세요.",
      v => v.length <= 12 || "아이디를 12글자 이하로 입력해주세요.",
    ],
    password: "",
    passwordRules: [v => !!v || "비밀번호를 입력해주세요."],
    isSave: false,
    linkItems: [
      {
        text: "아이디 찾기",
        to: "/findid",
      },
      {
        text: "비밀번호 찾기",
        to: "/findpassword",
      },
    ],
  }),
  methods: {
    ...mapActions(["login"]),
    validate() {
      const isPass = this.$refs.form.validate();
      if (!isPass) return;

      const { id, password, isSave } = this;
      console.log("id :", id, " password :", password, " isSave :", isSave);
      this.onSaveCookieId();
      this.login({ id, password });
    },
    onGetCookieId() {
      const cookieId = getCookieId();
      if (!cookieId) return;

      this.id = cookieId;
      this.isSave = true;
    },
    onSaveCookieId() {
      const { id, isSave } = this;
      if (isSave) {
        saveCookieId(id);
      } else {
        delCookieId();
      }
    },
    init() {
      this.onGetCookieId();
    },
  },
  created() {
    this.init();
  },
};
</script>
