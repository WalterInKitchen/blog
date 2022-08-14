<template>
  <ParentLayout class="content_container">
    <template #navbar>
      <Header></Header>
    </template>
    <template #page>
      <HomeContent></HomeContent>
    </template>
  </ParentLayout>
</template>

<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
import Header from "../components/Header.vue";
import HomeContent from "../components/HomeContent.vue";
</script>

<style lang="scss" scoped>
</style>