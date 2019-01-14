import React from 'react'
import PropTypes from 'prop-types'
import contentStyles from './content.css'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'

class Content extends React.Component {
  state = {}

  render() {
    const data = this.props.content.allContentfulNational.edges[0].node
    console.log('data-wa', data.title)

    // const itemList = data.map(item => {
    //     console.log('test',item.node.title)
    //     return (
    //         <div>
    //             <p>{item.node.title}</p>
    //         </div>
    //     )

    // })
    return (
      <div className={ContentSyles.contentWrapper}>
        {/* <div className="row split">
          <div className="col-md">
            <div className="entry-header">
              <h1 className="entry-title">{data.title} </h1>
            </div>

            <div className="entry-content">
              <div className="entry-sub">
                <h2>{data.headline}</h2>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: data.mainContent.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-sm- side-content">
            <div className="chart">Chart</div>
            Sidebar
          </div>
        </div> */}
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query ContentQuery {
        allContentfulNational {
          edges {
            node {
              title
              headline
              slug
              mainContent {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        <Content content={data} />
      </header>
    )}
  />
)
