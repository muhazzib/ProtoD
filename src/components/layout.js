import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'reactstrap'
import Img from 'gatsby-image'
import Container from './container'
import get from 'lodash/get'
import Wrapper from './wrapper/wrapper'
import SideBar from './Side-bar/side-bar'
import Header from './Header/header'
import Breadcrumb from '../components/Breadcrumb/breadcrumb'
import Footer from '../components/Footer/footer'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import footerStyle from './Footer/footer.module.css'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider, addLocaleData } from 'react-intl'
import 'intl'
import en from 'react-intl/locale-data/en'
import 'intl/locale-data/jsonp/en'
import fr from 'react-intl/locale-data/fr'
import 'intl/locale-data/jsonp/fr'
import SiteHeader from './Site-header/site-header'
import '../components/Content/content.css'
import { GlobalStyle } from '../utils/global'
import BoardTable from './BoardsTable/boardsTable'
import AB1BoardTable from './BoardsTable/AB1_boardTable'
import AB2BoardTable from './BoardsTable/AB2_boardTable'
import Col8BoardTable from './BoardsTable/8Col_boardTable'
import MTL1BoardTable from './BoardsTable/MTL1_boardTable'
import MTL3BoardTable from './BoardsTable/MTL3_boardTable'
import Col4BoardTable from './BoardsTable/4Col_boardTable'
import Col4TwoBoardTable from './BoardsTable/4Col_2_boardTable'
import FiveColBoardTable from './BoardsTable/5_boardTable'
import ChartY from './Chart/chx'
import BurgerIcon from '../components/Mobile-menu/burgerIcon'
import Popup from 'reactjs-popup'
import Menu from '../components/Mobile-menu/mobile-menu'
import '../components/Mobile-menu/mobile.menu.css'

