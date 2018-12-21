import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import './global-styles.css'
import './Content/content.css'
import Container from './container'
import Wrapper from './wrapper'
import Navigation from './navigation'
import Header from './Header/header'
import Breadcrumb from '../components/Breadcrumb/breadcrumb'

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
        <Wrapper>
          <Breadcrumb />
          {children}
        </Wrapper>
      </Container>
    )
  }
}

export default Template
