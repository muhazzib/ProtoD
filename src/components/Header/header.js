import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'reactstrap'
import styles from './header.css'

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

const Header = ({ siteTitle }) => (
  <div className="wrapper">
    <div className="container">
      <div className="row">
        <div className="col left-grid">
          <ul className="site-tabs">
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
        </div>

        <div className="col right-grid">
          <div className="menu-utility">
            <ul className="utility-nav">
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
                <a href="http://www.crea.ca/">FR</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Header
