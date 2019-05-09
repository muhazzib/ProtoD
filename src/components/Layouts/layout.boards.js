import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'reactstrap'
import Img from 'gatsby-image'
import Container from '../container'
import get from 'lodash/get'
import Wrapper from '../wrapper/wrapper'
import SideBar from '../Side-bar/side-bar'
import Header from '../Header/noLangHeader'
import Breadcrumb from '../Breadcrumb/breadcrumb'
import Footer from '../Footer/footer'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import footerStyle from '../Footer/footer.module.css'
import SiteHeader from '../Site-header/site-header-board'
import '../Content/content.css'
import { GlobalStyle } from '../../utils/global'

import BoardTable from '../BoardsTable/boardsTable'
import Col4BoardTable from '../BoardsTable/4Col_boardTable'
import Col7BoardTable from '../BoardsTable/7Col_boardTable'
import Col8BoardTable from '../BoardsTable/8Col_boardTable'
import TCol8BoardTable from '../BoardsTable/T8Col_boardTable'
import ChartY from '../Chart/chx'
import BurgerIcon from '../Mobile-menu/burgerIcon'
import Popup from 'reactjs-popup'
import Menu from '../Mobile-menu/mobile-menu'
import '../Mobile-menu/mobile.menu.css'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

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
  }
  getYear() {
    return new Date().getFullYear()
  }

  render() {
    console.log('board props', this)
    const natl = get(this, 'props.data.ca.edges[0].node')
    const post = this.props.post
    const location = this.props.location
    const url = location.pathname

    /*     const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    } */

    /* 
    const IMAGES = post.charts.map((item, id) => {
      console.log('images', item)
      return {
        image: item.fixed.src,
      }
    }) */

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
                      {/* <!--  ==========================================================  -->
        <!--  START ---- PAGE TITLE, PAGE HEADLINE, PAGE CONTENT ==========================  -->
        <!--  ==========================================================  --> */}
                      <h1
                        className="entry-title"
                        dangerouslySetInnerHTML={{
                          __html: post.title,
                        }}
                      />
                    </div>

                    <div className="entry-content">
                      <div className="entry-sub">
                        {post.headline !== null && (
                          <h2
                            className="entry-headline"
                            dangerouslySetInnerHTML={{
                              __html: post.headline,
                            }}
                          />
                        )}
                        {post.sharedContent !== null && (
                          <h2
                            className="entry-headline"
                            dangerouslySetInnerHTML={{
                              __html: post.sharedContent.sharedHeadline,
                            }}
                          />
                        )}
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
                          {post.sharedContent !== null && (
                            <div
                              className="content"
                              dangerouslySetInnerHTML={{
                                __html:
                                  post.sharedContent.sharedContent
                                    .childContentfulRichText.html,
                              }}
                            />
                          )}
                          {/* <!--  ==========================================================  -->
        <!--  START ---- PAGE TITLE, PAGE HEADLINE, PAGE CONTENT ==========================  -->
        <!--  ==========================================================  --> */}
                          {post.charts !== null && (
                            <div className="charts">
                              <Row>
                                {post.charts.map((item, id) => (
                                  <Col sm="3" key={id}>
                                    <ReactFancyBox
                                      thumbnail={item.fixed.src}
                                      image={item.fluid.src}
                                    />
                                    {/* <Gallery images={IMAGES} /> */}
                                  </Col>
                                ))}
                              </Row>
                            </div>
                          )}
                          {/* <!--  ==========================================================  -->
        <!--  START--- BOARDS HOMEPAGE SHEETS ==========================  -->
        <!--  ==========================================================  --> */}
                          <div className="boardSheets">
                            {this.props.tableData.length > 0 ||
                            this.props.mtlData.length > 0 ||
                            this.props.areaData.length > 0 ||
                            this.props.muskData.length > 0 ? (
                              <Col4BoardTable
                                tableData={this.props.tableData}
                                areaData={this.props.areaData}
                                mtlData={this.props.mtlData}
                                name={this.props.name1}
                                muskData={this.props.muskData}
                                muskField={this.props.muskField1}
                              />
                            ) : null}

                            {this.props.tableData2.length > 0 ||
                            this.props.areaData2.length > 0 ||
                            this.props.muskData2.length > 0 ? (
                              <Col4BoardTable
                                tableData={this.props.tableData2}
                                mtlData={this.props.mtlData2}
                                areaData={this.props.areaData2}
                                muskData={this.props.muskData2}
                                name={this.props.name2}
                                muskField={this.props.muskField2}
                              />
                            ) : null}

                            {this.props.muskData3.length > 0 ? (
                              <Col7BoardTable
                                muskData={this.props.muskData3}
                                name={this.props.name3}
                                muskField={this.props.muskField2}
                              />
                            ) : null}

                            {this.props.muskData4.length > 0 ? (
                              <Col7BoardTable
                                muskData={this.props.muskData4}
                                name={this.props.name4}
                                muskField={this.props.muskField2}
                              />
                            ) : null}

                            {this.props.tableData.length > 0 ||
                            this.props.mtlData2.length > 0 ||
                            this.props.mtlData2.length > 0 ? (
                              <Col8BoardTable
                                tableData={this.props.tableData2}
                                mtlData={this.props.mtlData2}
                                name={this.props.name1}
                                name={this.props.name3}
                              />
                            ) : null}

                            {this.props.chatData.length > 0 ? (
                              <TCol8BoardTable
                                chatData={this.props.chatData}
                                name={this.props.name1}
                              />
                            ) : null}

                            {this.props.chatData2.length > 0 ? (
                              <TCol8BoardTable
                                chatData={this.props.chatData2}
                                name={this.props.name2}
                              />
                            ) : null}
                          </div>
                          {/* <!--  ==========================================================  -->
        <!--  END--- BOARDS HOMEPAGE SHEETS ==========================  -->
        <!--  ==========================================================  --> */}

                          {/* <!--  ==========================================================  -->
        <!--  START--- BOARD INFORMATION ==========================  -->
        <!--  ==========================================================  --> */}
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
                          {/* <!--  ==========================================================  -->
        <!--  END--- BOARDS HOMEPAGE SHEETS ==========================  -->
        <!--  ==========================================================  --> */}

                          {/* <!--  ==========================================================  -->
        <!-- START---  BOARD AND CREA DECLARATION HERE ==========================  -->
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
        <!-- END--- EDITING PAGE CONTENT HERE =============================  -->
        <!--  ==========================================================  --></div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!--  ==========================================================  -->
        <!--  START--- DYNAMIC SIDEBAR ==========================  -->
        <!--  ==========================================================  --> */}
                  <div className="col-sm- side-content">
                    <div className="boardInformation sidebar-wrapper">
                      {post.boardSubPages !== null && (
                        <ul>
                          <h5 className="text_upper">Board Information</h5>
                          {post.boardSubPages.map((item, i) => (
                            <li key={i}>
                              <Link to={`/board/${item.slug}`}>
                                {item.boardPageType}
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
                                  {item.MlsboardPageName}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <SideBar pathname="en-US" />
                    </div>
                  </div>
                  {/* <!--  ==========================================================  -->
        <!--  END--- DYNAMIC SIDEBAR ==========================  -->
        <!--  ==========================================================  --> */}
                </div>
              </div>
            ) : null}

            <Footer pathname={url} />
          </Wrapper>
        </Container>
      </IntlProvider>
    )
  }
}

export default Template
