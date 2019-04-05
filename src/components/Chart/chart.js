import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Accordion, AccordionItem } from 'react-sanfona'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app
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

const images = [
  '//placekitten.com/1500/500',
  '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500',
]

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
      photoIndex: 0,
      isOpen: false,
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }

  render() {
    /* const data = this.props.acc.allFile.edges */
    const barrie = this.props.acc.Barrie.edges
    const toronto = this.props.acc.Toronto.edges
    const victoria = this.props.acc.Victoria.edges

    const { photoIndex, isOpen } = this.state

    console.log('barrie', barrie)
    const bx = barrie.map((xxy, id) => {
      console.log('bx', xxy.node.childImageSharp.fluid.src)
      return (
        <div>
          <img src={xxy.node.childImageSharp.fluid.src} />
        </div>
      )
    })
    console.log('bmx', bx)
    return (
      <div>
        {/*   <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button> */}

        {isOpen && (
          <Lightbox
            mainSrc={bx[photoIndex]}
            nextSrc={bx[(photoIndex + 1) % bx.length]}
            prevSrc={bx[(photoIndex + bx.length - 1) % bx.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + bx.length - 1) % bx.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % bx.length,
              })
            }
          />
        )}
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
            <Row>
              {barrie.map((item, id) => (
                <Col sm="3" key={id}>
                  <img src={item.node.childImageSharp.fluid.src} />
                </Col>
              ))}
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              {toronto.map((item, id) => (
                <Col sm="3" key={id}>
                  <img src={item.node.childImageSharp.fluid.src} />
                </Col>
              ))}
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              {victoria.map((item, id) => (
                <Col sm="3" key={id}>
                  <img src={item.node.childImageSharp.fluid.src} />
                </Col>
              ))}
            </Row>
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
