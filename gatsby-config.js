module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "theatre-knoxville",
  },
  plugins: [{
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `poppins\:200,200i,400,400i,600,600i`,
        // `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  },],
};
