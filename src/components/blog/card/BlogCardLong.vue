<template>
  <v-hover v-slot:default="{ hover }" open-delay="50" close-delay="50">
    <v-card
      flat
      dark
      :color="hover ? 'white' : 'transparent'"
      :elevation="hover ? 12 : 0"
      hover
    >
      <v-img
        :src="thumbnailSrc"
        :aspect-ratio="16 / 9"
        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
        height="600px"
        class="elevation-2 fill-height"
      >
        <div class="d-flex flex-column justify-space-between fill-height">
          <v-card-text>
            <BlogCategory>{{ category }}</BlogCategory>
          </v-card-text>

          <v-card-text>
            <div class="text-h4 font-weight-bold">
              {{ title }}
            </div>

            <div class="text-h5 py-3 font-weight-bold" style="line-height: 1.2">
              {{ contents }}
            </div>

            <BlogAvatar
              :avatar-src="avatarSrc"
              :author="author"
              :write-date="writeDate"
            />
          </v-card-text>
        </div>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
import blogCardMixin from "@/mixins/blogCard";

export default {
  mixins: [blogCardMixin],
};
</script>
