<template>
  <v-overlay :value="show">
    <v-row justify="center" class="global-progress">
      <v-progress-circular
        :size="70"
        :width="7"
        color="green"
        indeterminate
      ></v-progress-circular>
    </v-row>
  </v-overlay>
</template>
<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>
