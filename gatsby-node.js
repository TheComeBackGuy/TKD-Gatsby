exports.createPages = ({ actions: { createPage } }) => {
    const productions = require('./src/content/seasonsTest.json')
    productions.forEach((show) => {
        createPage({
            path: `/production/${show.title}/`,
            component: require.resolve('./src/templates/production.jsx'),
            context: {
                title: show.title,
            },
        })
    })
}
