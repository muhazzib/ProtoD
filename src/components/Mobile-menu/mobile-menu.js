import React from 'react'
import Menu from '../Board-Menu/menu'

const menu = {
  fontSize: '16px',
  textAlign: 'left',
  color: 'white',
}

export default ({ close }) => (
  <div className="menu burgerMenu">
    <div className="community">
      <Menu />
    </div>
    <ul style={menu}>
      <li onClick={close}>Home</li>
      <hr />
      <li onClick={close}>About</li>
      <li onClick={close}>
        REALTOR<sup>®</sup> MEMBERS
      </li>
      <li onClick={close}>BUYERS OR SELLERS</li>
      <li onClick={close}>FEDRERAL AFFAIRS</li>
      <li onClick={close}>HOUSING MARKET STATS</li>
      <hr />
      <li onClick={close}>Member Login</li>
      <li onClick={close}>Newsroom</li>
      <li onClick={close}>Careers</li>
      <li onClick={close}>Contact</li>
      <li onClick={close}>FR</li>
      <hr />
      <li onClick={close}>CREA.CA</li>
      <li onClick={close}>CREA CAFE</li>
      <li onClick={close}>
        REALTOR CARE<sup>®</sup>
      </li>
    </ul>
  </div>
)
