import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from '../container'
import get from 'lodash/get'
import Wrapper from '../wrapper/wrapper'
import Navigation from '../navigation'
import Header from '../Header/header'
import Breadcrumb from '../Breadcrumb/breadcrumb'
import Footer from '../Footer/footer'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider, addLocaleData } from 'react-intl'
import 'intl'
import en from 'react-intl/locale-data/en'
import 'intl/locale-data/jsonp/en'
import fr from 'react-intl/locale-data/fr'
import 'intl/locale-data/jsonp/fr'
import SiteHeader from '../Site-header/site-header'
import '../Content/content.css'
import { GlobalStyle } from '../../utils/global'
import SidebarFr from '../Side-bar/side-bar.fr'
import BurgerIcon from '../Mobile-menu/burgerIcon'
import Popup from 'reactjs-popup'
import MenuFR from '../Mobile-menu/mobile-menu-fr'
import '../Mobile-menu/mobile.menu.css'

// add concatenated locale data
addLocaleData([...en, ...fr])

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  /* marginTop: '40px', */
}
const contentStyle = {
  background: 'rgba(255,255,255,0)',
  width: '80%',
  border: 'none',
  background: 'rgba(219,47,37,0.8)',
}
class Template extends React.Component {
  constructor(props) {
    super(props)
    this.children = this.props.children
    const data = this.props.data
    console.log('data-lang', data)
    const location = this.props.location
    const url = location.pathname
    const { langs, defaultLangKey } = data.site.siteMetadata.languages
    this.langKey = getCurrentLangKey(langs, defaultLangKey, url)
    this.homeLink = `/${this.langKey}/`
    this.langsMenu = getLangs(
      langs,
      this.langKey,
      getUrlForLang(this.homeLink, url)
    )

    // get the appropriate message file based on langKey
    // at the moment this assumes that langKey will provide us
    // with the appropriate language code
    this.i18nMessages = require(`../../data/messages/${this.langKey}`)
  }

  render() {
    const natl = get(this, 'props.data.fr.edges[0].node')
    const location = this.props.location
    const url = location.pathname
    /*     const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    } */

    return (
      <IntlProvider locale={this.langKey} messages={this.i18nMessages}>
        <Container>
          <GlobalStyle />
          {/*  MODAL CODE STARTS HERE */}
          {/*  <Modal isOpen={this.props.chartAProp} toggle={this.props.closeChartA}>
            <ModalHeader toggle={this.props.closeChartA}>Chart A</ModalHeader>
            <ModalBody>
              <img src={natl.chartA.fluid.src} />
            </ModalBody>
          </Modal>

          <Modal isOpen={this.props.chartBProp} toggle={this.props.closeChartB}>
            <ModalHeader toggle={this.props.closeChartB}>Chart B</ModalHeader>
            <ModalBody>
              <img src={natl.chartB.fluid.src} />
            </ModalBody>
          </Modal> */}
          {/*   MODAL CODE ENDS HERE */}

          <Header langs={this.langsMenu} pathname={url} />
          <SiteHeader pathname={url} />
          <Wrapper>
            <Popup
              modal
              overlayStyle={{ background: 'rgba(219,47,37,0.98)' }}
              contentStyle={contentStyle}
              closeOnDocumentClick={false}
              trigger={open => <BurgerIcon open={open} />}
            >
              {close => <MenuFR close={close} />}
            </Popup>
            <Breadcrumb />
            <div className="content-wrapper">
              <div className="row split">
                <div className="col-md">
                  <div className="entry-header" />
                  <div className="entry-content">
                    <div className="entry-sub">
                      <div>
                        {this.children}
                        <div className="chart_container">
                          {/* Char A Start */}
                          <div className="imageBox" />
                        </div>
                        {/* Char A End */}

                        <div className="chart_container">
                          <div className="imageBox" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm- side-content">
                  <div className="chart">
                    <SidebarFr pathname="fr-CA" />
                  </div>
                </div>
              </div>
            </div>

            <Footer pathname={url} />
          </Wrapper>
        </Container>
      </IntlProvider>
    )
  }
}

export default Template
