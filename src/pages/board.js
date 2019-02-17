import React from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

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
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
    }
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }))
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const boards = get(this, 'props.data.allContentfulBoards.edges')

    return (
      <Layout data={this.props.data} location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem>Some Action</DropdownItem>
              <DropdownItem disabled>Action (disabled)</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Foo Action</DropdownItem>
              <DropdownItem>Bar Action</DropdownItem>
              <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>Blog page</div>
          <div className="wrapper">
            <h2 className="section-headline">Board</h2>
            {/* <ul className="article-list">
              {boards.map(({ node, i }) => {
                return (
                  <li key={i}>
                    <BoardPreview board={node} />
                  </li>
                )
              })}
            </ul> */}
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
