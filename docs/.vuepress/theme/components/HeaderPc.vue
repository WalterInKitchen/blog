<script>
import HeaderLinks from "./headerlinks/HeaderLinks.vue";
import HeaderMenu from "./HeaderMenu.vue";

export default {
  components: {HeaderLinks, HeaderMenu},
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
    <div class="header_left_container">
      <div class="header_left">
        <div class="name_container">
          <span>{{ header }}</span>
        </div>
        <div class="description">
          <span>{{ description }}</span>
        </div>
      </div>
    </div>

    <div class="header_right_container">
      <div class="header_right">
        <HeaderLinks></HeaderLinks>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blog_header_container {
  width: 50%;
  margin: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .header_left_container {
    flex: 1;
    display: flex;

    .header_left {
      .name_container {
        font-size: 48px;
        font-weight: bold;
      }

      .description {
        font-size: 16px;
      }
    }
  }

  .header_right_container {
    flex: 1;
    display: flex;


    .header_right {

    }
  }
}
</style>