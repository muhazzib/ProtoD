import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'reactstrap'
import siteHeader from '../Site-header/site-header.module.css'

const SiteHeaderFr = ({ siteTitle }) => (
  <div className={siteHeader.mainMenu}>
    <div className={siteHeader.container}>
      <div className={siteHeader.menuContainer}>
        <div className="row">
          <div className="col left-grid">
            <a href="http://localhost:8000/">
              <img src={require('../../images/ACI_logo.png')} />
            </a>
          </div>
          <div className={siteHeader.colBg}>
            <ul className={siteHeader.primaryMenu}>
              <li>
                <a href="http://www.crea.ca/">À PROPOS DE</a>
              </li>
              <li>
                <a href="http://www.crea.ca/">COURTIERS/AGENTS MEMBRES</a>
              </li>
              <li>
                <a href="http://www.crea.ca/">ACHAT OU VENTE</a>
              </li>
              <li>
                <a href="http://www.crea.ca/">AFFAIRES FÉDÉRALES</a>
              </li>
              <li>
                <a href="http://www.crea.ca/">Stat. (marché résidentiel)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SiteHeaderFr
