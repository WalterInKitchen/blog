<script>
import HeaderPc from "./HeaderPc.vue";
import HeaderMobile from "./HeaderMobile.vue";

export default {
  components: {HeaderPc, HeaderMobile},
  data() {
    return {
      header: "Walter's blog",
      description: "折腾日志",
      mobileDevice: false,
    };
  },
  methods: {
    isMobile() {
      return (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i));
    },
  },
  mounted() {
    this.mobileDevice = this.isMobile();
  }
};
</script>

<template>
  <div class="header_container">
    <HeaderPc v-if="!mobileDevice"></HeaderPc>
    <HeaderMobile v-if="mobileDevice"></HeaderMobile>
  </div>
</template>

<style scoped lang="scss">
.header_container {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>