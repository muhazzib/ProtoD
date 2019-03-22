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

const imgStyle = {
  width: '25%',
  display: 'inline-flex',
  padding: '20px',
}

const customRow = {
  background: '#edf0fe',
}

export default class ChartY extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextProp) {
    console.log(nextProp, 'next')
  }

  render() {
    /* const data = this.props.acc.allFile.edges */
    const data = this.props.charts
    console.log('pioc', data)

    return (
      <div>
        <div className="container">
          <div className="row" style={customRow}>
            <div className=".col-lg-">
              {data.map((item, i) => (
                <img
                  style={imgStyle}
                  key={i}
                  src={item.node.childImageSharp.fluid.src}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
