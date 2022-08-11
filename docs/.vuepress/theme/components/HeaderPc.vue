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
    <div class="header_top">
      <div class="header_top_left_container">
        <div class="header_top_left">
          <div class="name_container">
            <span>{{ header }}</span>
          </div>
          <div class="description">
            <span>{{ description }}</span>
          </div>
        </div>
      </div>
      <div class="header_top_right_container">
        <div class="header_top_right">
          <div class="links_container">
          </div>
        </div>
      </div>
    </div>
    <div class="header_bottom">
      <div class="header_bt_left_container">
        <div class="header_bt_left">
          <HeaderMenu></HeaderMenu>
        </div>
      </div>

      <div class="header_bt_right_container">
        <div class="header_bt_right">
          <header-links></header-links>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blog_header_container {
  width: 100%;
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;

  .header_top {
    width: 80%;
    display: flex;
    flex-direction: row;
    column-gap: 200px;

    .header_top_left_container {
      flex: 1;
      display: flex;
      flex-direction: row-reverse;

      .header_top_left {
        display: flex;
        flex-direction: column;

        .name_container {
          font-size: 48px;
          font-weight: bold;
        }

        .description {
          font-size: 16px;
        }
      }
    }

    .header_top_right_container {
      flex: 1;
      display: flex;
      flex-direction: row;
      margin-right: 100px;

      .header_top_right {
        display: flex;
        flex-direction: column-reverse;
      }
    }
  }

  .header_bottom {
    width: 80%;
    display: flex;
    flex-direction: row;
    column-gap: 200px;

    .header_bt_left_container {
      flex: 1;
      display: flex;
      //flex-direction: row-reverse;

      .header_bt_left {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
      }
    }

    .header_bt_right_container {
      flex: 1;
      display: flex;
      flex-direction: row;
    }
  }
}
</style>