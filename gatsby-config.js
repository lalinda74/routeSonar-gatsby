module.exports = {
    siteMetadata: {
        title: `RouteSonar`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
              fonts: [
                'material icons',
                'material icons outlined'
              ],
            },
        },
    ]
}