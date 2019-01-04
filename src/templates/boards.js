import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Link from 'gatsby-link'
import Mls from '../components/mls'
import Sheet from '../components/sheet'
import SideBar from '../components/Side-bar/side-bar'

class BoardTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBoards')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    console.log(post.mainContent.childContentfulRichText.html)
    console.log('p', post)

    return (
      <Layout location={this.props.location}>
        <div className="content-wrapper">
          <div className="row split">
            <div className="col-md">
              <div className="entry-header">
                <h1
                  className="entry-title"
                  dangerouslySetInnerHTML={{
                    __html: post.title,
                  }}
                />
              </div>

              <div className="entry-content">
                <div className="entry-sub">
                  {/* <h2>headline</h2> */}

                  {/* <div
                    className="content"
                    dangerouslySetInnerHTML={{
                      __html: natl.mainContent.childMarkdownRemark.html,
                    }}
                  /> */}
                  <div>
                    {post.mainContent.childContentfulRichText.html}
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{
                        __html: post.mainContent.childContentfulRichText.html,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm- side-content">
              <div className="chart">
                {/* Boards start */}
                {post.childBoards !== null && (
                  <div className="sidebar-wrapper">
                    <h5 className="text_upper">Board</h5>
                    <ul>
                      {post.childBoards.map((item, i) => (
                        <li key={i}>
                          <Link key={i} to={`/board/${item.slug}`}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* boards end */}

                {/* mls start */}

                {post.mlsStatistics !== null && (
                  <div className="sidebar-wrapper">
                    <h5 className="text_upper">MLS Statistics</h5>
                    <ul>
                      {post.mlsStatistics.map((mlsitem, x) => (
                        <li key={x}>
                          <Link key={x} to={`/board/${mlsitem.slug}`}>
                            {mlsitem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* mls ends */}
                <SideBar />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BoardTemplate

export const pageQuery = graphql`
  query BoardPostBySlug($id: String!) {
    contentfulBoards(id: { eq: $id }) {
      title
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
      childBoards {
        title
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
`
