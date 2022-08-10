import type { Theme } from '@vuepress/core'
import { defaultTheme } from '@vuepress/theme-default'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { blogPlugin } from "vuepress-plugin-blog2";

export const CleanBlogTheme = (options: DefaultThemeOptions): Theme => ({
    name: 'clean-blog-theme',
    extends: defaultTheme(options),
    layouts: {
        Layout: path.resolve(__dirname, './layouts/Layout.vue'),
        Timeline: path.resolve(__dirname, './layouts/Timeline.vue'),
    },
    alias: {
        '@theme/Header.vue': path.resolve(__dirname, 'components/Header.vue')
    },
    plugins: [
        blogPlugin({
            // only files under posts are articles
            filter: ({ filePathRelative }) => {
                if (!filePathRelative) return false;
                return filePathRelative.startsWith("posts/");
            },
            // getting article info
            getInfo: ({ frontmatter, title }) => ({
                title,
                author: frontmatter.author || "",
                date: frontmatter.date || null,
                category: frontmatter.category || [],
                tag: frontmatter.tag || [],
            }),
            category: [
            ],
            type: [
                {
                    key: "timeline",
                    // only article with date should be added to timeline
                    filter: (page) => page.frontmatter.date,
                    // sort pages with time
                    sorter: (pageA, pageB) =>
                        new Date(pageB.frontmatter.date).getTime() -
                        new Date(pageA.frontmatter.date).getTime(),
                    path: "/timeline/",
                    layout: "Timeline",
                    frontmatter: () => ({ title: "Timeline", sidebar: false }),
                },
            ],
            hotReload: true,
        }),
    ],
})