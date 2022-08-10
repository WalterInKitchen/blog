import { path } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'
import { MyBlogTheme } from './theme'

export default defineUserConfig({
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
  ],
  title: "Walter's blog",
  theme: MyBlogTheme(),
  plugins: [
  ],
})