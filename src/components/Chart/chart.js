import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Accordion, AccordionItem } from 'react-sanfona'
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
import Swiper from 'react-id-swiper'
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
    console.log('barrie', barrie)

    return (
      <div>
        <Nav tabs className={charts.tabTitle}>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => {
                this.toggle('1')
              }}
            >
              NATIONAL RESIDENTIAL STATISTICS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => {
                this.toggle('2')
              }}
            >
              VANCOUVER ISLAND
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => {
                this.toggle('3')
              }}
            >
              GREATER VANCOUVER
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent
          activeTab={this.state.activeTab}
          className={charts.tabContent}
        >
          <TabPane tabId="1">
            <Row>
              {barrie.map((item, i) => (
                <Col sm="3">
                  <Swiper>
                    <div>
                      <img key={i} src={item.node.childImageSharp.fluid.src} />
                    </div>
                  </Swiper>
                </Col>
              ))}
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <p>charts</p>
                {toronto.map((item, i) => (
                  <img key={i} src={item.node.childImageSharp.fluid.src} />
                ))}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <p>charts</p>
                {victoria.map((item, i) => (
                  <img key={i} src={item.node.childImageSharp.fluid.src} />
                ))}
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        <Swiper>
          <div>
            <img src="https://via.placeholder.com/468x60" />
            <img src="https://via.placeholder.com/468x60" />
          </div>
        </Swiper>
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
