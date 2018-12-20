import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'reactstrap'
import '../Site-header/site-header.css'

const SiteHeader = ({ siteTitle }) => (
  <div className="main-menu">
    <div className="container menu-container">
      <div className="row">
        <div className="col-sm">
          <img src={require('../../images/logo_crea_EN.svg')} />
        </div>
        <div className="col-bg">
          <ul className="primary-menu">
            <li>
              <a href="http://www.crea.ca/">About</a>
            </li>
            <li>
              <a href="http://www.crea.ca/">Realtor Members</a>
            </li>
            <li>
              <a href="http://www.crea.ca/">Buyers or Sellers</a>
            </li>
            <li>
              <a href="http://www.crea.ca/">Federal Affairs</a>
            </li>
            <li>
              <a href="http://www.crea.ca/">Housing Market Stats</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default SiteHeader
