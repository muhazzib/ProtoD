const Promise = require('bluebird')
const _ = require(`lodash`)
const slash = require(`slash`)
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const natlPost = path.resolve('./src/templates/home.js')
<<<<<<< HEAD
    const natlStatsSubPost = path.resolve('./src/templates/stats-subpages.js')
=======
    const natlAboutPost = path.resolve('./src/templates/natl-about.js')
    // const natlEmploymentTrendPost = path.resolve(
    //   './src/templates/natl-employment-trend.js'
    // )
    // const natlInterestRatePost = path.resolve('./src/templates/natl-about.js')
>>>>>>> e8686f427982cf77b622935b8a5b7c3da598f616

    const boardPost = path.resolve('./src/templates/boards.js')
    // const aboutPost = path.resolve('./src/templates/about.js')
    // const residentialPost = path.resolve(
    //   './src/templates/residential-activity.js'
    // )
    // const salesCategoryPost = path.resolve(
    //   './src/templates/sales-by-category.js'
    // )
    // const salesByPriceRangePost = path.resolve(
    //   './src/templates/sales-by-price-range.js'
    // )
    // const marketConditionPost = path.resolve(
    //   './src/templates/market-condition.js'
    // )
    // const medianPricePost = path.resolve('./src/templates/median-price.js')
    // const employmentTrendsPost = path.resolve(
    //   './src/templates/employment-trend.js'
    // )
    // const consumerConfidencePost = path.resolve(
    //   './src/templates/consumer-confidence.js'
    // )
    // const interestRateChangesPost = path.resolve(
    //   './src/templates/interest-rate-changes.js'
    // )

    // const migrationPost = path.resolve('./src/templates/migration.js')

    resolve(
      graphql(
        `
          {
            allContentfulNational {
              edges {
                node {
                  title
                  slug
                  mainContent {
                    childMarkdownRemark {
                      html
                    }
                  }
                }
              }
            }
            allContentfulBoards(filter: { node_locale: { eq: "en-CA" } }) {
              edges {
                node {
                  title
                  id
                  slug
                  mainContent {
                    childContentfulRichText {
                      html
                    }
                  }
                }
              }
            }

            allContentfulBoardMenu {
              edges {
                node {
                  title
                  menuForBoards {
                    title
                    slug
                  }
                }
              }
            }
            allContentfulStatsPages {
              edges {
                node {
                  id
                  contentful_id
                  node_locale
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        _.each(result.data.allContentfulNational.edges, edge => {
          // We need a common ID to cycle between locales.
          const commonId = edge.node.contentful_id
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
<<<<<<< HEAD
=======
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.node_locale}/national/${commonId}/`,
            component: slash(natlPost),
            context: {
              id: edge.node.id,
              slug: edge.node.slug,
              contentful_id: edge.node.contentful_id,
            },
          })
        })

        _.each(result.data.allContentfulStatsPages.edges, edge => {
          // We need a common ID to cycle between locales.
          const commonId = edge.node.contentful_id
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.node_locale}/stats/${commonId}/`,
            component: slash(natlAboutPost),
            context: {
              id: edge.node.id,
              slug: edge.node.slug,
              contentful_id: edge.node.contentful_id,
            },
          })
        })

        /*         _.each(result.data.allContentfulStatsPages.edges, edge => {
          // We need a common ID to cycle between locales.
          const commonId = edge.node.contentful_id
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.node_locale}/stats/${commonId}/`,
            component: slash(natlEmploymentTrendPost),
            context: {
              id: edge.node.id,
              slug: edge.node.slug,
              contentful_id: edge.node.contentful_id,
            },
          })
        })

        _.each(result.data.allContentfulStatsPages.edges, edge => {
          // We need a common ID to cycle between locales.
          const commonId = edge.node.contentful_id
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.node_locale}/stats/${commonId}/`,
            component: slash(natlInterestRatePost),
            context: {
              id: edge.node.id,
              slug: edge.node.slug,
              contentful_id: edge.node.contentful_id,
            },
          })
        })

        const natlConsumerConfPost = path.resolve(
          './src/templates/natl-consumer-confidence.js'
        )
        _.each(result.data.allContentfulStatsPages.edges, edge => {
          // We need a common ID to cycle between locales.
          const commonId = edge.node.contentful_id
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.node_locale}/stats/${commonId}/`,
            component: slash(natlConsumerConfPost),
            context: {
              id: edge.node.id,
              slug: edge.node.slug,
              contentful_id: edge.node.contentful_id,
            },
          })
        }) */

        const boards = result.data.allContentfulBoards.edges
        boards.forEach((board, index) => {
>>>>>>> e8686f427982cf77b622935b8a5b7c3da598f616
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.node_locale}/national/${commonId}/`,
            component: slash(natlPost),
            context: {
              id: edge.node.id,
              slug: edge.node.slug,
              contentful_id: edge.node.contentful_id,
            },
          })
        })

        _.each(result.data.allContentfulStatsPages.edges, edge => {
          // We need a common ID to cycle between locales.
          const commonId = edge.node.contentful_id
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.node_locale}/stats/${commonId}/`,
            component: slash(natlStatsSubPost),
            context: {
              id: edge.node.id,
              slug: edge.node.slug,
              contentful_id: edge.node.contentful_id,
            },
          })
        })

        const boards = result.data.allContentfulBoards.edges
        boards.forEach((board, index) => {
          createPage({
            path: `/board/${board.node.slug}/`,
            component: boardPost,
            context: {
              id: board.node.id,
              slug: board.node.slug,
            },
          })
        })
      })
    )
  })
}
