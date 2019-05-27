import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import * as PropTypes from 'prop-types'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/Layouts/layout.js'
import Link from 'gatsby-link'
import SideBar from '../components/Side-bar/side-bar'
import footerStyle from '../components/Footer/footer.module.css'
import { GlobalStyle } from '../utils/global'

const pStyle = {
  fontSize: '15px',
  textAlign: 'center',
  display: 'inlineTable',
}

const propTypes = {
  data: PropTypes.object.isRequired,
}

class BoardTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      data2: [],
      data3: [],
      data4: [],
      charts: [],
      areaData: [],
      areaData2: [],
      areaData3: [],
      mtlData: [],
      mtlData2: [],
      mtlData3: [],
      mtlData4: [],
      chatData: [],
      chatData2: [],
      muskData: [],
      muskData2: [],
      muskData3: [],
      muskData4: [],
      name1: '',
      name2: '',
      name3: '',
      name4: '',
      muskField1: '',
      muskField2: '',
      muskField3: '',
      muskField4: '',
    }
  }
  getYear() {
    return new Date().getFullYear()
  }
  componentDidMount() {
    const slug = this.props.pageContext.slug
    if (slug == 'chat') {
      this.setState({
        chatData: this.props.data.ChatHome1.edges,
        chatData2: this.props.data.ChatHome2.edges,
        name1: 'Actual 1',
        name2: 'Year-To-Date 2',
      })
    } else if (slug == 'musk') {
      this.setState({
        muskData: this.props.data.MuskHome1.edges,
        muskData2: this.props.data.MuskHome2.edges,
        muskData3: this.props.data.MuskHome3.edges,
        muskData4: this.props.data.MuskHome4.edges,
        name1: 'Summary – Sales by Housing Type',
        name2: 'Summary – Median Price by Housing Type',
        name3:
          'Detailed – Non-Waterfront Residential Sales and Median Price by Area / Non-Waterfront Residential',
        name4:
          'Detailed – Waterfront Sales and Median Price by Area / Waterfront',
        muskField1:
          'Includes transactions in all areas recorded by The Lakelands Association of REALTORS®',
        muskField2:
          'Includes transactions in all areas recorded by The Lakelands Association of REALTORS®',
      })
    } else if (slug == 'area') {
      this.setState({
        areaData: this.props.data.AreaHome1.edges,
        name1: 'Alberta Monthly Summary',

        areaData2: this.props.data.AreaHome2.edges,
        name2: 'Alberta Year-To-Date Summary',
      })
    } else if (slug == 'xx') {
      this.setState({
        mtlData: this.props.data.MTL1.edges,
        mtlData2: this.props.data.MTL2.edges,

        name1: 'mtl one',
        name2: 'mtl two',
      })
    } else if (slug == 'xo') {
      this.setState({
        data: this.props.data.allAlbertaresidentialactivityCsv.edges,
        name1: 'eddy Residential Sheet 1',
      })
    } else if (slug == 'vict') {
      this.setState({
        /*  chatData: this.props.data.allAlbertaresidentialactivityCsv.edges,
        name1: 'vic on chat',

        chatData2: this.props.data.allAlbertaresidentialactivityCsv.edges,
        name2: 'chart 2', */
      })
    } else if (slug == 'fghh') {
      this.setState({
        /*     data: this.props.data.allSalesbyprice1Csv.edges,
        data2: this.props.data.allSalesbyprice2Csv.edges,
        name1: 'vic Residential Sheet 1',
        name2: 'vic Residential Sheet 2',
        charts: this.props.data.victoriaChart.edges, */
      })
    } else if (slug == 'ff') {
      this.setState({
        /* data: this.props.data.allSalesbyprice1Csv.edges,
        data2: this.props.data.allSalesbyprice2Csv.edges, */
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
        areaData: [],
        areaData2: [],
        areaData3: [],
        mtlData1: [],
        mtlData2: [],
        mtlData3: [],
        mtlData4: [],
        chatData: [],
        chatData2: [],
        muskData: [],
        muskData2: [],
      })
    }
  }
  render() {
    console.log(this.props, '-----')
    const post = get(this.props, 'data.contentfulBoards')
    console.log('posts', post)
    const {
      data,
      data2,
      data3,
      data4,
      name1,
      name2,
      name3,
      name4,
      muskField1,
      muskField2,
      muskField3,
      muskField4,
      abfield1,
      abfield2,
      abfield3,
      abfield4,
      charts,
      areaData,
      areaData2,
      areaData3,
      mtlData,
      mtlData2,
      mtlData3,
      mtlData4,
      chatData,
      chatData2,
      muskData,
      muskData2,
      muskData3,
      muskData4,
    } = this.state
    return (
      <Layout
        data={this.props.data}
        location={this.props.location}
        board={true}
        name1={name1}
        name2={name2}
        name3={name3}
        name4={name4}
        muskField1={muskField1}
        muskField2={muskField2}
        muskField3={muskField3}
        muskField4={muskField4}
        abfield1={abfield1}
        abfield2={abfield2}
        abfield3={abfield3}
        abfield4={abfield4}
        post={post}
        tableData={data}
        tableData2={data2}
        tableData3={data3}
        tableData4={data4}
        chartsData={charts}
        areaData={areaData}
        areaData2={areaData2}
        areaData3={areaData3}
        mtlData={mtlData}
        mtlData2={mtlData2}
        mtlData3={mtlData3}
        mtlData4={mtlData4}
        chatData={chatData}
        chatData2={chatData2}
        muskData={muskData}
        muskData2={muskData2}
        muskData3={muskData3}
        muskData4={muskData4}
      >
        <GlobalStyle />
      </Layout>
    )
  }
}

