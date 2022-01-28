module.exports = {
    siteMetadata: {
        title: `RouteSonar`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `@popperjs/core`,
        `bootstrap`,
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
              fonts: [
                'material icons'
              ],
            },
        },
    ]
}