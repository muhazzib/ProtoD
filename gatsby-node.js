const Promise = require('bluebird')
const _ = require(`lodash`)
const slash = require(`slash`)
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const natlPost = path.resolve('./src/templates/home.js')
    const natlStatsSubPost = path.resolve('./src/templates/stats-subpages.js')
    const boardPost = path.resolve('./src/templates/boards.js')
    const mlsPost = path.resolve('./src/templates/mlspages.js')

    resolve(
      graphql(
        `
          {
            allContentfulNational(
              sort: { fields: [publishDate], order: DESC }
            ) {
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
            allContentfulBoards(filter: { node_locale: { eq: "en-US" } }) {
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
            allContentfulMlsPages(filter: { node_locale: { eq: "en-US" } }) {
              edges {
                node {
                  title
                  id
                  slug
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
            path: `/board/${board.node.slug}`,
            component: boardPost,
            context: {
              id: board.node.id,
              slug: board.node.slug,
            },
          })
        })

        const mlspages = result.data.allContentfulMlsPages.edges
        mlspages.forEach((mls, index) => {
          createPage({
            path: `/mls/${mls.node.slug}`,
            component: mlsPost,
            context: {
              id: mls.node.id,
              slug: mls.node.slug,
            },
          })
        })
      })
    )
  })
}
