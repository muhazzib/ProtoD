const Promise = require('bluebird')
const _ = require(`lodash`)
const slash = require(`slash`)
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const natlPost = path.resolve('./src/templates/home.js')
    const natlAboutPost = path.resolve('./src/templates/natl-about.js')
    // const natlEmploymentTrendPost = path.resolve(
    //   './src/templates/natl-employment-trend.js'
    // )
    // const natlInterestRatePost = path.resolve('./src/templates/natl-about.js')

    const boardPost = path.resolve('./src/templates/boards.js')
    const aboutPost = path.resolve('./src/templates/about.js')
    const residentialPost = path.resolve(
      './src/templates/residential-activity.js'
    )
    const salesCategoryPost = path.resolve(
      './src/templates/sales-by-category.js'
    )
    const salesByPriceRangePost = path.resolve(
      './src/templates/sales-by-price-range.js'
    )
    const marketConditionPost = path.resolve(
      './src/templates/market-condition.js'
    )
    const medianPricePost = path.resolve('./src/templates/median-price.js')
    const employmentTrendsPost = path.resolve(
      './src/templates/employment-trend.js'
    )
    const consumerConfidencePost = path.resolve(
      './src/templates/consumer-confidence.js'
    )
    const interestRateChangesPost = path.resolve(
      './src/templates/interest-rate-changes.js'
    )

    const migrationPost = path.resolve('./src/templates/migration.js')

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
          createPage({
            path: `/board/${board.node.slug}/`,
            component: boardPost,
            context: {
              id: board.node.id,
              slug: board.node.slug,
            },
          })
        })

        const aboutpage = result.data.allContentfulBoards.edges
        aboutpage.forEach((about, index) => {
          createPage({
            path: `/about/${about.node.slug}/`,
            component: aboutPost,
            context: {
              id: about.node.id,
              slug: about.node.slug,
            },
          })
        })

        const employmentTrends = result.data.allContentfulBoards.edges
        employmentTrends.forEach((EPT, index) => {
          createPage({
            path: `/employment-trends/${EPT.node.slug}/`,
            component: employmentTrendsPost,
            context: {
              id: EPT.node.id,
              slug: EPT.node.slug,
            },
          })
        })

        const interestRateChanges = result.data.allContentfulBoards.edges
        interestRateChanges.forEach((IRC, index) => {
          createPage({
            path: `/interest-rate-changes/${IRC.node.slug}/`,
            component: interestRateChangesPost,
            context: {
              id: IRC.node.id,
              slug: IRC.node.slug,
            },
          })
        })
        const consumerConfidence = result.data.allContentfulBoards.edges
        consumerConfidence.forEach((ConsumerC, index) => {
          createPage({
            path: `/consumer-confidence/${ConsumerC.node.slug}/`,
            component: consumerConfidencePost,
            context: {
              id: ConsumerC.node.id,
              slug: ConsumerC.node.slug,
            },
          })
        })

        const migration = result.data.allContentfulBoards.edges
        migration.forEach((migrt, index) => {
          createPage({
            path: `/migration/${migrt.node.slug}/`,
            component: migrationPost,
            context: {
              id: migrt.node.id,
              slug: migrt.node.slug,
            },
          })
        })
        //Boards end here

        //MLS starts here
        const resi = result.data.allContentfulBoards.edges
        resi.forEach((resA, index) => {
          createPage({
            path: `/residential/${resA.node.slug}/`,
            component: residentialPost,
            context: {
              id: resA.node.id,
              slug: resA.node.slug,
            },
          })
        })
        const salesCategory = result.data.allContentfulBoards.edges
        salesCategory.forEach((salesC, index) => {
          createPage({
            path: `/sales-category/${salesC.node.slug}/`,
            component: salesCategoryPost,
            context: {
              id: salesC.node.id,
              slug: salesC.node.slug,
            },
          })
        })
        const salesByPriceRange = result.data.allContentfulBoards.edges
        salesByPriceRange.forEach((salesByPriceRange, index) => {
          createPage({
            path: `/sales-by-price-range/${salesByPriceRange.node.slug}/`,
            component: salesByPriceRangePost,
            context: {
              id: salesByPriceRange.node.id,
              slug: salesByPriceRange.node.slug,
            },
          })
        })
        const medianPrice = result.data.allContentfulBoards.edges
        medianPrice.forEach((medianPrice, index) => {
          createPage({
            path: `/median-price/${medianPrice.node.slug}/`,
            component: medianPricePost,
            context: {
              id: medianPrice.node.id,
              slug: medianPrice.node.slug,
            },
          })
        })
        const marketConditions = result.data.allContentfulBoards.edges
        marketConditions.forEach((marketCond, index) => {
          createPage({
            path: `/market-conditions/${marketCond.node.slug}/`,
            component: marketConditionPost,
            context: {
              id: marketCond.node.id,
              slug: marketCond.node.slug,
            },
          })
        })
      })
    )
  })
}
