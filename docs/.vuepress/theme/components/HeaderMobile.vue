<script>
import HeaderLinks from "./headerlinks/HeaderLinks.vue";

export default {
  components: { HeaderLinks },
  data() {
    return {
      header: "Walter's blog",
      description: "折腾日志-----M",
    };
  },
};
</script>

<template>
  <div class="blog_header_container">
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
.blog_header_container {
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;

  .name_container {
    font-size: 48px;
    font-weight: bold;
  }

  .description {
    font-size: 16px;
  }

  .links_container {
  }
}
</style>