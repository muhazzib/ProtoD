import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import get from 'lodash/get'
import * as PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'
import BoardPreview from '../components/board-preview'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const boards = get(this, 'props.data.allContentfulBoards.edges')
    console.log(boards)

    return (
      <Layout data={this.props.data} location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>Blog page</div>
          <div className="wrapper">
            <h2 className="section-headline">Board</h2>
            <ul className="article-list">
              {boards.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <BoardPreview board={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

BlogIndex.propTypes = propTypes

export default BlogIndex

export const pageQuery = graphql`
  query BoardIndexQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    allContentfulBoards {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
