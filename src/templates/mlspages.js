import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import * as PropTypes from 'prop-types'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layoutmls.js'
import Link from 'gatsby-link'
import SideBar from '../components/Side-bar/side-bar'
import footerStyle from '../components/Footer/footer.module.css'
import { GlobalStyle } from '../utils/global'
import BoardTable from '../components/BoardsTable/boardsTable'
import RABoardTable from '../components/BoardsTable/RA_boardsTable'
import ChartY from '../components/Chart/chx'

const pStyle = {
  fontSize: '15px',
  textAlign: 'center',
  display: 'inlineTable',
}

const propTypes = {
  data: PropTypes.object.isRequired,
}

class MlsTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      data2: [],
      data3: [],
      data4: [],
      name1: '',
      name2: '',
      name3: '',
      name4: '',
      chartsHome: [],
      chartsResAc: [],
      chartsSPR: [],
      chartsSPR2: [],
      chartsSPR3: [],
      chartsSPR4: [],
      chartsMrktCond: [],
      chartsMednPrice: [],
    }
  }

  getYear() {
    return new Date().getFullYear()
  }
  componentDidMount() {
    const slug = this.props.pageContext.slug
    console.log('slugb', slug)
    if (slug == 'barrie-residential-activity') {
      this.setState({
        // data: this.props.data.allBarrieCsv.edges,
        // name1: 'Barrie Home'
        chartsSPR: this.props.data.barrieChart.edges,
        data: this.props.data.alberta.edges,
        data2: this.props.data.BarrieRA.edges,
        name2: 'Summary – Sales by Housing Type',
      })
    } else if (slug == 'montreal') {
      this.setState({
        data: this.props.data.allMontrealCsv.edges,
        name1: 'Montreal Home',
      })
    } else if (slug == 'alberta-real-estate-association') {
      this.setState({
        data: this.props.data.allAlbertaCsv.edges,
        data2: this.props.data.allAlbertahome2Csv.edges,
        name1: 'Alberta Home Sheet 1',
        name2: 'Alberta Home Sheet 2',
      })
    } else if (slug == 'alberta-residential-activity') {
      this.setState({
        data: this.props.data.alberta.edges,
        name1: 'Alberta Residential Sheet 1',
      })
    } else if (slug == 'realtors-r-association-of-edmonton') {
      this.setState({
        data: this.props.data.alberta.edges,
        data2: this.props.data.allSalesbyprice2Csv.edges,
        name1: 'eddy Residential Sheet 1',
      })
    } else if (slug == 'victoria-residential-activity') {
      this.setState({
        charts: this.props.data.torontoChart.edges,
        data: this.props.data.alberta.edges,
      })
    } else if (slug == 'victoria-sales') {
      this.setState({
        data: this.props.data.allSalesbyprice1Csv.edges,
        data2: this.props.data.allSalesbyprice2Csv.edges,
        name1: 'vic Residential Sheet 1',
        name2: 'vic Residential Sheet 2',
        charts: this.props.charts.victoriaChart.edges,
      })
    } else if (slug == 'barrie-sales-by-price-range') {
      this.setState({
        data: this.props.data.allSalesbyprice1Csv.edges,
        data2: this.props.data.allSalesbyprice2Csv.edges,
        name1: 'Sales by price sheet 1',
        name2: 'Sales by price sheet 2',
      })
    } else if (slug == 'toronto') {
      // No table at home page
      // this.setState({
      //   data: this.props.data.allSalesbyprice1Csv.edges,
      //   data2: this.props.data.allSalesbyprice2Csv.edges,
      //   name1: 'Sales by price sheet 1',
      //   name2: 'Sales by price sheet 2'
      // })
    } else if (slug == 'toronto-residential-activity') {
      // No table at home page
      this.setState({
        data: this.props.data.allTorontoresidentialactivity1Csv.edges,
        data2: this.props.data.allTorontoresidentialactivity2Csv.edges,
        name1: 'Toronto Residential sheet 1',
        name2: 'Toronto Residential sheet 2',
        charts: this.props.data.torontoChart.edges,
      })
    } else if (slug == 'toronto-sales-by-category') {
      // No table at home page
      this.setState({
        data: this.props.data.allTorontosalesbypricerange1Csv.edges,
        data2: this.props.data.allTorontosalesbypricerange2Csv.edges,
        data3: this.props.data.allTorontosalesbypricerange3Csv.edges,
        data4: this.props.data.allTorontosalesbypricerange4Csv.edges,
        name1: 'Toronto Sales By Price Range sheet 1',
        name2: 'Toronto Sales By Price Range sheet 2',
        name3: 'Toronto Sales By Price Range sheet 3',
        name4: 'Toronto Sales By Price Range sheet 4',
      })
    } else {
      this.setState({
        data: [],
        data1: [],
        data2: [],
        data3: [],
        charts: [],
        chartsHome: [],
        chartsResAc: [],
        chartsSPR: [],
        chartsSPR2: [],
        chartsSPR3: [],
        chartsSPR4: [],
        chartsMrktCond: [],
        chartsMednPrice: [],
      })
    }
  }

  render() {
    const mls = get(this.props, 'data.contentfulMls')
    console.log('xxx', mls)

    const {
      data,
      data2,
      data3,
      data4,
      name1,
      name2,
      name3,
      name4,
      charts,
      chartsHome,
      chartsResAc,
      chartsSPR,
      chartsSPR2,
      chartsSPR3,
      chartsSPR4,
      chartsMrktCond,
      chartsMednPrice,
    } = this.state

    return (
      <Layout
        board={true}
        data={this.props.data}
        chartsData={charts}
        mls={mls}
        tableData={data}
        tableData2={data2}
        tableData3={data3}
        tableData4={data4}
        name1={name1}
        name2={name2}
        name3={name3}
        name4={name4}
        chartsHome={chartsHome}
        chartsResAc={chartsResAc}
        chartsSPR={chartsSPR}
        chartsSPR2={chartsSPR2}
        chartsSPR3={chartsSPR3}
        chartsSPR4={chartsSPR4}
        chartsMrktCond={chartsMrktCond}
        chartsMednPrice={chartsMednPrice}
      >
        <GlobalStyle />
        <div className="content-wrapper">
          <div className="row split">
            <div className="col-md">
              <div className="entry-header">
                <h1
                  className="entry-title"
                  dangerouslySetInnerHTML={{
                    __html: mls.title,
                  }}
                />
              </div>

              <div className="entry-content">
                <div className="entry-sub">
                  {/*    <h2
                          className="entry-headline"
                          dangerouslySetInnerHTML={{
                            __html: post.headline,
                          }}
                        /> */}
                  <div className="content">
                    {/* CONTENT ONE */}
                    {mls.mainContent !== null && (
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{
                          __html: mls.mainContent.childContentfulRichText.html,
                        }}
                      />
                    )}

                    {/*  <BoardTable
                      tableData={this.props.tableData}
                      name={this.props.name1}
                    /> */}

                    {/* CONTENT TWO */}
                    {mls.mainContent2 !== null && (
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{
                          __html: mls.mainContent2.childContentfulRichText.html,
                        }}
                      />
                    )}

                    {/* CONTENT THREE */}
                    {mls.mainContent3 !== null && (
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{
                          __html: mls.mainContent3.childContentfulRichText.html,
                        }}
                      />
                    )}

                    {/* CONTENT FOUR */}
                    {mls.mainContent4 !== null && (
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{
                          __html: mls.mainContent4.childContentfulRichText.html,
                        }}
                      />
                    )}

                    {/* Cutom table for rendering board's sheet */}

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
                        prepared by The Canadian Real Estate Association, in
                        co-operation with the {mls.boardName}. The information
                        has been drawn from sources deemed to be reliable, but
                        the accuracy and completeness of the information is not
                        guaranteed. In providing this information, neither The
                        Canadian Real Estate Association nor the {mls.boardName}
                        assumes any responsibility or liability.
                        Copyright&nbsp;&copy;{this.getYear()}. The Canadian Real
                        Estate Association. All rights reserved. Reproduction in
                        whole or in part is prohibited without written
                        permission..
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
                {/*   {mls.boardSubPagesz !== null && (
                  <ul>
                    <h5 className="text_upper">Board Information</h5>
                    {mls.boardSubPagesz.map((item, i) => (
                      <li key={i}>
                        <Link to={`/board/${item.slug}`}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                )} */}

                {/*        <div className="sidebar-wrapper">
                  {mls.mlsPagesRefreneces !== null && (
                    <ul>
                      <h5 className="text_upper">MLS Statistics</h5>
                      {mls.mlsPagesRefreneces.map((item, i) => (
                        <li key={i}>
                          <Link to={`/mls/${item.slug}`}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div> */}
                {/* mls ends */}
                <SideBar />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

