import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'reactstrap'
import siteHeader from '../Site-header/site-header.module.css'

const SiteHeader = ({ siteTitle }) => (
  <div className={siteHeader.mainMenu}>
    <div className={siteHeader.container}>
      <div className={siteHeader.menuContainer}>
        <div className={siteHeader.row}>
          <div className="col left-grid">
            <a href="http://localhost:8000/">
              <img src={require('../../images/logo_crea_EN.svg')} />
            </a>
          </div>
          <div className={siteHeader.colBg}>
            <ul className={siteHeader.primaryMenu}>
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
  </div>
)

export default SiteHeader
