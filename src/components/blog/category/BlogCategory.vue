<template>
  <div class="blog-category-wrap" :class="color">
    <span class="blog-category-content"><slot /></span>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "accent",
    },
  },
};
</script>
