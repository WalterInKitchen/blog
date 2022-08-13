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
    <div class="blog_header_top_container">
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
    <div class="blog_header_bottom_container">
      <HeaderMenu></HeaderMenu>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blog_header_container {
  margin-top: 2rem;
  width: 50rem;
  display: flex;
  flex-direction: column;

  .blog_header_top_container {
    width: 100%;
    margin: 0.5rem 0;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .header_left_container {
      flex: 1;
      display: flex;

      .header_left {
        .name_container {
          font-size: 2rem;
          font-weight: bold;
        }

        .description {
          font-size: 1.1rem;
        }
      }
    }

    .header_right_container {
      flex: 1;
      display: flex;
      flex-direction: row-reverse;
      align-items: flex-end;

      .header_right {
      }
    }
  }

  .blog_header_bottom_container {
    margin: 0.5rem 0;
  }
}
</style>