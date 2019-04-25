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
import ChartY from '../components/Chart/chx'

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
      muskRa: [],
      muskRa2: [],
      muskRa3: [],
      muskRa4: [],
      muskSPR: [],
      muskSPR1: [],
      barrRa: [],
      barrSPR: [],
      chatRa: [],
      chatSPR: [],
      name1: '',
      name2: '',
      name3: '',
      name4: '',
      charts: [],
      field1: '',
      field2: '',
      field3: '',
      field4: '',
    }
  }
  getYear() {
    return new Date().getFullYear()
  }
  componentDidMount() {
    const slug = this.props.pageContext.slug
    if (slug == 'barrie-residential-activity') {
      this.setState({
        barrRa: this.props.data.BarrRA.edges,
        charts: this.props.data.barrieResAChart.edges,

        name1: 'Summary – Sales and Median Price/ Detached',
      })
    } else if (slug == 'barrie-sales-by-price-range') {
      this.setState({
        barrSPR: this.props.data.BarrSPR.edges,
        name1: 'Summary – Sales by Price Range',
      })
    } else if (slug == 'barrie-sales-by-price-range') {
      this.setState({
        barrSPR: this.props.data.BarrSPR.edges,
        name1: 'Summary – Sales by Price Range',
      })
    } else if (slug == 'chat-residential-activity') {
      this.setState({
        chatRa: this.props.data.ChatRA.edges,

        name1: 'Summary – Sales and Median Price / Single Detached',
      })
    } else if (slug == 'chat-sales-by-price-range') {
      this.setState({
        chatSPR: this.props.data.ChatSPR.edges,

        name1: 'Summary – Sales by Price Range',
      })
    } else if (slug == 'barrie-sales-by-category') {
      this.setState({
        charts: this.props.data.barrieSalesByCat.edges,
      })
    } else if (slug == 'barrie-sales-by-price-range') {
      this.setState({
        charts: this.props.data.barrieSalesByPriceRange.edges,
      })
    } else if (slug == 'barrie-market-conditions') {
      this.setState({
        charts: this.props.data.barrieMarketConditions.edges,
      })
    } else if (slug == 'barrie-median-price') {
      this.setState({
        charts: this.props.data.barrieMedianPrice.edges,
      })
    } else if (slug == 'musk-residential-activity') {
      this.setState({
        muskRa: this.props.data.MuskRA1.edges,
        muskRa2: this.props.data.MuskRA2.edges,
        muskRa3: this.props.data.MuskRA3.edges,
        muskRa4: this.props.data.MuskRA4.edges,
        name1: 'Summary – Sales by Housing Type',
        name2: 'Summary – Median Price by Housing Type',
        name3:
          'Detailed – Sales and Median Price by Area --  Non-Waterfront Residential',
        name4: 'Detailed – Sales and Median Price by Area --  Waterfront',
        field1:
          'Includes transactions in all areas recorded by The Lakelands Association of REALTORS®',
      })
    } else if (slug == 'musk-sales-by-price-range') {
      this.setState({
        muskSPR: this.props.data.MuskSPR.edges,
        muskSPR1: this.props.data.MuskSPR1.edges,

        name1: 'Summary – Sales by Price Range ',
        name2: 'Year-over-year percentage change',
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
        muskRa: [],
        muskRa2: [],
        muskRa3: [],
        muskRa4: [],
        muskSPR: [],
        muskSPR2: [],
        charts: [],
      })
    }
  }

  render() {
    const mls = get(this.props, 'data.contentfulMlsPages')
    console.log('mlspages', mls)

    const {
      data,
      data2,
      data3,
      data4,
      muskRa,
      muskRa2,
      muskRa3,
      muskRa4,
      muskSPR,
      muskSPR1,
      barrRa,
      barrSPR,
      chatRa,
      chatSPR,
      field1,
      field2,
      field3,
      field4,
      name1,
      name2,
      name3,
      name4,
      charts,
    } = this.state

    return (
      <Layout
        data={this.props.data}
        mls={mls}
        board={true}
        name1={name1}
        name2={name2}
        name3={name3}
        name4={name4}
        field1={field1}
        field2={field2}
        field3={field3}
        field4={field4}
        tableData={data}
        tableData2={data2}
        tableData3={data3}
        tableData4={data4}
        muskRa={muskRa}
        muskRa2={muskRa2}
        muskRa3={muskRa3}
        muskRa4={muskRa4}
        muskSPR={muskSPR}
        muskSPR1={muskSPR1}
        barrRa={barrRa}
        barrSPR={barrSPR}
        chatRa={chatRa}
        chatSPR={chatSPR}
        chartsData={charts}
      >
        <GlobalStyle />
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
      boardSubPagesz{
        title
        slug
        boardPageType
        node_locale
      }
      mlsSubRefernces{
        title
        slug
        MlsboardPageName
      }
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
    MuskRA1: allMuskTable01Csv{
    edges {
      node {
        field_1
        field_2
        field_3
        field_4
      }
    }
  }
  MuskRA2: allMuskTable02Csv{
    edges {
      node {
        field_1
        field_2
        field_3
        field_4
      }
    }
  }
  MuskRA3: allMuskTable03Csv {
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
  MuskRA4: allMuskTable04Csv {
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
  MuskSPR: allMuskTable05Csv {
    edges {
      node {
        field_1
        field_2
        field_3
        field_4
        field_5
        field_6
        
      }
    }
  }
  MuskSPR1: allMuskTable06Csv {
    edges {
      node {
        field_1
        field_2
        field_3
        field_4
        field_5
        field_6
        
      }
    }
  }
   BarrRA: allBarrTable01Csv{
      edges{
        node{
          field_1
          field_2
          field_3
          field_4
         
        }
      }
    }
    BarrSPR: allBarrTable02Csv{
      edges{
        node{
          field_1
          field_2
          field_3
          field_4
          field_5
          field_6
        }
      }
    }

    ChatRA: allChatTable01Csv{
      edges{
        node{
          field_1
          field_2
          field_3
          field_4      
        }
      }
    }
    ChatSPR: allChatTable02Csv{
      edges{
        node{
          field_1
          field_2
          field_3
          field_4
          field_5
          field_6
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
      barrieResAChart:  allFile(filter: {relativeDirectory: {eq: "boards\\barrie\\charts\\residentialActivity\\chart"}}) {
        ...ChartSourcesx
      }
      barrieSalesByCat:  allFile(filter: {relativeDirectory: {eq: "boards\\barrie\\charts\\salesByCategory"}}) {
        ...ChartSourcesx
      }
      barrieSalesByPriceRange:  allFile(filter: {relativeDirectory: {eq: "boards\\barrie\\charts\\salesByPriceRange"}}) {
        ...ChartSourcesx
      }
      barrieMarketConditions:  allFile(filter: {relativeDirectory: {eq: "boards\\barrie\\charts\\marketConditions"}}) {
        ...ChartSourcesx
      }
      barrieMedianPrice:  allFile(filter: {relativeDirectory: {eq: "boards\\barrie\\charts\\medianPrice"}}) {
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
