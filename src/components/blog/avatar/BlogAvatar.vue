<template>
  <div class="d-flex align-center">
    <v-avatar color="accent" size="36">
      <img v-if="avatarSrc" :src="avatarSrc" alt="Avatar" />
      <v-icon v-else dark>mdi-account-circle</v-icon>
    </v-avatar>

    <div class="pl-2">{{ author }} · {{ writeDate | fullDate }}</div>
  </div>
</template>
<script>
// Yan Lee
// 03 Jan 2019
export default {
  props: {
    avatarSrc: String,
    author: String,
    writeDate: Date,
  },
};
</script>
