import { defineUserConfig } from '@vuepress/cli';
import { cleanBlogTheme } from './theme';

export default defineUserConfig({
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
  ],
  title: "Walter's blog",
  theme: cleanBlogTheme({
    colorMode: 'light',
    colorModeSwitch: false,
    navbar: false,
    sidebar: false,
  }),
  plugins: [
  ],
})