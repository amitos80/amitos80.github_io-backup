const path = require(`path`);
require(`dotenv`).config({ path: `.env` });

module.exports = {
  siteMetadata: {
    title: `Amit Friedberg - Freelance Web Developer`,
    description: `Freelancer Full Stack Web Developer skilled in JS, React, Vue, Styled Components, Nodejs, Webpack, mondoDb, Software Architecture, Atomic Design Methodology and more.`,
    author: `Amit Friedberg`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://amitos80.github.io`,
      },
    },
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Freelance Web Developer - Amit Freidberg`,
        short_name: `Freelance Web Developer`,
        start_url: '/',
        background_color: 'white',
        theme_color: 'purple',
        display: `minimal-ui`,
        icon: `static/icon.png`,
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: [`/home/`, `/projects/`, `/skills/`, `/experience/`, `/resume/`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Fira Sans:400,600`],
        display: `swap`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false
          }
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-dev`,
      options: {
        username: `amruthpillai`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: path.join(__dirname, `src`, `markdown`),
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`),
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
          useAutoGen: true
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/tailwind.css`],
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli'
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
          trackingId: `UA-55236659-4`,
          anonymize: true,
          alwaysSendReferrer: true,
          cookieExpires: 60 * 60 * 24 * 30,
          forceSSL: true,
          // Defines where to place the tracking script - `true` in the head and `false` in the body
          head: false,
          // Setting this parameter is optional
          //anonymize: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          //exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Delays sending pageview hits on route update (in milliseconds)
          pageTransitionDelay: 180,
          // Enables Google Optimize using your container Id
          //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
          // Enables Google Optimize Experiment ID
          // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
          // Set Variation ID. 0 for original 1,2,3....
          // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
          // Defers execution of google analytics script after page load
          defer: false,
          // Any additional optional fields
          sampleRate: 5,
          siteSpeedSampleRate: 10,
          cookieDomain: `amitos80.github.io`,
      },
    },
  ],
};
