import {createPage} from '@vuepress/core'

export const defaultHomePage = (options) => {
    return (app) => {
        return {
            name: 'default-home-page',
            async onInitialized(app) {
                if (app.pages.every((page) => page.path !== '/')) {
                    const homepage = await createPage(app, {
                        path: '/',
                        frontmatter: {
                            layout: options.layout,
                        },
                    })
                    app.pages.push(homepage)
                }
            }
        }
    }
}
