<template>
  <div class="content_container">
    <ArticleList :items="timelines.items"></ArticleList>
  </div>
</template>

<script>
import {useBlogType} from "vuepress-plugin-blog2/lib/client";
import ArticleList from './ArticleList.vue';

export default ({
  components: {ArticleList},
  data() {
    return {
      timelines: useBlogType("timeline")
    }
  }
})

</script>

<style scoped lang="scss">

</style>