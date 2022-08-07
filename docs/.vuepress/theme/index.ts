import type { Theme } from '@vuepress/core'
import { defaultTheme } from '@vuepress/theme-default'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'

export const localTheme = (): Theme => {
    const options: DefaultThemeOptions = {
        navbar: false,
        sidebar: false,
    };

    return {
        name: 'vuepress-theme-local',
        extends: defaultTheme(options),
        layouts: {
            Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
        },
        alias: {
            '@theme/Header.vue': path.resolve(__dirname, 'components/Header.vue')
        }
    }
}