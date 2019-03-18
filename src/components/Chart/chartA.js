import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Accordion, AccordionItem } from 'react-sanfona'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import ChartStyle from '../Chart/chart.module.css'

const pStyle = {
  fontSize: '15px',
  textAlign: 'center',
  width: '100%',
}

class ChartImageA extends React.Component {
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
    /* const data = this.props.acc.allFile.edges */
    const post = this.props.chart.ChartA.edges[0].node
    console.log('charta', post.chartA.fixed.src)

    return (
      <div>
        <div className="imageBox">
          <img
            onClick={this.showModal.bind(this, 'modal1')}
            src={post.chartA.fixed.src}
            className="thumbnail"
          />
        </div>
        <Modal
          isOpen={this.state.modal1}
          toggle={this.closeModal.bind(this, 'modal1')}
          className={this.props.className}
        >
          <ModalHeader toggle={this.closeModal.bind(this, 'modal1')}>
            Chart A
          </ModalHeader>
          <ModalBody>
            <img style={pStyle} src={post.chartA.fluid.src} />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        ChartA: allContentfulNational(
          filter: { node_locale: { eq: "en-US" } }
          sort: { fields: [publishDate], order: DESC }
        ) {
          edges {
            node {
              title
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
              publishDate
              contentful_id
              node_locale
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        {/* <h1>{data.site.siteMetadata.title}</h1> */}
        <ChartImageA chart={data} />
      </header>
    )}
  />
)
