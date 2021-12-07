exports.createPages = ({ actions: { createPage } }) => {
    const productions = require('./src/content/seasons.json')

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

// exports.createPages = ({ actions: { createPage } }) => {
//     const productions = require('./src/content/seasonsTest.json')

//     productions.forEach((show) => {
//         console.log(show.director)
//         const startYear = new Date(show.opens)
//         createPage({
//             path: `/production/${startYear.getFullYear()}/${show.slug}/`,
//             component: require.resolve('./src/templates/production.jsx'),
//             context: {
//                 title: show.title,
//                 author: show.author,
//                 director: show.director,
//                 opens: show.opens,
//                 closes: show.closes,
//                 description: show.description,
//                 cast: show.cast,
//                 ticketLink: show.ticketLink,
//                 image: show.image,
//             },
//         })
//     })
// }
