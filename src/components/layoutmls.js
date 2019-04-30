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
import SiteHeader from './Site-header/site-header-board'
import '../components/Content/content.css'
import { GlobalStyle } from '../utils/global'
import BoardTable from './BoardsTable/boardsTable'
import Col4BoardTable from './BoardsTable/4Col_boardTable'
import Col6BoardTable from './BoardsTable/6Col_boardTable'
import Col7BoardTable from './BoardsTable/7Col_boardTable'
import ChartY from './Chart/chx'

const pStyle = {
  fontSize: '15px',
  textAlign: 'center',
  display: 'inlineTable',
}
const customRow = {
  background: '#edf0fe',
}

class MTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.children = this.props.children
  }
  getYear() {
    return new Date().getFullYear()
  }

  render() {
    console.log('passing props', this.props)
    const mls = this.props.mls
    console.log('mls layout', mls)
    const charts = this.props.chartsData
    const sheets = this.props.tableData
    console.log('sheets componentx', charts)
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
          {/*   <ChartY charts={this.props.data} /> */}
          {/* <ChartY chartsData={charts} /> */}

          {this.children}

          {this.props.board ? (
            <div className="content-wrapper">
              <div className="row split">
                <div className="col-md">
                  <div className="entry-header">
                    {/*  <ChartY chartsData={charts} /> */}
                    <div>
                      <div className="container">
                        <div className="row" style={customRow}>
                          <div className=".col-lg-">
                            {/*    {charts.map((item, i) => (
                          <img
                            style={imgStyle}
                            key={i}
                            src={item.node.childImageSharp.fluid.src}
                          />
                        ))} */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*   <RA2BoardTable
                      tableData={this.props.tableData2}
                      name={this.props.name2}
                    />
                    <RABoardTable
                      tableData={this.props.tableData}
                      name={this.props.name1}
                    /> */}
                    <h1
                      className="entry-title"
                      dangerouslySetInnerHTML={{
                        __html: mls.title,
                      }}
                    />
                  </div>

                  <div className="entry-content">
                    <div className="entry-sub">
                      <h2
                        className="entry-headline"
                        dangerouslySetInnerHTML={{
                          __html: mls.headline,
                        }}
                      />
                      <div className="content">
                        {/* <!--  ==========================================================  -->
        <!-- START--- MAIN CONTENT 1  ==========================  -->
        <!--  ==========================================================  --> */}
                        {mls.mainContent !== null && (
                          <div
                            className="content"
                            dangerouslySetInnerHTML={{
                              __html:
                                mls.mainContent.childContentfulRichText.html,
                            }}
                          />
                        )}
                        {/* <!--  ==========================================================  -->
        <!-- END--- MAIN CONTENT 1  ==========================  -->
        <!--  ==========================================================  --> */}

                        {/* <!--  ==========================================================  -->
        <!-- START--- TABLES 1  ==========================  -->
        <!--  ==========================================================  --> */}
                        {this.props.muskRa.length > 0 ||
                        this.props.barrRa.length > 0 ||
                        this.props.chatRa.length > 0 ||
                        this.props.edmoRA.length > 0 ||
                        this.props.trebRA.length > 0 ? (
                          <Col4BoardTable
                            name={this.props.name1}
                            muskRa={this.props.muskRa}
                            barrRa={this.props.barrRa}
                            chatRa={this.props.chatRa}
                            edmoRA={this.props.edmoRA}
                            trebRA={this.props.trebRA}
                            field={this.props.field1}
                          />
                        ) : null}
                        {this.props.muskRa2.length > 0 ||
                        this.props.edmoRA2.length > 0 ||
                        this.props.trebRA2.length > 0 ? (
                          <Col4BoardTable
                            name={this.props.name2}
                            muskRa={this.props.muskRa2}
                            edmoRA={this.props.edmoRA2}
                            trebRA={this.props.trebRA2}
                            field={this.props.field1}
                          />
                        ) : null}
                        {this.props.barrSPR.length > 0 ||
                        this.props.chatSPR.length > 0 ||
                        this.props.muskSPR.length > 0 ||
                        this.props.edmoSPR.length > 0 ||
                        this.props.trebSPR.length > 0 ? (
                          <Col6BoardTable
                            name={this.props.name1}
                            barrSPR={this.props.barrSPR}
                            chatSPR={this.props.chatSPR}
                            muskSPR={this.props.muskSPR}
                            edmoSPR={this.props.edmoSPR}
                            trebSPR={this.props.trebSPR}
                          />
                        ) : null}
                        {this.props.chartsData.length > 0 ? (
                          <ChartY chartsData={this.props.chartsData} />
                        ) : null}
                        {/* <!--  ==========================================================  -->
        <!-- END--- TABLES 1  ==========================  -->
        <!--  ==========================================================  --> */}

                        {/* <!--  ==========================================================  -->
        <!-- START--- MAIN CONTENT 2  ==========================  -->
        <!--  ==========================================================  --> */}
                        {mls.mainContent2 !== null && (
                          <div
                            className="content"
                            dangerouslySetInnerHTML={{
                              __html:
                                mls.mainContent2.childContentfulRichText.html,
                            }}
                          />
                        )}
                        {/* <!--  ==========================================================  -->
        <!-- END--- MAIN CONTENT 2  ==========================  -->
        <!--  ==========================================================  --> */}

                        {/* <!--  ==========================================================  -->
        <!-- START--- TABLES 2  ==========================  -->
        <!--  ==========================================================  --> */}
                        {this.props.muskSPR1.length > 0 ||
                        this.props.edmoSPR2.length > 0 ||
                        this.props.trebSPR2.length > 0 ? (
                          <Col6BoardTable
                            name={this.props.name1}
                            muskSPR={this.props.muskSPR1}
                            edmoSPR={this.props.edmoSPR2}
                            trebSPR={this.props.trebSPR2}
                          />
                        ) : null}
                        {this.props.muskRa3.length > 0 ? (
                          <Col7BoardTable
                            muskRa={this.props.muskRa3}
                            name={this.props.name3}
                            field={this.props.field1}
                          />
                        ) : null}
                        {this.props.muskRa4.length > 0 ? (
                          <Col7BoardTable
                            muskRa={this.props.muskRa4}
                            name={this.props.name4}
                            field={this.props.field}
                          />
                        ) : null}
                        {/* <!--  ==========================================================  -->
        <!--  END--- TABLES 2 ==========================  -->
        <!--  ==========================================================  --> */}

                        {/* <!--  ==========================================================  -->
        <!-- START--- MAIN CONTENT 3  ==========================  -->
        <!--  ==========================================================  --> */}
                        {mls.mainContent3 !== null && (
                          <div
                            className="content"
                            dangerouslySetInnerHTML={{
                              __html:
                                mls.mainContent3.childContentfulRichText.html,
                            }}
                          />
                        )}
                        {/* <!--  ==========================================================  -->
        <!--  END--- MAIN CONTENT 3 ==========================  -->
        <!--  ==========================================================  --> */}

                        {/* <!--  ==========================================================  -->
        <!-- START---  TABLES 3 ==========================  -->
        <!--  ==========================================================  --> */}

                        {this.props.muskSPR1.length > 0 ||
                        this.props.edmoSPR3.length > 0 ||
                        this.props.trebSPR3.length > 0 ? (
                          <Col6BoardTable
                            name={this.props.name1}
                            muskSPR={this.props.muskSPR1}
                            edmoSPR={this.props.edmoSPR3}
                            trebSPR={this.props.trebSPR3}
                          />
                        ) : null}

                        {/* <!--  ==========================================================  -->
        <!-- START--- MAIN CONTENT 4  ==========================  -->
        <!--  ==========================================================  --> */}
                        {mls.mainContent4 !== null && (
                          <div
                            className="content"
                            dangerouslySetInnerHTML={{
                              __html:
                                mls.mainContent4.childContentfulRichText.html,
                            }}
                          />
                        )}
                        {/* <!--  ==========================================================  -->
        <!-- END--- MAIN CONTENT 4  ==========================  -->
        <!--  ==========================================================  --> */}

                        {/* <!--  ==========================================================  -->
        <!-- START--- TABLES 4  ==========================  -->
        <!--  ==========================================================  --> */}
                        {this.props.trebSPR4.length > 0 ? (
                          <Col6BoardTable
                            name={this.props.name1}
                            trebSPR={this.props.trebSPR4}
                          />
                        ) : null}
                        {/* <!--  ==========================================================  -->
        <!-- END--- TABLES 4  ==========================  -->
        <!--  ==========================================================  --> */}

                        {/* <!--  ==========================================================  -->
        <!--  BOARD AND CREA DECLARATION HERE ==========================  -->
        <!--  ==========================================================  --> */}
                        <div className={footerStyle.boardCredit}>
                          <hr />
                          <p>
                            The information contained in this report has been
                            prepared by The Canadian Real Estate Association, in
                            co-operation with the {mls.boardName}. The
                            information has been drawn from sources deemed to be
                            reliable, but the accuracy and completeness of the
                            information is not guaranteed. In providing this
                            information, neither The Canadian Real Estate
                            Association nor the {mls.boardName}
                            assumes any responsibility or liability.
                            Copyright&nbsp;&copy;{this.getYear()}. The Canadian
                            Real Estate Association. All rights reserved.
                            Reproduction in whole or in part is prohibited
                            without written permission..
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
                    {mls.boardSubPagesz !== null && (
                      <ul>
                        <h5 className="text_upper">Board Information</h5>
                        {mls.boardSubPagesz.map((item, i) => (
                          <li key={i}>
                            <Link to={`/board/${item.slug}`}>
                              {item.boardPageType}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="sidebar-wrapper">
                      {mls.mlsSubRefernces !== null && (
                        <ul>
                          <h5 className="text_upper">MLS Statistics</h5>
                          {mls.mlsSubRefernces.map((item, i) => (
                            <li key={i}>
                              <Link to={`/mls/${item.slug}`}>
                                {item.MlsboardPageName}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {/* mls ends */}
                    <SideBar />
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <Footer />
        </Wrapper>
      </Container>
    )
  }
}

export default MTemplate
