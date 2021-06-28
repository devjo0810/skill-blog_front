<template>
  <v-overlay :value="show">
    <v-row justify="center" class="global-dialog">
      <v-card min-width="290" light>
        <v-card-title class="text-h5">
          {{ title }}
        </v-card-title>
        <v-card-text>{{ message }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-if="type === 'confirm'"
            color="primary"
            text
            @click="onCancel"
          >
            취소
          </v-btn>
          <v-btn color="accent" text @click="onConfirm"> 확인 </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-overlay>
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: {
    show: Boolean,
    title: String,
    message: String,
    type: String,
    callback: Function,
  },
  methods: {
    ...mapActions(["hideModal"]),
    onCancel() {
      if (this.callback) this.callback(false);
      this.hideModal();
    },
    onConfirm() {
      if (this.callback) this.callback(true);
      this.hideModal();
    },
  },
};
</script>
