import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Accordion, AccordionItem } from 'react-sanfona'

import './chart.css'
import './chart-accordion.css'

const Chart = ({ siteTitle }) => (
  <Accordion>
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
  </Accordion>
)
class AccChart extends React.Component {}

export default () => (
  <StaticQuery
    query={graphql`
      query AccQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header>
        {/* <h1>{data.site.siteMetadata.title}</h1> */}
        <AccChart acc={data} />
      </header>
    )}
  />
)
