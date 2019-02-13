import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import * as PropTypes from 'prop-types'

import Helmet from 'react-helmet'
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

class ConsumerConfidenceTemplate extends React.Component {
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
                  <li>
                    <Link to={`/about/${post.about.slug}`}>
                      {post.about.title}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/employment-trends/${
                        post.employmentTrendsPage.slug
                      }`}
                    >
                      {post.employmentTrendsPage.title}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/interest-rate-changes/${
                        post.interestRateChangePage.slug
                      }`}
                    >
                      {post.interestRateChangePage.title}
                    </Link>
                  </li>
                  {post.consumerConfidencePage !== null && (
                    <li>
                      <Link
                        to={`/consumer-confidence/${
                          post.consumerConfidencePage.slug
                        }`}
                      >
                        {post.consumerConfidencePage.title}
                      </Link>
                    </li>
                  )}
                  <li>
                    <Link to={`/migration/${post.migrationPage.slug}`}>
                      {post.migrationPage.title}
                    </Link>
                  </li>
                </ul>

                <div className="sidebar-wrapper">
                  <h5 className="text_upper">MLS Statistics</h5>
                  <ul>
                    <li>
                      <Link
                        to={`/residential/${post.residentialActivity.slug}`}
                      >
                        {post.residentialActivity.title}
                      </Link>
                    </li>
                    <li>
                      <Link to={`/sales-category/${post.salesByCategory.slug}`}>
                        {post.salesByCategory.title}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/sales-by-price-range/${
                          post.salesByPriceRange.slug
                        }`}
                      >
                        {post.salesByPriceRange.title}
                      </Link>
                    </li>
                    <li>
                      <Link to={`/median-price/${post.medianPrice.slug}`}>
                        {post.medianPrice.title}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/market-conditions/${post.marketConditions.slug}`}
                      >
                        {post.marketConditions.title}
                      </Link>
                    </li>
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

ConsumerConfidenceTemplate.propTypes = propTypes

export default ConsumerConfidenceTemplate

export const pageQuery = graphql`
  query ConsumerConfSlug($id: String!) {
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
