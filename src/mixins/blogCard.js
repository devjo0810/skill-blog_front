import BlogAvatar from "@/components/blog/avatar/BlogAvatar";
import BlogCategory from "@/components/blog/category/BlogCategory";

export default {
  components: {
    BlogAvatar,
    BlogCategory,
  },
  props: {
    thumbnailSrc: String,
    routeLink: String,
    title: String,
    contents: String,
    avatarSrc: String,
    author: String,
    writeDate: Date,
    category: String,
  },
};
