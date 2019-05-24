import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import * as PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import contentStyles from '../components/Content/content.css'
import Img from 'gatsby-image'
import Layout from '../components/Layouts/layout'
import Chart from '../components/Chart/chart'
import Sidebar from '../components/Side-bar/side-bar'
import Sheet from '../components/Table/sheet'
import Footersub from '../components/Footer/footer-sub'
import footerStyle from '../components/Footer/footer.module.css'
import ChartA from '../components/Chart/chartA'
import ChartB from '../components/Chart/chartB'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const style = {
  marginBottom: '20px',
}

class RootENIndex extends React.Component {
  getYear() {
    return new Date().getFullYear()
  }
  constructor(props) {
    super(props)

    this.state = {
      dd1: false,
      modal1: false,
      modal2: false,
      chartA: false,
      chartB: false,
    }
    this.dropdownToggle = this.dropdownToggle.bind(this)
  }

  dropdownToggle() {
    this.setState({
      dd1: !this.state.dd1,
    })
  }
  closeModal(tabId) {
    this.setState({
      [tabId]: false,
    })
  }
  showModal = () => {
    this.setState({
      chartA: !this.state.chartA,
    })
  }
  showModal2 = () => {
    this.setState({
      chartB: !this.state.chartB,
    })
  }
  render() {
    console.log('===>>>>>', this.props, '<<<<<<<=======')
    const natl = get(this, 'props.data.ca.edges[0].node')

    return (
      <Layout data={this.props.data} location={this.props.location}>
        {/* <Chart /> */}

        <div className="content-wrapper">
          <div className="row split">
            <div className="col-md">
              <div className="entry-header">
                <h1>National Statistics test fcf</h1>
                {/* <h1
                  className="entry-title"
                  dangerouslySetInnerHTML={{
                    __html: natl.title,
                  }}
                /> */}
              </div>

              <div className="entry-content">
                <div className="entry-sub">
                  <h2>{natl.headline}</h2>

                  <div>
                    {natl.contentA !== null && (
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{
                          __html: natl.contentA.childContentfulRichText.html,
                        }}
                      />
                    )}

                    {natl.chartA !== null && (
                      <div className="chart_container">
                        <div className="imageBox">
                          {/*  <img
                            onClick={this.showModal}
                            src={natl.chartA.fixed.src}
                            className="thumbnail"
                          /> */}
                          <ChartA className="thumbnail" />
                        </div>

                        <p>Chart A</p>
                      </div>
                    )}

                    {natl.contentB !== null && (
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{
                          __html: natl.contentB.childContentfulRichText.html,
                        }}
                      />
                    )}
                    {natl.chartB !== null && (
                      <div className="chart_container">
                        <div className="imageBox">
                          {/*  <img
                            onClick={this.showModal}
                            src={natl.chartB.fixed.src}
                            className="thumbnail"
                          /> */}
                          <ChartB className="thumbnail" />
                        </div>

                        <p>Chart B</p>
                      </div>
                    )}

                    {natl.contentC !== null && (
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{
                          __html: natl.contentC.childContentfulRichText.html,
                        }}
                      />
                    )}
                    <div className="sheet">
                      <div style={style}>
                        <Chart />
                      </div>
                      <Sheet />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm- side-content">
              <div className="chart">
                <Sidebar pathname="en-US" />
              </div>
            </div>
          </div>
        </div>
        <Footersub />
        {/* <!--  ==========================================================  -->
  <!--  BOARD AND CREA DECLARATION HERE ==========================  -->
  <!--  ==========================================================  --> */}
        <div className={footerStyle.boardCredit}>
          <p>
            The information contained in this report has been prepared by The
            Canadian Real Estate Association drawn from sources deemed to be
            reliable, but the accuracy and completeness of the information is
            not guaranteed. In providing this information, The Canadian Real
            Estate Association does not assume any responsibility or liability.
            Copyright © {this.getYear()} The Canadian Real Estate Association.
            All rights reserved. Reproduction in whole or in part is prohibited
            without written permission.
          </p>
        </div>
        {/* <!--  ==========================================================  -->
  <!-- END EDITING PAGE CONTENT HERE =============================  -->
  <!--  ==========================================================  --></div> */}
      </Layout>
    )
  }
}

RootENIndex.propTypes = propTypes

export default RootENIndex

export const pageQuery = graphql`
  query HomeENQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    ca: allContentfulNational(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          id
          contentful_id
          node_locale
          headline
          slug

          chartA {
            fixed(width: 1079, height: 740) {
              src
              width
              height
              srcSet
            }
          }
          chartA {
            fluid(maxWidth: 1079, maxHeight: 740) {
              aspectRatio
              srcSet
              src
            }
          }
          chartB {
            fixed(width: 1079, height: 740) {
              src
              width
              height
              srcSet
            }
          }
          chartB {
            fluid(maxWidth: 1079, maxHeight: 740) {
              aspectRatio
              srcSet
              src
            }
          }
          publishDate
          contentA {
            childContentfulRichText {
              html
            }
          }
          contentB {
            childContentfulRichText {
              html
            }
          }
          contentC {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
    natltitle: allContentfulStatsPages(filter: { title: { eq: "About" } }) {
      ...Sourcex
    }
    en: allContentfulStatsPages(filter: { node_locale: { eq: "en-US" } }) {
      ...Sourcex
    }
  }

  fragment Sourcex on ContentfulStatsPagesConnection {
    edges {
      node {
        title
        slug
        contentA {
          childContentfulRichText {
            html
          }
        }
        contentful_id
        node_locale
      }
    }
  }
`
