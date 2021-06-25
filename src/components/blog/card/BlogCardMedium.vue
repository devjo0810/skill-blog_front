<template>
  <v-hover v-slot:default="{ hover }" open-delay="50" close-delay="50">
    <v-card
      flat
      light
      :color="hover ? 'white' : 'transparent'"
      :elevation="hover ? 12 : 0"
      hover
    >
      <v-row class="px-3">
        <v-col cols="12" md="4">
          <v-card flat height="100%">
            <v-img
              :src="thumbnailSrc"
              :aspect-ratio="16 / 9"
              height="100%"
            ></v-img>
          </v-card>
        </v-col>

        <v-col>
          <div>
            <BlogCategory>{{ category }}</BlogCategory>

            <h3 class="text-h4 font-weight-bold pt-3">
              {{ title }}
            </h3>

            <p class="text-h6 font-weight-regular pt-3 text--secondary">
              {{ contents }}
            </p>

            <BlogAvatar
              :avatar-src="avatarSrc"
              :author="author"
              :write-date="writeDate"
            />
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-hover>
</template>
<script>
import blogCardMixin from "@/mixins/blogCard";

export default {
  mixins: [blogCardMixin],
};
</script>