// add concatenated locale data
addLocaleData([...en, ...fr])

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
    this.i18nMessages = require(`../data/messages/${this.langKey}`)
  }
  getYear() {
    return new Date().getFullYear()
  }
  render() {
    console.log('board props', this)
    const natl = get(this, 'props.data.ca.edges[0].node')
    const post = this.props.post
    const mls = this.props.mls
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
              {close => <Menu close={close} />}
            </Popup>
            <Breadcrumb />
            {this.props.location.pathname == '/en-US/' ? (
              <Modal
                isOpen={this.props.chartAProp}
                toggle={this.props.closeChartA}
              >
                <ModalHeader toggle={this.props.closeChartA}>
                  Chart A
                </ModalHeader>
                <ModalBody>
                  <img src={natl.chartA.fluid.src} />
                </ModalBody>
              </Modal>
            ) : null}
            {this.props.location.pathname == '/en-US/' ? (
              <Modal
                isOpen={this.props.chartBProp}
                toggle={this.props.closeChartB}
              >
                <ModalHeader toggle={this.props.closeChartB}>
                  Chart B
                </ModalHeader>
                <ModalBody>
                  <img src={natl.chartB.fluid.src} />
                </ModalBody>
              </Modal>
            ) : null}

            {this.children}

            {this.props.board ? (
              <div className="content-wrapper">
                <div className="row split">
                  <div className="col-md">
                    <div className="entry-header">
                      <h1
                        className="entry-title"
                        dangerouslySetInnerHTML={{
                          __html: post.title,
                        }}
                      />
                    </div>

                    <div className="entry-content">
                      <div className="entry-sub">
                        <h2
                          className="entry-headline"
                          dangerouslySetInnerHTML={{
                            __html: post.headline,
                          }}
                        />
                        <div>
                          {post.mainContent !== null && (
                            <div
                              className="content"
                              dangerouslySetInnerHTML={{
                                __html:
                                  post.mainContent.childContentfulRichText.html,
                              }}
                            />
                          )}
                          <div className="boardInfo">
                            {post.boardInfo !== null && (
                              <div>
                                <div
                                  className="content"
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      post.boardInfo.childMarkdownRemark.html,
                                  }}
                                />
                              </div>
                            )}

                            <Container>
                              <Row>
                                <Col xs="4">
                                  {post.boardPresidentPhoto !== null && (
                                    <Img
                                      className="boardPresPhoto"
                                      fixed={post.boardPresidentPhoto.fixed}
                                      tracedSVG
                                    />
                                  )}
                                  {post.boardPresidentName !== null && (
                                    <p>
                                      President <br />
                                      {post.boardPresidentName}
                                    </p>
                                  )}
                                </Col>
                              </Row>
                            </Container>
                          </div>

                          {/* Cutom table for rendering board's sheet */}

                          <div className="boardSheets">
                            {this.props.tableData.length > 0 ? (
                              <Col4BoardTable
                                tableData={this.props.tableData}
                                name={this.props.name1}
                                field1={this.props.field1}
                                field2={this.props.field2}
                                field3={this.props.field3}
                                field4={this.props.field4}
                              />
                            ) : null}

                            {this.props.tableData2.length > 0 ? (
                              <Col4TwoBoardTable
                                tableData={this.props.tableData2}
                                name={this.props.name2}
                                field2={this.props.field2}
                                field3={this.props.field3}
                                field4={this.props.field4}
                                field5={this.props.field5}
                              />
                            ) : null}

                            {this.props.chatData.length > 0 ? (
                              <Col8BoardTable
                                chatData={this.props.chatData}
                                name={this.props.name1}
                              />
                            ) : null}
                            {this.props.chatData2.length > 0 ? (
                              <Col8BoardTable
                                chatData={this.props.chatData2}
                                name={this.props.name2}
                              />
                            ) : null}
                            {this.props.abData.length > 0 ? (
                              <AB1BoardTable
                                abData={this.props.abData}
                                name={this.props.name1}
                                field1={this.props.field1}
                                field2={this.props.field2}
                                field3={this.props.field3}
                                field4={this.props.field4}
                              />
                            ) : null}
                            {this.props.abData2.length > 0 ? (
                              <AB1BoardTable
                                abData={this.props.abData2}
                                name={this.props.name2}
                                abfield1={this.props.abfield1}
                                field2={this.props.field2}
                                field3={this.props.field3}
                                field4={this.props.field4}
                              />
                            ) : null}
                            {this.props.mtlData.length > 0 ? (
                              <MTL1BoardTable
                                mtlData={this.props.mtlData}
                                name={this.props.name1}
                                field1={this.props.field1}
                                field2={this.props.field2}
                                field3={this.props.field3}
                                field4={this.props.field4}
                              />
                            ) : null}
                            {this.props.mtlData2.length > 0 ? (
                              <MTL1BoardTable
                                mtlData={this.props.mtlData2}
                                name={this.props.name2}
                                field1={this.props.field1}
                                field2={this.props.field2}
                                field3={this.props.field3}
                                field4={this.props.field4}
                              />
                            ) : null}
                            {this.props.mtlData3.length > 0 ? (
                              <MTL3BoardTable
                                mtlData={this.props.mtlData3}
                                name={this.props.name3}
                                field1={this.props.field1}
                                field2={this.props.field2}
                                field3={this.props.field3}
                                field4={this.props.field4}
                              />
                            ) : null}
                            {this.props.mtlData4.length > 0 ? (
                              <MTL3BoardTable
                                mtlData={this.props.mtlData4}
                                name={this.props.name4}
                                field1={this.props.field1}
                                field2={this.props.field2}
                                field3={this.props.field3}
                                field4={this.props.field4}
                              />
                            ) : null}
                            {/*        {this.props.tableData.length > 0 ? (
                              <FiveColBoardTable
                                tableData={this.props.tableData}
                                name={this.props.name1}
                                name2={this.props.name2}
                                field1={this.props.field1}
                                field2={this.props.field2}
                                field3={this.props.field3}
                                field4={this.props.field4}
                                field5={this.props.field5}
                              />
                            ) : null} */}
                            {/*            {this.props.tableData.length > 0 ? (
                              <FourColBoardTable
                                tableData={this.props.tableData}
                                name={this.props.name1}
                                field1={this.props.field1}
                                field2={this.props.field2}
                                field3={this.props.field3}
                                field4={this.props.field4}
                              />
                            ) : null}
                            {this.props.tableData2.length > 0 ? (
                              <FourCol4BoardTable
                                tableData={this.props.tableData2}
                                name={this.props.name2}
                                field2={this.props.field2}
                                field3={this.props.field3}
                                field4={this.props.field4}
                                field5={this.props.field5}
                              />
                            ) : null}

                            {this.props.tableData.length > 0 ? (
                              <BoardTable
                                tableData={this.props.tableData}
                                name={this.props.name}
                                field1={this.props.field1}
                                field2={this.props.field2}
                                field3={this.props.field3}
                                field4={this.props.field4}
                              />
                            ) : null}

                            {this.props.tableData.length > 0 ? (
                              <EightColBoardTable
                                tableData={this.props.tableData}
                                name={this.props.name}
                                field1={this.props.field1}
                                field2={this.props.field2}
                                field3={this.props.field3}
                                field4={this.props.field4}
                              />
                            ) : null} */}
                            <ChartY chartsData={this.props.chartsData} />
                            {/*      {this.props.tableData2.length > 0 ? (
                              <BoardTable
                                tableData={this.props.tableData2}
                                name={this.props.name2}
                              />
                            ) : null}

                            {this.props.tableData3.length > 0 ? (
                              <BoardTable
                                tableData={this.props.tableData3}
                                name={this.props.name3}
                              />
                            ) : null}

                            {this.props.tableData4.length > 0 ? (
                              <BoardTable
                                tableData={this.props.tableData4}
                                name={this.props.name4}
                              />
                            ) : null} */}
                          </div>
                          {/* {
                            !renderTable ? (
                            ) : null
                          } */}

                          {/* CUSTOM TABLE SHEETS END HERE */}

                          {/* <!--  ==========================================================  -->
        <!--  BOARD AND CREA DECLARATION HERE ==========================  -->
        <!--  ==========================================================  --> */}
                          <div className={footerStyle.boardCredit}>
                            <hr />
                            <p>
                              The information contained in this report has been
                              prepared by The Canadian Real Estate Association,
                              in co-operation with the {post.title}. The
                              information has been drawn from sources deemed to
                              be reliable, but the accuracy and completeness of
                              the information is not guaranteed. In providing
                              this information, neither The Canadian Real Estate
                              Association nor the {post.title}
                              assumes any responsibility or liability.
                              Copyright&nbsp;&copy;{this.getYear()}. The
                              Canadian Real Estate Association. All rights
                              reserved. Reproduction in whole or in part is
                              prohibited without written permission..
                            </p>
                          </div>

                          {/* <!--  ==========================================================  -->
        <!-- END EDITING PAGE CONTENT HERE =============================  -->
        <!--  ==========================================================  --></div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm- side-content">
                    <div className="boardInformation sidebar-wrapper">
                      {post.boardSubPages !== null && (
                        <ul>
                          <h5 className="text_upper">Board Information</h5>
                          {post.boardSubPages.map((item, i) => (
                            <li key={i}>
                              <Link to={`/board/${item.slug}`}>
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="sidebar-wrapper">
                        {post.mlsStatistics !== null && (
                          <ul>
                            <h5 className="text_upper">MLS Statistics</h5>
                            {post.mlsStatistics.map((item, i) => (
                              <li key={i}>
                                <Link to={`/mls/${item.slug}`}>
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <SideBar pathname="en-US" />
                    </div>
                  </div>
                </div>
              </div>
            ) : // <BoardTable tableData={this.props.tableData} name={this.props.name} />
            null}

            <Footer pathname={url} />
          </Wrapper>
        </Container>
      </IntlProvider>
    )
  }
}

export default Template
