const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    // const blogPost = path.resolve('./src/templates/blog-post.js')
    const natlPost = path.resolve('./src/templates/home.js')
    const boardPost = path.resolve('./src/templates/boards.js')
    // const sweetsPost = path.resolve('./src/templates/sweets.js')

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
            allContentfulBoards {
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
                  mlsStatistics {
                    title
                    slug
                  }
                  samtoo {
                    title
                  }
                  sweets {
                    title
                    slug
                    content {
                      childMarkdownRemark {
                        html
                      }
                    }
                  }
                  childBoards {
                    title
                    id
                    slug
                    mainContent {
                      content {
                        content {
                          value
                        }
                      }
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
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const natls = result.data.allContentfulNational.edges
        natls.forEach((natl, index) => {
          createPage({
            path: `/national/${natl.node.slug}/`,
            component: natlPost,
            context: {
              slug: natl.node.slug,
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
