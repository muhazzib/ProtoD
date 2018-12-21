import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Content from '../components/Content/Content'
import Container from '../components/container'
import SideBar from '../components/Side-bar/side-bar'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges.')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const natl = get(this, 'props.data.allContentfulNational.edges[0].node')
    console.log('data-wa', natl.title)
    return (
      <Layout location={this.props.location}>
        <div className="content-wrapper">
          <div className="row split">
            <div className="col-md">
              <div className="entry-header">
                <h1 className="entry-title">title</h1>
              </div>

              <div className="entry-content">
                <div className="entry-sub">
                  <h2>{natl.headline}</h2>
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{
                      __html: natl.mainContent.childMarkdownRemark.html,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm- side-content">
              <div className="chart">Chart</div>
              Sidebar
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    allContentfulNational {
      edges {
        node {
          title
          headline
          slug
          mainContent {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