BoardTemplate.propTypes = propTypes

export default BoardTemplate

export const pageQuery = graphql`
  query BoardPostBySlug($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    contentfulBoards(id: { eq: $id }) {
      title
      slug
      headline
      boardPresidentName
      boardName
      sharedContent{
        title
        sharedHeadline
        sharedContent{
          childContentfulRichText{
            html
          }
        }
      }
   
      boardInfo {
        childMarkdownRemark {
          html
        }
      }
      boardSubPages{
        title
        slug
        boardPageType
      }
      mlsStatistics{
        title
        slug
        MlsboardPageName
      } 
      mainContent {
        childContentfulRichText {
          html
        }
      }
      additionalContent{
        childMarkdownRemark{
          html
        }
      }
      boardPresidentPhoto {
        fixed(width: 130) {
          src
          srcSet
          width
          height
        }
      }        
    }
    MuskHome1: allLakelandshome1Csv {
    edges {
      node {
        field_1
        field_2
        field_3
        field_4
      }
    }
  }
  MuskHome2: allLakelandshome2Csv {
    edges {
      node {
        field_1
        field_2
        field_3
        field_4
      }
    }
  }
  MuskHome3: allLakelandshome3Csv {
    edges {
      node {
        field_1
        field_2
        field_3
        field_4
        field_5
        field_6
        field_7
      }
    }
  }
  MuskHome4: allLakelandshome4Csv {
    edges {
      node {
        field_1
        field_2
        field_3
        field_4
        field_5
        field_6
        field_7
      }
    }
  }
    

    AreaHome1:  allAlbertahome1Csv {
      edges {
        node {
          field_1
          field_2
          field_3
          field_4
        }
      }
    }
  AreaHome2:  allAlbertahome2Csv{
      edges {
        node {
          field_1
          field_2
          field_3
          field_4
        }
      }
    }
    ChatHome1: allChatHomeTable01Csv {
      edges {
        node {
          name
          field_1
          field_2
          field_3
          field_4
          field_5
          field_6
          field_7
     
        }
      }
    }

    ChatHome2: allChatHomeTable02Csv {
      edges {
        node {
          name
          field_1
          field_2
          field_3
          field_4
          field_5
          field_6
          field_7
     
        }
      }
    }

   MTL1: allMontrealCsv {
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
    MTL2: allMontreal2Csv {
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
    MTL3: allMontreal3Csv {
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

    MTL4: allMontreal4Csv {
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
    allAlbertaresidentialactivityCsv {
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
    allTorontoresidentialactivity1Csv {
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
    allTorontoresidentialactivity2Csv {
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

    allTorontosalesbypricerange1Csv {
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

    allTorontosalesbypricerange2Csv {
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

    allTorontosalesbypricerange3Csv {
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

    allTorontosalesbypricerange4Csv {
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

    allCookiesCsv {
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


    barrieChart:  allFile(filter: {relativeDirectory: {eq: "boards\\barrie\\BarrieCharts"}}) {
      ...ChartSources
    }
    torontoChart: allFile(filter: {relativeDirectory: {eq: "boards\\toronto\\TorontoCharts"}}) {
      ...ChartSources
    }
    victoriaChart: allFile(filter: {relativeDirectory: {eq: "boards\\victoria\\VictoriaCharts"}}) {
      ...ChartSources
    }

    
 
    allMontrealCsv {
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
    allNrHpiTableEnCsv {
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
  }

  fragment ChartSources on FileConnection {
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
