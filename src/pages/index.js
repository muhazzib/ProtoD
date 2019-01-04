import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Content from '../components/Content/Content'
import Container from '../components/container'
import Sidebar from '../components/Side-bar/side-bar'
import Sheet from '../components/sheet'

class RootIndex extends React.Component {
  render() {
    const natl = get(this, 'props.data.allContentfulNational.edges[0].node')
    console.log('data-wa', natl.title)
    return (
      <Layout location={this.props.location}>
        <div className="content-wrapper">
          <div className="row split">
            <div className="col-md">
              <div className="entry-header">
                <h1
                  className="entry-title"
                  dangerouslySetInnerHTML={{
                    __html: natl.title,
                  }}
                />
              </div>

              <div className="entry-content">
                <div className="entry-sub">
                  <h2>{natl.headline}</h2>

                  {/* <div
                    className="content"
                    dangerouslySetInnerHTML={{
                      __html: natl.mainContent.childMarkdownRemark.html,
                    }}
                  /> */}
                  {natl.mainContent !== null && (
                    <div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: natl.mainContent.childMarkdownRemark.html,
                        }}
                      />
                      <Sheet />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-sm- side-content">
              <div className="chart">
                <Sidebar />
              </div>
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
    allContentfulNational(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          title
          headline
          slug
          publishDate
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
