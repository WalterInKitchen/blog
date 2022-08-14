<script>
import HeaderPc from "./HeaderPc.vue";
import HeaderMobile from "./HeaderMobile.vue";
import {text} from '../assets/i18n/text_def';

const SMALL_SCREEN_SIZE = 1000;
const SMALL_SCREEN = 'small';
const STANDARD_SCREEN = 'standard';

export default {
  components: {HeaderPc, HeaderMobile},
  data() {
    return {
      initialized: false,
      screenSize: STANDARD_SCREEN
    };
  },
  methods: {
    updateScreenSize() {
      if (window.innerWidth < SMALL_SCREEN_SIZE) {
        this.screenSize = SMALL_SCREEN;
        return;
      }
      this.screenSize = STANDARD_SCREEN;
    },
    handleResizeWindow() {
      this.updateScreenSize();
    }
  },
  computed: {},
  mounted() {
    this.initialized = true;
    this.updateScreenSize();
    window.addEventListener("resize", this.handleResizeWindow)
  }
};
</script>

<template>
  <div class="header_container">
    <HeaderMobile v-if="screenSize === 'small'"></HeaderMobile>
    <HeaderPc v-else></HeaderPc>
  </div>
</template>

<style scoped lang="scss">
.header_container {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>