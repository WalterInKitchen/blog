import { path } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'
import { localTheme } from './theme'

export default defineUserConfig({
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }]
  ],
  theme: localTheme(),
})