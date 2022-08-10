import { path } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'
import { CleanBlogTheme } from './theme'

export default defineUserConfig({
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
  ],
  title: "Walter's blog",
  theme: CleanBlogTheme({
    colorMode: 'light',
    colorModeSwitch: false,
    navbar: false,
    sidebar: false,
  }),
  plugins: [
  ],
})