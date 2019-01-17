import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import contentStyles from '../components/Content/content.css'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Chart from '../components/Chart/chart'
import Sidebar from '../components/Side-bar/side-bar'
import Sheet from '../components/Table/sheet'

class RootIndex extends React.Component {
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
    const natl = get(this, 'props.data.allContentfulNational.edges[0].node')

    return (
      <Layout location={this.props.location}>
        <Chart />
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
  }
`
