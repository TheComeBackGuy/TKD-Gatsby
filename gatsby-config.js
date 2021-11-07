module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'theatre-knoxville',
        description: 'Theatre Knoxville Downtown: Knoxville Community Theatre',
        image: 'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `poppins\:200,200i,400,400i,600,600i`,
                    // `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
                ],
                display: 'swap',
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /src/, // See below to configure properly
                },
            },
        },
    ],
}
