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
        data: this.props.data.BarrieResA.edges,
        charts: this.props.data.barrieResAChart.edges,

        /*   
        data3: this.props.data.BarrieResA2.edges,

        charts: this.props.data.barrieChart.edges, */
        name1: 'Detached',
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
          'Detailed – Non-Waterfront Residential Sales and Median Price by Area / Non-Waterfront Residential',
        name4:
          'Detailed – Waterfront Sales and Median Price by Area / Waterfront',
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
        node_locale
      }
      mlsSubRefernces{
        title
        slug
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
    MuskRA1: allLakelandshome1Csv {
    edges {
      node {
        field_1
        field_2
        field_3
        field_4
      }
    }
  }
  MuskRA2: allLakelandshome2Csv {
    edges {
      node {
        field_1
        field_2
        field_3
        field_4
      }
    }
  }
  MuskRA3: allLakelandshome3Csv {
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
  MuskRA4: allLakelandshome4Csv {
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
   BarrieResA: allBarrieTable02RaCsv{
      edges{
        node{
          cat
          current_p
          past_p
          yyp
          current_date
        }
      }
    }
    BarrieResA1: allBarrieTable03RaCsv{
      edges{
        node{
          cat
          current_p
          past_p
          yyp
          current_date
        }
      }
    }


    BarrieResA3: allBarrieTable03Csv {
      edges {
        node {
          area
          current_s
          current_p
          past_s
          yys
          yyp
          current_date
          past_date
          past_p
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
      barrieResAChart:  allFile(filter: {relativeDirectory: {eq: "boards\\barrie\\residentialActivity\\chart"}}) {
        ...ChartSourcesx
      }
      barrieSalesByCat:  allFile(filter: {relativeDirectory: {eq: "boards\\barrie\\salesByCategory"}}) {
        ...ChartSourcesx
      }
      barrieSalesByPriceRange:  allFile(filter: {relativeDirectory: {eq: "boards\\barrie\\salesByPriceRange"}}) {
        ...ChartSourcesx
      }
      barrieMarketConditions:  allFile(filter: {relativeDirectory: {eq: "boards\\barrie\\marketConditions"}}) {
        ...ChartSourcesx
      }
      barrieMedianPrice:  allFile(filter: {relativeDirectory: {eq: "boards\\barrie\\medianPrice"}}) {
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
