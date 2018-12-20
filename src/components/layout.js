import React from 'react'
import { Link } from 'gatsby'
import './global-styles.css'
import Container from './container'
import Navigation from './navigation'
import Header from './Header/header'
import SiteHeader from './Site-header/site-header'
import Footer from './Footer/footer'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Header />
        <SiteHeader />
        {children}
        {/* <Footer /> */}
      </Container>
    )
  }
}

export default Template
