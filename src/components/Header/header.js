import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'reactstrap'
import headerStyles from './header.module.css'
import SelectLanguage from '../SelectLanguage'
import siteHeader from '../Site-header/site-header'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import SiteHeader from '../Site-header/site-header'

const Header = props => {
  const path = props.pathname.split('/')[1]
  const langPath = path == 'en-US' ? true : false

  return (
    <div className={headerStyles.wrapper}>
      <div className={headerStyles.container}>
        <div className="row">
          <div className="col left-grid">
            {langPath ? (
              <ul className={headerStyles.siteTabs}>
                <li>
                  <a href="http://www.crea.ca/">CREA.ca</a>
                </li>
                <li>
                  <a href="http://www.crea.ca/">CREA CAFE</a>
                </li>
                <li>
                  <a href="http://www.crea.ca/">
                    REALTORS CARE<sup>®</sup>
                  </a>
                </li>
                <li>
                  <a href="http://www.crea.ca/">CREA STATS</a>
                </li>
              </ul>
            ) : (
              <ul className={headerStyles.siteTabs}>
                <li>
                  <a href="http://www.crea.ca/">Aci.ca</a>
                </li>
                <li>
                  <a href="http://www.crea.ca/">Café ACI</a>
                </li>
                <li>
                  <a href="http://www.crea.ca/">
                    REALTORS CARE<sup>®</sup>
                  </a>
                </li>
                <li>
                  <a href="http://www.crea.ca/">Stat. L'aci</a>
                </li>
              </ul>
            )}
          </div>

          <div className="col right-grid">
            <div className={'menu-utility'}>
              {langPath ? (
                <ul className={headerStyles.utilityNav}>
                  <li>
                    <a href="http://www.crea.ca/">Home</a>
                  </li>
                  <li>
                    <a href="http://www.crea.ca/">Member Login</a>
                  </li>
                  <li>
                    <a href="http://www.crea.ca/">Newsroom</a>
                  </li>
                  <li>
                    <a href="http://www.crea.ca/">Careers</a>
                  </li>
                  <li>
                    <a href="http://www.crea.ca/">Contact</a>
                  </li>

                  <li>
                    <SelectLanguage
                      langs={props.langs}
                      pathname={props.pathname}
                    />
                  </li>
                </ul>
              ) : (
                <ul className={headerStyles.utilityNav}>
                  <li>
                    <a href="http://www.crea.ca/">Accueil</a>
                  </li>
                  <li>
                    <a href="http://www.crea.ca/">Accès membre</a>
                  </li>
                  <li>
                    <a href="http://www.crea.ca/">Salle des nouvelles</a>
                  </li>
                  <li>
                    <a href="http://www.crea.ca/">Carrières</a>
                  </li>
                  <li>
                    <a href="http://www.crea.ca/">Pour nous joindre</a>
                  </li>

                  <li>
                    <SelectLanguage
                      langs={props.langs}
                      pathname={props.pathname}
                    />
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

export default Header
