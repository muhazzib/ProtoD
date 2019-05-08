//env var
require('dotenv').config()
let contentfulConfig

const languages = require('./src/data/languages')

//rich text
const { BLOCKS, MARKS, INLINES } = require('@contentful/rich-text-types')
try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken:
    process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

module.exports = {
  pathPrefix: '/gatsby-contentful-starter',
  siteMetadata: {
    title: 'Gatsby + WordPress Starter',
    languages,
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    `gatsby-plugin-playground`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
      locale: 'en-CA',
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false,
      },
    },
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
        name: `natlResStats`,
        path: `${__dirname}/src/data/natl_en/NRS`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `vanIsland`,
        path: `${__dirname}/src/data/natl_en/Van Island`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `victoria`,
        path: `${__dirname}/src/data/natl_en/Victoria`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `GVC`,
        path: `${__dirname}/src/data/natl_en/Greater Vancouver`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fraserValley`,
        path: `${__dirname}/src/data/natl_en/Fraser Valley`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `okanganValley`,
        path: `${__dirname}/src/data/natl_en/Okanagan Valley`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `calgary`,
        path: `${__dirname}/src/data/natl_en/Calgary`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `edmonton`,
        path: `${__dirname}/src/data/natl_en/Edmonton`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `regina`,
        path: `${__dirname}/src/data/natl_en/Regina`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sask`,
        path: `${__dirname}/src/data/natl_en/Saskatoon`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `guelph`,
        path: `${__dirname}/src/data/natl_en/Guelph`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hamiltonB`,
        path: `${__dirname}/src/data/natl_en/Hamilton-Burlington`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `oakvilleM`,
        path: `${__dirname}/src/data/natl_en/Oakville-Milton`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `barrie`,
        path: `${__dirname}/src/data/natl_en/Barrie`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `GTA`,
        path: `${__dirname}/src/data/natl_en/Greater Toronto`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `niagara`,
        path: `${__dirname}/src/data/natl_en/Niagara Region`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ottawa`,
        path: `${__dirname}/src/data/natl_en/Ottawa`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `montreal`,
        path: `${__dirname}/src/data/natl_en/Greater Montreal`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `moncton`,
        path: `${__dirname}/src/data/natl_en/Greater Moncton`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`, // CSV Folder
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `charts`,
        path: `${__dirname}/src/data/`, // CSV Folder
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/charts/`, // charts Folder
    //     ignore: [`**/\.*`], // ignore files starting with a dot
    //   },
    // },
    {
      resolve: `gatsby-transformer-csv`,
    },

    {
      resolve: '@contentful/gatsby-transformer-contentful-richtext',
      options: {
        renderOptions: {
          /*
           * Defines custom html string for each node type like heading, embedded entries etc..
           */
          renderNode: {
            // Example

            [INLINES.EMBEDDED_ENTRY]: node => {
              return `<div class='custom-entry' />${
                node.data.target.fields.file['en-US'].url
              }</div>`
            },
            //return image asset in rich text
            [BLOCKS.EMBEDDED_ASSET]: node => {
              return `<img class='custom-asset' src="${
                node.data.target.fields.file['en-US'].url
              }"/>`
            },
          },

          /*
           * Defines custom html string for each mark type like bold, italic etc..
           */
        },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
}
