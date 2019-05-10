import React from 'react'
import PropTypes from 'prop-types'
import contentStyles from './content.css'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'

class Content extends React.Component {
  render() {
    return <div className={ContentSyles.contentWrapper} />
  }
}

export default Content
