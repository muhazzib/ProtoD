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
    if (slug == 'barrie-residential-activity') {
      this.setState({
        // data: this.props.data.allBarrieCsv.edges,
        // name1: 'Barrie Home'
        charts: this.props.data.barrieChart.edges,
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
        data: this.props.data.allAlbertaresidentialactivityCsv.edges,
        name1: 'Alberta Residential Sheet 1',
      })
    } else if (slug == 'realtors-r-association-of-edmonton') {
      this.setState({
        data: this.props.data.allAlbertaresidentialactivityCsv.edges,
        name1: 'eddy Residential Sheet 1',
      })
    } else if (slug == 'victoria') {
      this.setState({
        data: this.props.data.allAlbertaresidentialactivityCsv.edges,
        name1: 'vic Residential Sheet 1',
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
      charts,
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
        post={post}
        tableData={data}
        tableData2={data2}
        tableData3={data3}
        tableData4={data4}
        chartsData={charts}
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

    allAlbertaCsv {
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
    allAlbertahome2Csv {
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
    allAlbertahome2Csv {
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
