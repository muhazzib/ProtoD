import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'reactstrap'
import headerStyles from './header.module.css'
import SelectLanguage from '../SelectLanguage'

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
                  <a href="http://www.crea.ca/">French CREA.ca</a>
                </li>
                <li>
                  <a href="http://www.crea.ca/">French CREA CAFE</a>
                </li>
                <li>
                  <a href="http://www.crea.ca/">
                    French REALTORS CARE<sup>®</sup>
                  </a>
                </li>
                <li>
                  <a href="http://www.crea.ca/">French CREA STATS</a>
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
                  {/*   <li>
                <a href="http://www.crea.ca/">FR</a>
              </li> */}
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
                    <a href="http://www.crea.ca/">FrenchHome</a>
                  </li>
                  <li>
                    <a href="http://www.crea.ca/">FrenchMLogin</a>
                  </li>
                  <li>
                    <a href="http://www.crea.ca/">FrenchNewsroom</a>
                  </li>
                  <li>
                    <a href="http://www.crea.ca/">FrenchCareers</a>
                  </li>
                  <li>
                    <a href="http://www.crea.ca/">French</a>
                  </li>
                  {/*   <li>
                <a href="http://www.crea.ca/">FR</a>
              </li> */}
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
