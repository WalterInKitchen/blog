<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
import Header from "../components/Header.vue";
</script>

<template>
  <ParentLayout class="content_container">
    <template #navbar>
      <Header></Header>
    </template>
  </ParentLayout>
</template>

<style lang="scss" scoped>
</style>