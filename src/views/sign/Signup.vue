<template>
  <div class="signup-page">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <h3 class="text-h4 font-weight-bold mb-3 text-center">회원가입</h3>
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
          <v-text-field
            label="비밀번호 재입력"
            type="password"
            v-model="rePassword"
            :error-messages="rePasswordErrors"
            required
          ></v-text-field>
          <v-text-field
            label="닉네임"
            v-model="nickname"
            :rules="nicknameRules"
            :counter="10"
            required
          ></v-text-field>
          <v-file-input
            :rules="avatarRules"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="프로필 이미지"
            prepend-icon="mdi-camera"
            @change="onChangeAvatar"
          ></v-file-input>
          <div v-if="profileSrc" class="mx-auto">
            <v-avatar size="164">
              <v-img :src="profileSrc" />
            </v-avatar>
          </div>
          <v-btn class="mt-3" block color="accent" @click="validate"
            >회원가입</v-btn
          >
        </div>
      </v-container>
    </v-form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { PROFILE_SIZE, MB_TO_BYTE } from "@/utils/constants";

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
    rePassword: "",
    nickname: "",
    nicknameRules: [
      v => !!v || "닉네임을 입력해주세요.",
      v => v.length >= 3 || "닉네임을 3글자 이상 입력해주세요.",
      v => v.length <= 10 || "닉네임을 10글자 이하로 입력해주세요,",
    ],
    avatarRules: [
      v =>
        !v ||
        v.size < PROFILE_SIZE ||
        `프로필 사진의 크기는 ${
          PROFILE_SIZE / MB_TO_BYTE
        }MB 미만으로 선택해주세요.`,
    ],
    profileObj: null,
    profileSrc: null,
  }),
  computed: {
    // vuetify rules에서 component data를 어떻게 꺼내는지 모르겟음...
    rePasswordErrors() {
      const { password, rePassword } = this;
      if (password !== rePassword) return "비밀번호가 일치하지않습니다.";
      return "";
    },
  },
  methods: {
    ...mapActions(["showAlert"]),
    validate() {
      const isPass = this.$refs.form.validate();
      if (!isPass) return;
      if (this.rePasswordErrors) return;

      const { id, password, rePassword, nickname } = this;
      console.log(
        "id :",
        id,
        " password :",
        password,
        " rePassword :",
        rePassword,
        " nickname :",
        nickname,
      );

      this.showAlert(["회원가입 되었습니다."]);
    },
    onChangeAvatar(e) {
      const vm = this;
      console.log(e);
      if (!e) {
        vm.profileObj = null;
        vm.profileSrc = null;
        return;
      }
      const fileReader = new FileReader();
      fileReader.onload = () => {
        vm.profileObj = e;
        vm.profileSrc = fileReader.result;
      };
      fileReader.readAsDataURL(e);
    },
  },
};
</script>