MlsTemplate.propTypes = propTypes

export default MlsTemplate

export const pageQuery = graphql`
  query MlsPostBySlug($id: String!) {
    contentfulMlsPages(id: { eq: $id }) {
      id
      title
      slug
      boardName

    
      mainContent {
        childContentfulRichText {
          html
        }
      }
      mainContent2 {
        childContentfulRichText {
          html
        }
      }
      mainContent3 {
        childContentfulRichText {
          html
        }
      }
      mainContent4 {
        childContentfulRichText {
          html
        }
      }
    }
    allSalesbyprice1Csv {
      edges {
        node {
          Area
          Benchmark
          One_Month
          Three_Month
          Six_Month
          Twelve_Month
          Three_Year
          Five_Year
          Month
          Year
        }
      }
    }
    allSalesbyprice2Csv {
      edges {
        node {
          Area
          Benchmark
          One_Month
          Three_Month
          Six_Month
          Twelve_Month
          Three_Year
          Five_Year
          Month
          Year
        }
      }
    }
alberta: allAlbertahome2Csv {
        edges {
          node {
            Area
            Benchmark
            One_Month
            Three_Month
            Six_Month
            Twelve_Month
            Three_Year
            Five_Year
            Month
            Year
          }
        }
      }

     BarrieRA: allBarrieTable02RaCsv {
        edges {
          node {
            cat
            current_p
            past_p
            yyp
            current_date
            past_date
          }
        }
      }
    barrieChart:  allFile(filter: {relativeDirectory: {eq: "boards\\barrie\\BarrieCharts"}}) {
        ...ChartSourcesx
      }
      torontoChart: allFile(filter: {relativeDirectory: {eq: "boards\\toronto\\TorontoCharts"}}) {
        ...ChartSourcesx
      }
      victoriaChart: allFile(filter: {relativeDirectory: {eq: "boards\\victoria\\VictoriaCharts"}}) {
        ...ChartSourcesx
      }
  }
  fragment ChartSourcesx on FileConnection {
    edges {
      node {
        name
        id
        sourceInstanceName
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  }
`
