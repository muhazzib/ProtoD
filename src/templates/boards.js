import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import * as PropTypes from 'prop-types'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Link from 'gatsby-link'
import SideBar from '../components/Side-bar/side-bar'
import footerStyle from '../components/Footer/footer.module.css'
import { GlobalStyle } from '../utils/global'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class BoardTemplate extends React.Component {
  getYear() {
    return new Date().getFullYear()
  }

  render() {
    const post = get(this.props, 'data.contentfulBoards')
    console.log('p', post)

    return (
      <Layout data={this.props.data} location={this.props.location}>
        <GlobalStyle />
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
                  <h2
                    className="entry-headline"
                    dangerouslySetInnerHTML={{
                      __html: post.headline,
                    }}
                  />
                  <div>
                    {post.mainContent !== null && (
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{
                          __html: post.mainContent.childContentfulRichText.html,
                        }}
                      />
                    )}
                    <div className="boardInfo">
                      {post.boardInfo !== null && (
                        <div>
                          <p
                            className="content"
                            dangerouslySetInnerHTML={{
                              __html: post.boardInfo.childMarkdownRemark.html,
                            }}
                          />
                        </div>
                      )}

                      <Container>
                        <Row>
                          <Col xs="2">
                            {post.boardPresidentPhoto !== null && (
                              <Img
                                className="boardPresPhoto"
                                fixed={post.boardPresidentPhoto.fixed}
                                tracedSVG
                              />
                            )}
                          </Col>

                          <Col xs="2">
                            {post.boardPresidentName !== null && (
                              <p>
                                President <br />
                                {post.boardPresidentName}
                              </p>
                            )}
                          </Col>
                        </Row>
                      </Container>
                    </div>
                    {/* <!--  ==========================================================  -->
  <!--  BOARD AND CREA DECLARATION HERE ==========================  -->
  <!--  ==========================================================  --> */}
                    <div className={footerStyle.boardCredit}>
                      <hr />
                      <p>
                        The information contained in this report has been
                        prepared by The Canadian Real Estate Association, in
                        co-operation with the {post.title}. The information has
                        been drawn from sources deemed to be reliable, but the
                        accuracy and completeness of the information is not
                        guaranteed. In providing this information, neither The
                        Canadian Real Estate Association nor the {post.title}
                        assumes any responsibility or liability.
                        Copyright&nbsp;&copy;{this.getYear()}. The Canadian Real
                        Estate Association. All rights reserved. Reproduction in
                        whole or in part is prohibited without written
                        permission.
                      </p>
                    </div>
                    {/* <!--  ==========================================================  -->
  <!-- END EDITING PAGE CONTENT HERE =============================  -->
  <!--  ==========================================================  --></div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm- side-content">
              <div className="boardInformation sidebar-wrapper">
                <h5 className="text_upper">Board Information</h5>
                <ul>
                  {post.about !== null && (
                    <li>
                      <Link to={`/board/${post.about.slug}`}>
                        {post.about.title}
                      </Link>
                    </li>
                  )}
                  {post.employmentTrendsPage !== null && (
                    <li>
                      <Link to={`/board/${post.employmentTrendsPage.slug}`}>
                        {post.employmentTrendsPage.title}
                      </Link>
                    </li>
                  )}
                  {post.interestRateChangePage !== null && (
                    <li>
                      <Link to={`/board/${post.interestRateChangePage.slug}`}>
                        {post.interestRateChangePage.title}
                      </Link>
                    </li>
                  )}
                  {post.consumerConfidencePage !== null && (
                    <li>
                      <Link to={`/board/${post.consumerConfidencePage.slug}`}>
                        {post.consumerConfidencePage.title}
                      </Link>
                    </li>
                  )}
                  {post.migrationPage !== null && (
                    <li>
                      <Link to={`/board/${post.migrationPage.slug}`}>
                        {post.migrationPage.title}
                      </Link>
                    </li>
                  )}
                </ul>

                <div className="sidebar-wrapper">
                  <h5 className="text_upper">MLS Statistics</h5>
                  <ul>
                    {post.residentialActivity !== null && (
                      <li>
                        <Link to={`/board/${post.residentialActivity.slug}`}>
                          {post.residentialActivity.title}
                        </Link>
                      </li>
                    )}
                    {post.salesByCategory !== null && (
                      <li>
                        <Link to={`/board/${post.salesByCategory.slug}`}>
                          {post.salesByCategory.title}
                        </Link>
                      </li>
                    )}
                    {post.salesByPriceRange !== null && (
                      <li>
                        <Link to={`/board/${post.salesByPriceRange.slug}`}>
                          {post.salesByPriceRange.title}
                        </Link>
                      </li>
                    )}
                    {post.medianPrice !== null && (
                      <li>
                        <Link to={`/board/${post.medianPrice.slug}`}>
                          {post.medianPrice.title}
                        </Link>
                      </li>
                    )}
                    {post.marketConditions !== null && (
                      <li>
<<<<<<< HEAD
                        <Link to={`/board/${post.marketConditions.slug}`}>
=======
                        <Link
                          to={`/market-conditions/${
                            post.marketConditions.slug
                          }`}
                        >
>>>>>>> e8686f427982cf77b622935b8a5b7c3da598f616
                          {post.marketConditions.title}
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
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

BoardTemplate.propTypes = propTypes

export default BoardTemplate

export const pageQuery = graphql`
  query BoardPostBySlug($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    contentfulBoards(id: { eq: $id }) {
      title
      slug
      headline
      boardPresidentName
      boardInfo {
        childMarkdownRemark {
          html
        }
      }
      about {
        title
        slug
      }
      employmentTrendsPage {
        title
        slug
      }
      interestRateChangePage {
        title
        slug
      }
      consumerConfidencePage {
        title
        slug
      }

      migrationPage {
        title
        slug
      }
      marketConditions {
        title
        slug
      }
      medianPrice {
        title
        slug
      }
      salesByCategory {
        title
        slug
      }
      salesByPriceRange {
        title
        slug
      }

      mainContent {
        childContentfulRichText {
          html
        }
      }

      boardPresidentPhoto {
        fixed(width: 130) {
          src
          srcSet
          width
          height
        }
      }

      chartA {
        fixed {
          src
        }
      }

      residentialActivity {
        title
        slug
      }
      salesByCategory {
        title
        slug
      }
      salesByPriceRange {
        title
        slug
      }
      medianPrice {
        title
        slug
      }
      marketConditions {
        title
        slug
      }
    }
  }
`
