import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Accordion, AccordionItem } from 'react-sanfona'
import Lightbox from 'react-images'
import Gallery from 'react-photo-gallery'

import '../Chart/chart.module.css'

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from 'reactstrap'
import classnames from 'classnames'
import charts from './chart.module.css'
import './chart-accordion.css'

class Chart extends React.Component {
  /*   <Accordion>
    {[
      'NATIONAL RESIDENTIAL STATISTICS',
      'VANCOUVER ISLAND',
      'VICTORIA',
      'GREATER VANCOUVER',
      'FRASER VALLEY',
      'CALGARY',
      'EDMONTON',
      'REGINA',
    ].map(item => {
      return (
        <AccordionItem title={` ${item}`} expanded={item === 1}>
          <div>{`Item ${item} content`}</div>
        </AccordionItem>
      )
    })}
  </Accordion> */

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: '1',

      currentImage: 0,
    }
    this.closeLightbox = this.closeLightbox.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    })
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }

  render() {
    /* const data = this.props.acc.allFile.edges */
    const barrie = this.props.acc.Barrie.edges
    const toronto = this.props.acc.Toronto.edges
    const victoria = this.props.acc.Victoria.edges
    console.log('barries', barrie)

    const BarrImages = barrie.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })

    const TrebImages = toronto.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })

    const VictImages = victoria.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })
    /* const imagez = barrie.map((item, id) => item.node.childImageSharp.fluid.src)
    console.log('imagesCharts', images) */

    return (
      <div className="charts-stats">
        <Nav tabs className={charts.tabTitle}>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => {
                this.toggle('1')
              }}
            >
              NATIONAL RESIDENTIAL STATISTICS
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => {
                this.toggle('2')
              }}
            >
              VANCOUVER ISLAND
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => {
                this.toggle('3')
              }}
            >
              GREATER VANCOUVER
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => {
                this.toggle('4')
              }}
            >
              REGINA
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => {
                this.toggle('5')
              }}
            >
              BARRIE
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => {
                this.toggle('6')
              }}
            >
              FRASER VALLEY
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '7' })}
              onClick={() => {
                this.toggle('7')
              }}
            >
              SASKATOON
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '8' })}
              onClick={() => {
                this.toggle('8')
              }}
            >
              OTTAWA
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '9' })}
              onClick={() => {
                this.toggle('9')
              }}
            >
              GUELPH
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '10' })}
              onClick={() => {
                this.toggle('10')
              }}
            >
              NIAGRA REGION
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent
          activeTab={this.state.activeTab}
          className={charts.tabContent}
        >
          <TabPane tabId="1">
            <Gallery photos={BarrImages} onClick={this.openLightbox} />
            <Lightbox
              images={BarrImages}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
          </TabPane>
          <TabPane tabId="2">
            {/*   <Gallery photos={TrebImages} onClick={this.openLightbox} />
            <Lightbox
              images={TrebImages}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            /> */}
          </TabPane>
          <TabPane tabId="3">
            {/*   <Gallery photos={VictImages} onClick={this.openLightbox} />
            <Lightbox
              images={VictImages}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            /> */}
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query AccQuery {
        Barrie: allFile(filter: { sourceInstanceName: { eq: "barrie" } }) {
          ...Sources
        }
        Toronto: allFile(filter: { sourceInstanceName: { eq: "toronto" } }) {
          ...Sources
        }
        Victoria: allFile(filter: { sourceInstanceName: { eq: "victoria" } }) {
          ...Sources
        }
      }

      fragment Sources on FileConnection {
        edges {
          node {
            name
            id
            sourceInstanceName
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        {/* <h1>{data.site.siteMetadata.title}</h1> */}
        <Chart acc={data} />
      </header>
    )}
  />
)
