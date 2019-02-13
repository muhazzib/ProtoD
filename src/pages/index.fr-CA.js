import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import contentStyles from '../components/Content/content.css'
import Img from 'gatsby-image'
import * as PropTypes from 'prop-types'
import LayoutFr from '../components/layout.fr'
import '../components/Side-bar/side-bar.css'
import Menu from '../components/Board-Menu/menu'
import Chart from '../components/Chart/chart'
import SidebarFr from '../components/Side-bar/side-bar.fr'
import Sheet from '../components/Table/sheet'
import Footersub from '../components/Footer/footer-sub'
import footerStyle from '../components/Footer/footer.module.css'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class RootDEIndex extends React.Component {
  getYear() {
    return new Date().getFullYear()
  }
  constructor(props) {
    super(props)

    this.state = {
      dd1: false,
      modal1: false,
      modal2: false,
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
  showModal(modal) {
    this.setState({
      [modal]: true,
    })
    console.log(this.state)
  }

  render() {
    const natl = get(this, 'props.data.fr.edges[0].node')
    const natls = get(this, 'props.data.frn.edges[0].node')
    console.log('national-fr', natls)

    return (
      <LayoutFr data={this.props.data} location={this.props.location}>
        {/* <Chart /> */}
        <div className="content-wrapper">
          <div className="row split">
            <div className="col-md">
              <div className="entry-header">
                <h1>Statistiques nationales</h1>
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
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{
                        __html: natl.mainContent.childMarkdownRemark.html,
                      }}
                    />
                    <div className="chart_container">
                      {/* Char A Start */}
                      <div className="imageBox">
                        <img
                          onClick={this.showModal.bind(this, 'modal1')}
                          src={natl.chartA.fixed.src}
                          className="thumbnail"
                        />
                      </div>
                      <Modal
                        isOpen={this.state.modal1}
                        toggle={this.closeModal.bind(this, 'modal1')}
                        className={this.props.className}
                      >
                        <ModalHeader
                          toggle={this.closeModal.bind(this, 'modal1')}
                        >
                          Chart A
                        </ModalHeader>
                        <ModalBody>
                          <img src={natl.chartA.fluid.src} />
                        </ModalBody>
                      </Modal>
                      <p>Chart A</p>
                    </div>
                    {/* Char A End */}
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{
                        __html: natl.contentB.childContentfulRichText.html,
                      }}
                    />
                    <div className="chart_container">
                      <div className="imageBox">
                        <img
                          onClick={this.showModal.bind(this, 'modal2')}
                          src={natl.chartB.fixed.src}
                          className="thumbnail"
                        />
                      </div>
                      <Modal
                        isOpen={this.state.modal2}
                        toggle={this.closeModal.bind(this, 'modal2')}
                        className={this.props.className}
                      >
                        <ModalHeader
                          toggle={this.closeModal.bind(this, 'modal2')}
                        >
                          Chart B
                        </ModalHeader>
                        <ModalBody>
                          <img src={natl.chartB.fluid.src} />
                        </ModalBody>
                      </Modal>

                      <p>Chart B</p>
                    </div>

                    <div
                      className="content"
                      dangerouslySetInnerHTML={{
                        __html: natl.contentC.childContentfulRichText.html,
                      }}
                    />

                    <Sheet />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-sm- side-content">
              <div className="chart">
                <SidebarFr />
              </div>
            </div> */}
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
      </LayoutFr>
    )
  }
}

RootDEIndex.propTypes = propTypes

export default RootDEIndex

export const pageQuery = graphql`
  query HomeDEQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    fr: allContentfulNational(filter: { node_locale: { eq: "fr-CA" } }) {
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
          mainContent {
            childMarkdownRemark {
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
    frnatltitle: allContentfulStatsPages(filter: { title: { eq: "French" } }) {
      ...Sourcey
    }
    frn: allContentfulStatsPages(filter: { node_locale: { eq: "fr-CA" } }) {
      ...Sourcey
    }
  }
  fragment Sourcey on ContentfulStatsPagesConnection {
    edges {
      node {
        title
        slug
        mainContent {
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
