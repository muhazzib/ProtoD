import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'reactstrap'
import Img from 'gatsby-image'
import Container from './container'
import get from 'lodash/get'
import Wrapper from './wrapper/wrapper'
import Navigation from './navigation'
import SideBar from './Side-bar/side-bar'
import Header from './Header/noLangHeader'
import Breadcrumb from '../components/Breadcrumb/breadcrumb'
import Footer from '../components/Footer/footer'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import footerStyle from './Footer/footer.module.css'
import Helmet from 'react-helmet'
import SiteHeader from './Site-header/site-header'
import './global-styles.css'
import '../components/Content/content.css'
import { GlobalStyle } from '../utils/global'
import BoardTable from './BoardsTable/boardsTable'
import RABoardTable from './BoardsTable/RA_boardsTable'
import ChartY from './Chart/chx'

class MTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.children = this.props.children
    const url = location.pathname
  }

  render() {
    console.log('passing props', this.props)
    const mls = this.props.mls
    console.log('mls layout', mls)
    const charts = this.props.chartsData
    const sheets = this.props.tableData
    console.log('charts componentx', charts)
    console.log('sheets- componentx', sheets)
    /*    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    } */

    return (
      <Container>
        <GlobalStyle />
        <Header />
        <SiteHeader />
        <Wrapper>
          <Breadcrumb />

          {/*  <BoardTable
            tableData={this.props.tableData}
            name2={this.props.name2}
          /> */}
          <RABoardTable
            tableData={this.props.tableData}
            name2={this.props.name2}
          />

          {/* <ChartY chartsData={charts} /> */}
          {this.children}

          <Footer />
        </Wrapper>
      </Container>
    )
  }
}

export default MTemplate
