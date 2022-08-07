<script>
export default {
  data() {
    return {
      header: "Walter's blog",
      description: "折腾日志",
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
    <div class="links">
      <v-for class="link">
        
      </v-for>
    </div>
  </div>
</template>

<style lang="scss">
.blog_header_container {
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .name_container {
    margin: 10px;
    font-size: 48px;
    font-weight: bold;
  }

  .description {
    font-size: 16px;
  }
}
</style>