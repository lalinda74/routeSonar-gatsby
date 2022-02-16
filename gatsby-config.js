import "@fontsource/inter";
import "@fontsource/noto-serif";

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
        `gatsby-plugin-react-helmet`
    ]
}