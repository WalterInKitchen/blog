module.exports = {
    title: "Walter's blog",
    description: 'walter\'s blog',
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }]
    ],
    plugins: {
        '@vuepress/active-header-links':{
        },
        '@vuepress/medium-zoom':{
        },
        '@vuepress/register-components':{
        },
        '@vuepress/search':{
            searchMaxSuggestions: 10
        }
    }
}