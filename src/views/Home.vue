<template>
  <div class="home-page">
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div class="pt-6">
            <h2 class="text-h4 font-weight-bold pb-4">인기 게시물</h2>
            <v-row>
              <v-col cols="12" v-for="(blog, i) in popularBlogs" :key="i">
                <BlogCardMedium v-bind="blog" />
              </v-col>
            </v-row>
          </div>
          <div class="pt-16">
            <h2 class="text-h4 font-weight-bold pb-4">최근 게시물</h2>
            <div>
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  lg="4"
                  v-for="(blog, i) in recentBlogs"
                  :key="i"
                >
                  <BlogCardSmall v-bind="blog" />
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BlogCardSmall from "../components/blog/card/BlogCardSmall";
import BlogCardMedium from "../components/blog/card/BlogCardMedium";

export default {
  name: "Home",
  components: {
    BlogCardSmall,
    BlogCardMedium,
  },
  data: () => ({
    popularBlogs: [
      {
        thumbnailSrc:
          "https://cdn.pixabay.com/photo/2021/01/27/06/54/nova-scotia-duck-tolling-retriever-5953883_1280.jpg",
        title: "Ut enim blandit volutpat maecenas volutpat blandit",
        contents:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        // avatarSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        author: "Yan Lee",
        writeDate: new Date(),
        category: "summer",
      },
      {
        thumbnailSrc:
          "https://cdn.pixabay.com/photo/2021/01/27/06/54/nova-scotia-duck-tolling-retriever-5953883_1280.jpg",
        title: "Ut enim blandit volutpat maecenas volutpat blandit",
        contents:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        avatarSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        author: "Yan Lee",
        writeDate: new Date(),
        category: "spring",
      },
      {
        thumbnailSrc:
          "https://cdn.pixabay.com/photo/2021/01/27/06/54/nova-scotia-duck-tolling-retriever-5953883_1280.jpg",
        title: "Ut enim blandit volutpat maecenas volutpat blandit",
        contents:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        avatarSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        author: "Yan Lee",
        writeDate: new Date(),
        category: "winter",
      },
    ],
    recentBlogs: [
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
        category: "skill",
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
        category: "etc",
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
        category: "travel",
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
        category: "travel",
      },
    ],
  }),
};
</script>
