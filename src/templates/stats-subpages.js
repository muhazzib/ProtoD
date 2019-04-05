import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import * as PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import contentStyles from '../components/Content/content.css'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Chart from '../components/Chart/chart'
import Sidebar from '../components/Side-bar/side-bar'
import Sheet from '../components/Table/sheet'
import Footersub from '../components/Footer/footer-sub'
import footerStyle from '../components/Footer/footer.module.css'
import { Location } from '@reach/router'
import SidebarFr from '../components/Side-bar/side-bar.fr'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class NatlAboutTemplate extends React.Component {
  getYear() {
    return new Date().getFullYear()
  }

  render() {
    const natl = get(this, 'props.data.contentfulStatsPages')
    console.log('national-ca', natl)
    const { location } = this.props
    const { pathname } = location
    const lang = pathname.split('/')[1] == 'fr-CA' ? true : false
    console.log(lang, 'pathnaaksjdaskldjaskdj')
    return (
      <Layout
        data={this.props.data}
        location={this.props.location}
        noHeader="true"
      >
        {/* <Chart /> */}
        <div className="content-wrapper">
          <div className="row split">
            <div className="col-md">
              <div className="entry-header">
                {/*  {location.pathname}
                <Location>
                  {({ location }) => {
                    {
                      Location.pathname &&
                        '/fr-CA/stats/2WzwJAqfKd3QekqmJcKmli/'(
                          <div>
                            <SidebarFr />
                          </div>
                        )
                    }
                    console.log(location)
                    return <p>The location is {location.pathname}</p>
                  }}
                </Location>
                {Location.pathname &&
                  '/fr-CA/stats/2WzwJAqfKd3QekqmJcKmli/'(
                    <div>
                      <SidebarFr />
                    </div>
                  )} */}

                {/*   <SidebarFr
                  isIndex={
                    this.props.location.pathname !==
                    '/fr-CA/stats/2WzwJAqfKd3QekqmJcKmli/'
                  }
                /> */}
                <h1
                  className="entry-title"
                  dangerouslySetInnerHTML={{
                    __html: natl.title,
                  }}
                />
              </div>
              <div className="entry-content">
                <div className="entry-sub">
                  <div>
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{
                        __html: natl.mainContent.childContentfulRichText.html,
                      }}
                    />
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
                {lang ? <SidebarFr /> : <Sidebar pathname={pathname} />}
              </div>
            </div>
          </div>
        </div>
        <Footersub />
        {/* <!--  ==========================================================  -->
  <!--  BOARD AND CREA DECLARATION HERE ==========================  -->
  <!--  ==========================================================  --> */}
        <div className={footerStyle.boardCredit}>
          <p>
            The information contained in this report has been prepared by The
            Canadian Real Estate Association drawn from sources deemed to be
            reliable, but the accuracy and completeness of the information is
            not guaranteed. In providing this information, The Canadian Real
            Estate Association does not assume any responsibility or liability.
            Copyright © {this.getYear()} The Canadian Real Estate Association.
            All rights reserved. Reproduction in whole or in part is prohibited
            without written permission.
          </p>
        </div>
        {/* <!--  ==========================================================  -->
  <!-- END EDITING PAGE CONTENT HERE =============================  -->
  <!--  ==========================================================  --></div> */}
      </Layout>
    )
  }
}

NatlAboutTemplate.propTypes = propTypes

export default NatlAboutTemplate

export const pageQuery = graphql`
  query natlAboutQuery($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    contentfulStatsPages(id: { eq: $id }) {
      id
      contentful_id
      node_locale
      title
      mainContent {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
