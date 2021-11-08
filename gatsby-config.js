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
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data/`,
                ignore: [`**/\.*`], // ignore files starting with a dot
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
            resolve: `gatsby-plugin-sharp`,
            options: {
                // Defaults used for gatsbyImageData and StaticImage
                defaults: {},
                // Set to false to allow builds to continue on image errors
                failOnError: true,
                // deprecated options and their defaults:
                base64Width: 20,
                forceBase64Format: ``, // valid formats: png,jpg,webp
                useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
                stripMetadata: true,
                defaultQuality: 50,
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
