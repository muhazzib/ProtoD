import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import * as PropTypes from 'prop-types'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout.js'
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
      abData: [],
      abData2: [],
      abData3: [],
      mtlData: [],
      mtlData2: [],
      mtlData3: [],
      mtlData4: [],
      chatData: [],
      chatData2: [],
      muskData: [],
      name1: '',
      name2: '',
      name3: '',
      name4: '',
    }
  }
  getYear() {
    return new Date().getFullYear()
  }
  componentDidMount() {
    const slug = this.props.pageContext.slug
    if (slug == 'xxxx') {
      this.setState({
        // data: this.props.data.allBarrieCsv.edges,
        // name1: 'Barrie Home'
        charts: this.props.data.barrieChart.edges,
        data: this.props.data.allMontrealCsv.edges,
      })
    } else if (slug == 'musk') {
      this.setState({
        data: this.props.data.MuskHome1.edges,
        name1: 'Lakelands sheet 1',
        data2: this.props.data.MuskHome2.edges,
        name2: 'Lakelands sheet 2',
        data3: this.props.data.allSalesbyprice1Csv.edges,
        name3: 'Lakelands sheet 3',
        muskData: this.props.data.allSalesbyprice1Csv.edges,
        name: 'Lake 4',
      })
    } else if (slug == 'alberta-real-estate-association') {
      this.setState({
        abData: this.props.data.ABHome1.edges,
        name1: 'Alberta Monthly Summary',

        abData2: this.props.data.ABHome2.edges,
        name2: 'Alberta Year-To-Date Summary',
      })
    } else if (slug == 'montreal') {
      this.setState({
        mtlData: this.props.data.MTL1.edges,
        mtlData2: this.props.data.MTL2.edges,

        name1: 'mtl one',
        name2: 'mtl two',
      })
    } else if (slug == 'realtors-r-association-of-edmonton') {
      this.setState({
        data: this.props.data.allAlbertaresidentialactivityCsv.edges,
        name1: 'eddy Residential Sheet 1',
      })
    } else if (slug == 'victoria') {
      this.setState({
        chatData: this.props.data.allAlbertaresidentialactivityCsv.edges,
        name1: 'vic on chat',

        chatData2: this.props.data.allAlbertaresidentialactivityCsv.edges,
        name2: 'chart 2',
      })
    } else if (slug == 'victoria-sales') {
      this.setState({
        data: this.props.data.allSalesbyprice1Csv.edges,
        data2: this.props.data.allSalesbyprice2Csv.edges,
        name1: 'vic Residential Sheet 1',
        name2: 'vic Residential Sheet 2',
        charts: this.props.data.victoriaChart.edges,
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
        abData: [],
        abData2: [],
        abData3: [],
        mtlData1: [],
        mtlData2: [],
        mtlData3: [],
        mtlData4: [],
        chatData: [],
        chatData2: [],
        muskData: [],
      })
    }
  }
  render() {
    console.log(this.props, '-----')
    const post = get(this.props, 'data.contentfulBoards')

    const {
      data,
      data2,
      data3,
      data4,
      name1,
      name2,
      name3,
      name4,
      abfield1,
      abfield2,
      abfield3,
      abfield4,
      charts,
      abData,
      abData2,
      abData3,
      mtlData,
      mtlData2,
      mtlData3,
      mtlData4,
      chatData,
      chatData2,
      muskData,
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
        abData={abData}
        abData2={abData2}
        abData3={abData3}
        mtlData={mtlData}
        mtlData2={mtlData2}
        mtlData3={mtlData3}
        mtlData4={mtlData4}
        chatData={chatData}
        chatData2={chatData2}
        muskData={muskData}
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
      boardInfo {
        childMarkdownRemark {
          html
        }
      }
      boardSubPages{
        title
        slug
      }
      mlsStatistics{
        title
        slug
      }
      
  
      binfo {
        childContentfulRichText {
          html
        }
      }
      mainContent {
        childContentfulRichText {
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
        Area
        Benchmark
        One_Month
        Three_Month
      }
    }
  }
  MuskHome2: allLakelandshome2Csv {
    edges {
      node {
        Area
        Benchmark
        One_Month
        Three_Month
      }
    }
  }
    

    ABHome1:  allAlbertahome1Csv {
      edges {
        node {
          Area
          Benchmark
          One_Month
          Three_Month
     
        }
      }
    }
  ABHome2:  allAlbertahome2Csv{
      edges {
        node {
          Area
          Benchmark
          One_Month
          Three_Month
         
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

    allBarrieCsv {
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
