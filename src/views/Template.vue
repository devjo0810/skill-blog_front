<template>
  <div class="template-page">
    <BlogCardLarge />
    <BlogCardMedium v-for="(data, i) in mediumDatas" :key="i" v-bind="data" />
    <v-row>
      <v-col cols="6" lg="4" v-for="(data, i) in longDatas" :key="i">
        <BlogCardLong v-bind="data" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="(data, i) in smallDatas" :key="i">
        <BlogCardSmall v-bind="data" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import BlogCardSmall from "@/components/blog/card/BlogCardSmall.vue";
import BlogCardMedium from "@/components/blog/card/BlogCardMedium.vue";
import BlogCardLong from "@/components/blog/card/BlogCardLong.vue";
import BlogCardLarge from "@/components/blog/card/BlogCardLarge.vue";
import { mapActions } from "vuex";

export default {
  components: {
    BlogCardSmall,
    BlogCardMedium,
    BlogCardLong,
    BlogCardLarge,
  },
  data: () => ({
    mediumDatas: [
      {
        thumbnailSrc:
          "https://cdn.pixabay.com/photo/2021/01/27/06/54/nova-scotia-duck-tolling-retriever-5953883_1280.jpg",
        title: "Ut enim blandit volutpat maecenas volutpat blandit",
        contents:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        avatarSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        author: "Yan Lee",
        writeDate: new Date(),
        category: "travel",
      },
    ],
    longDatas: [
      {
        thumbnailSrc:
          "https://cdn.pixabay.com/photo/2019/10/29/14/46/landscape-4587079_1280.jpg",
        title: "I wnat go home now",
        contents: "15 things I have always wondered about birds",
        avatarSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        author: "Yan Lee",
        writeDate: new Date(),
        category: "animals",
      },
      {
        thumbnailSrc:
          "https://cdn.pixabay.com/photo/2019/10/29/14/46/landscape-4587079_1280.jpg",
        title: "I wnat go home now",
        contents: "15 things I have always wondered about birds",
        avatarSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        author: "Yan Lee",
        writeDate: new Date(),
        category: "animals",
      },
      {
        thumbnailSrc:
          "https://cdn.pixabay.com/photo/2019/10/29/14/46/landscape-4587079_1280.jpg",
        title: "I wnat go home now",
        contents: "15 things I have always wondered about birds",
        // avatarSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        author: "Yan Lee",
        writeDate: new Date(),
        category: "animals",
      },
    ],
    smallDatas: [
      {
        thumbnailSrc:
          "https://cdn.pixabay.com/photo/2020/12/23/14/41/forest-5855196_1280.jpg",
        title: "How to write an awesome blog post in 5 steps",
        contents:
          "Ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis",
        avatarSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        author: "Yan Lee",
        writeDate: new Date(),
        category: "tips",
      },
      {
        thumbnailSrc:
          "https://cdn.pixabay.com/photo/2020/12/23/14/41/forest-5855196_1280.jpg",
        title: "How to write an awesome blog post in 5 steps",
        contents:
          "Ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis",
        // avatarSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        author: "Yan Lee",
        writeDate: new Date(),
        category: "tips",
      },
      {
        thumbnailSrc:
          "https://cdn.pixabay.com/photo/2020/12/23/14/41/forest-5855196_1280.jpg",
        title: "How to write an awesome blog post in 5 steps",
        contents:
          "Ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis",
        avatarSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        author: "Yan Lee",
        writeDate: new Date(),
        category: "tips",
      },
    ],
  }),
  methods: {
    ...mapActions(["showProgress", "hideProgress"]),
  },
  created() {
    this.showProgress();
    setTimeout(() => {
      this.hideProgress();
    }, 5000);
  },
};
</script>
