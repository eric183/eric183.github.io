/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {

    siteMetadata: {
        title: "你好",
        about: "A develop & A named artist",
        author: "EricKuang",
        // fontFamily: "'Spicy Rice', cursive",
        fontFamily: "'Pacifico', cursive",
        desc: "WAHT YOU WANT, WHAT YOU NEED"
    },
    plugins: [
        `gatsby-plugin-transition-link`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-emotion`,


        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `GatsbyJS`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#6b37bf`,
                theme_color: `#6b37bf`,

                display: `standalone`,
                icon: `${__dirname}/src/images/head.jpg`
            }
        }
    ],
}