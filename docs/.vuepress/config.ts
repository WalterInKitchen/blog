import { path } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'
import { localTheme } from './theme'
import { blogPlugin } from "vuepress-plugin-blog2";

export default defineUserConfig({
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
  ],
  title: "Walter's blog",
  theme: localTheme(),
  plugins: [
    blogPlugin({
    }),
  ],
})