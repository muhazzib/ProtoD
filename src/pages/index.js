import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
/* import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css' */
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import Img from 'gatsby-image'
import Layout from '../components/layout'
import Chart from '../components/Chart/chart'
import Sidebar from '../components/Side-bar/side-bar'
import Sheet from '../components/Table/sheet'

class RootIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    })
  }

  render() {
    const natl = get(this, 'props.data.allContentfulNational.edges[0].node')
    console.log('image', natl.chartA)

    return (
      <Layout location={this.props.location}>
        <div className="content-wrapper">
          <div className="row split">
            <div className="col-md">
              <div className="entry-header">
                {/* <Chart /> */}
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

                  {natl.mainContent !== null && (
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
                            onClick={this.toggle}
                            src={natl.chartA.fixed.src}
                            className="thumbnail"
                          />
                        </div>
                        <Modal
                          isOpen={this.state.modal}
                          toggle={this.toggle}
                          className={this.props.className}
                        >
                          <ModalBody>
                            <img src={natl.chartA.fixed.src} />
                          </ModalBody>
                          <ModalFooter>
                            <Button color="secondary" onClick={this.toggle}>
                              Close
                            </Button>
                          </ModalFooter>
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
                        {/* <ReactFancyBox
                          thumbnail={natl.chartB.fixed.src}
                          image={natl.chartB.fluid.src}
                        /> */}
                        <div className="imageBox">
                          <img
                            onClick={this.toggle}
                            src={natl.chartB.fixed.src}
                            className="thumbnail"
                          />
                        </div>
                        <Modal
                          isOpen={this.state.modal}
                          toggle={this.toggle}
                          className={this.props.className}
                        >
                          <ModalBody>
                            <img src={natl.chartB.fluid.src} />
                          </ModalBody>
                          <ModalFooter>
                            <Button color="secondary" onClick={this.toggle}>
                              Close
                            </Button>
                          </ModalFooter>
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
