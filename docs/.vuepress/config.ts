import { path } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'
import { localTheme } from './theme'

export default defineUserConfig({
  theme: localTheme(),
})