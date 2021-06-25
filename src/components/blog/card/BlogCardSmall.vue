<template>
  <v-hover v-slot:default="{ hover }" open-delay="50" close-delay="50">
    <div>
      <v-card
        flat
        :color="hover ? 'white' : 'transparent'"
        :elevation="hover ? 12 : 0"
        hover
        :to="routeLink"
      >
        <v-img
          :src="thumbnailSrc"
          :aspect-ratio="16 / 9"
          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
          height="200px"
          class="elevation-2"
          style="border-radius: 16px"
        >
          <v-card-text>
            <BlogCategory>{{ category }}</BlogCategory>
          </v-card-text>
        </v-img>

        <v-card-text>
          <div class="text-h5 font-weight-bold primary--text">
            {{ title }}
          </div>

          <div class="text-body-1 py-4">
            {{ contents }}
          </div>

          <BlogAvatar
            :avatar-src="avatarSrc"
            :author="author"
            :write-date="writeDate"
          />
        </v-card-text>
      </v-card>
    </div>
  </v-hover>
</template>
<script>
import blogCardMixin from "@/mixins/blogCard";

export default {
  mixins: [blogCardMixin],
};
</script>
