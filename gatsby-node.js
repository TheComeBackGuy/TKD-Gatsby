exports.createPages = ({ actions: { createPage } }) => {
    const productions = require('./src/content/seasons.json')

    productions.forEach((season) => {
        createPage({
            path: `/production/${season.start}-${season.end}/`,
            component: require.resolve(`./src/templates/season.jsx`),
            context: {
                start: season.start,
                end: season.end,
                shows: season.shows,
            },
        })
    })

    productions.forEach((season) => {
        season.shows.forEach((show) => {
            const startYear = new Date(show.opens)
            createPage({
                path: `/production/${startYear.getFullYear()}/${show.slug}/`,
                component: require.resolve('./src/templates/production.jsx'),
                context: {
                    title: show.title,
                    author: show.author,
                    director: show.director,
                    opens: show.opens,
                    closes: show.closes,
                    description: show.description,
                    cast: show.cast,
                    ticketLink: show.ticketLink,
                    image: show.image,
                },
            })
        })
    })
}
