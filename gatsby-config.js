require(`dotenv`).config();

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;
const googleAnalyticsTrackingId = process.env.GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    // Used for the title template on pages other than the index site
    siteTitle: `FasterGames`,
    // Default title of the page
    siteTitleAlt: `FasterGames - Creating tools that streamline game development for indies`,
    // Can be used for e.g. JSONLD
    siteHeadline: `FasterGames - Creating tools that streamline game development for indies`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://faster-games.com`,
    // Used for SEO
    siteDescription: `Creating tools that streamline game development for indies`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Description again
    description: `Creating tools that streamline game development for indies`,
    // Twitter Handle
    author: `@getfastergames`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    googleAnalyticsTrackingId && {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FasterGames`,
        short_name: `FasterGames`,
        description: `Creating tools that streamline game development for indies`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
