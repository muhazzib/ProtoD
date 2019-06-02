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
    
    const nrs = this.props.acc.natlResStats.edges
    const van = this.props.acc.VanIsland.edges
    const victoria = this.props.acc.Victoria.edges
    const GVan = this.props.acc.GVancouver.edges
    const fraserV = this.props.acc.FraserV.edges
    const okan = this.props.acc.Okan.edges
    const calg = this.props.acc.Calg.edges
    const edmo = this.props.acc.Edmonton.edges
    const regi = this.props.acc.Regina.edges
    const sask = this.props.acc.Sask.edges
    const gulp = this.props.acc.Guelph.edges
    const hamB = this.props.acc.HamiltonB.edges
    const oakv = this.props.acc.Oakv.edges
    const barr = this.props.acc.Barrie.edges
    const toronto = this.props.acc.Toronto.edges
    const niagara = this.props.acc.Niagara.edges
    const ottawa = this.props.acc.Ottawa.edges
    const montreal = this.props.acc.Montreal.edges
    const moncton = this.props.acc.Moncton.edges

    const { activeTab } = this.state

    const nrsImages = nrs.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })

    const vanImages = van.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })
    const victImages = victoria.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })
    const gVanImages = GVan.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })
    const fraserImages = fraserV.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })
    const okanImages = okan.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })
    const calgImages = calg.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })
    const edmoImages = edmo.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })
    const regImages = regi.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })
    const saskImages = sask.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })
    const gulpImages = gulp.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })
    const hamBImages = hamB.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })
    const oakvImages = oakv.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })
    const barrImages = barr.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })
    const gtaImages = toronto.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })
    const nagrImages = niagara.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })
    const ottImages = ottawa.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })
    const mtlImages = montreal.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })
    const moncImages = moncton.map((item, id) => {
      return {
        src: item.node.childImageSharp.fluid.src,
        width: 247,
        height: 169,
      }
    })
    const activeImages =
      activeTab == '1'
        ? nrsImages
        : activeTab == '2'
        ? vanImages
        : activeTab == '3'
        ? victImages
        : activeTab == '4'
        ? gVanImages
        : activeTab == '5'
        ? fraserImages
        : activeTab == '6'
        ? okanImages
        : activeTab == '7'
        ? calgImages
        : activeTab == '8'
        ? edmoImages
        : activeTab == '9'
        ? regImages
        : activeTab == '10'
        ? saskImages
        : activeTab == '11'
        ? gulpImages
        : activeTab == '12'
        ? hamBImages
        : activeTab == '13'
        ? oakvImages
        : activeTab == '14'
        ? barrImages
        : activeTab == '15'
        ? gtaImages
        : activeTab == '16'
        ? nagrImages
        : activeTab == '17'
        ? ottImages
        : activeTab == '18'
        ? mtlImages
        : activeTab == '19'
        ? moncImages
        : []
    console.log(activeImages, 'ac')

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
              VICTORIA
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => {
                this.toggle('4')
              }}
            >
              GREATER VANCOUVER
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => {
                this.toggle('5')
              }}
            >
              FRASER VALLEY
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => {
                this.toggle('6')
              }}
            >
              OKANAGAN VALLEY
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '7' })}
              onClick={() => {
                this.toggle('7')
              }}
            >
              CALGARY
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '8' })}
              onClick={() => {
                this.toggle('8')
              }}
            >
              EDMONTON
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '9' })}
              onClick={() => {
                this.toggle('9')
              }}
            >
              REGINA
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '10' })}
              onClick={() => {
                this.toggle('10')
              }}
            >
              SASKATOON
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '11' })}
              onClick={() => {
                this.toggle('11')
              }}
            >
              GUELPH
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '12' })}
              onClick={() => {
                this.toggle('12')
              }}
            >
              HAMILTON-BURLINGTON
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '13' })}
              onClick={() => {
                this.toggle('13')
              }}
            >
              OAKVILLE-MILTON
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '14' })}
              onClick={() => {
                this.toggle('14')
              }}
            >
              BARRIE
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '15' })}
              onClick={() => {
                this.toggle('15')
              }}
            >
              GREATER TORONTO
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '16' })}
              onClick={() => {
                this.toggle('16')
              }}
            >
              NIAGARA REGION
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '17' })}
              onClick={() => {
                this.toggle('17')
              }}
            >
              OTTAWA
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '18' })}
              onClick={() => {
                this.toggle('18')
              }}
            >
              GREATER MONTREAL
            </NavLink>
          </NavItem>
          <NavItem className={charts.tabList}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '19' })}
              onClick={() => {
                this.toggle('19')
              }}
            >
              GREATER MONCTON
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent
          activeTab={this.state.activeTab}
          className={charts.tabContent}
        >
          <TabPane tabId={this.state.activeTab}>
            <Gallery photos={activeImages} onClick={this.openLightbox} />
            <Lightbox
              images={activeImages}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
          </TabPane>
        </TabContent>

        {/* <TabContent
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
            <Gallery photos={TrebImages} onClick={this.openLightbox} />
            <Lightbox
              images={TrebImages}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
          </TabPane>
          <TabPane tabId="3">
            <Gallery photos={VictImages} onClick={this.openLightbox} />
            <Lightbox
              images={VictImages}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
          </TabPane>
        </TabContent> */}
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query AccQuery {
        natlResStats: allFile(
          filter: { sourceInstanceName: { eq: "natlResStats" } }
        ) {
          ...Sources
        }

        VanIsland: allFile(
          filter: { sourceInstanceName: { eq: "vanIsland" } }
        ) {
          ...Sources
        }
        Victoria: allFile(filter: { sourceInstanceName: { eq: "victoria" } }) {
          ...Sources
        }
        GVancouver: allFile(filter: { sourceInstanceName: { eq: "GVC" } }) {
          ...Sources
        }
        FraserV: allFile(
          filter: { sourceInstanceName: { eq: "fraserValley" } }
        ) {
          ...Sources
        }
        Okan: allFile(filter: { sourceInstanceName: { eq: "okanganValley" } }) {
          ...Sources
        }
        Calg: allFile(filter: { sourceInstanceName: { eq: "calgary" } }) {
          ...Sources
        }
        Edmonton: allFile(filter: { sourceInstanceName: { eq: "edmonton" } }) {
          ...Sources
        }
        Regina: allFile(filter: { sourceInstanceName: { eq: "regina" } }) {
          ...Sources
        }
        Sask: allFile(filter: { sourceInstanceName: { eq: "sask" } }) {
          ...Sources
        }
        Guelph: allFile(filter: { sourceInstanceName: { eq: "guelph" } }) {
          ...Sources
        }
        HamiltonB: allFile(
          filter: { sourceInstanceName: { eq: "hamiltonB" } }
        ) {
          ...Sources
        }
        Oakv: allFile(filter: { sourceInstanceName: { eq: "oakvilleM" } }) {
          ...Sources
        }
        Barrie: allFile(filter: { sourceInstanceName: { eq: "barrie" } }) {
          ...Sources
        }
        Toronto: allFile(filter: { sourceInstanceName: { eq: "GTA" } }) {
          ...Sources
        }
        Niagara: allFile(filter: { sourceInstanceName: { eq: "niagara" } }) {
          ...Sources
        }
        Ottawa: allFile(filter: { sourceInstanceName: { eq: "ottawa" } }) {
          ...Sources
        }
        Montreal: allFile(filter: { sourceInstanceName: { eq: "montreal" } }) {
          ...Sources
        }
        Moncton: allFile(filter: { sourceInstanceName: { eq: "moncton" } }) {
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
        <Chart acc={data} />
      </header>
    )}
  />
)
