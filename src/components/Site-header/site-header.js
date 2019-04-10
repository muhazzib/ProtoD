import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'reactstrap'
import siteHeader from '../Site-header/site-header.module.css'

const SiteHeaderBoard = props => {
  const path = props.pathname.split('/')[1]
  const langPath = path == 'en-US' ? true : path == 'board' ? true : false
  return (
    <div className={siteHeader.mainMenu}>
      <div className={siteHeader.container}>
        <div className={siteHeader.menuContainer}>
          <div className={siteHeader.row}>
            <div className="col-sm ">
              {langPath ? (
                <div className={siteHeader.logoWidth}>
                  <a href="/">
                    <img src={require('../../images/logo_crea_EN.svg')} />
                  </a>
                </div>
              ) : (
                <div className={siteHeader.logoWidthFR}>
                  <a href="/">
                    <img
                      className={siteHeader.frLogo}
                      src={require('../../images/ACI_logo.png')}
                    />
                  </a>
                </div>
              )}
            </div>
            <div className={siteHeader.colBg}>
              {langPath ? (
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
              ) : (
                <ul className={siteHeader.primaryMenu}>
                  <li>
                    <a href="http://www.crea.ca/">Aboutfr</a>
                  </li>
                  <li>
                    <a href="http://www.crea.ca/">Realtor Membersfr</a>
                  </li>
                  <li>
                    <a href="http://www.crea.ca/">Buyers or Sellersfr</a>
                  </li>
                  <li>
                    <a href="http://www.crea.ca/">Federal Affairsfr</a>
                  </li>
                  <li>
                    <a href="http://www.crea.ca/">Housing Market Statsfr</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteHeaderBoard
