<script>
import HeaderLinks from "./headerlinks/HeaderLinks.vue";
import {text} from '../assets/i18n/text_def';

export default {
  components: {HeaderLinks},
  data() {
    return {
      header: text.blogHeader,
      description: text.blogDesc
    };
  },
};
</script>

<template>
  <div class="blog_header_top_container">
    <div class="name_container">
      <span>{{ header }}</span>
    </div>
    <div class="description">
      <span>{{ description }}</span>
    </div>
    <div class="links_container">
      <header-links></header-links>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blog_header_top_container {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;

  .name_container {
    font-size: 2rem;
    font-weight: bold;
  }

  .description {
    font-size: 1.1rem;
  }

  .links_container {
  }
}
</style>