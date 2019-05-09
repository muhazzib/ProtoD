import React from 'react'
import Layout from '../components/Layouts/layout.js'
import * as PropTypes from 'prop-types'
import { graphql } from 'gatsby'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class HomeTemplate extends React.Component {
  render() {
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <div>
          <h1>fake template</h1>
        </div>
      </Layout>
    )
  }
}

HomeTemplate.propTypes = propTypes

export default HomeTemplate

export const pageQuery = graphql`
  query BingoQuery {
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
