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
      <li onClick={close}>
        <a href="http://localhost:8000/en-US/">Home</a>
      </li>
      <li onClick={close}>
        <a href="http://localhost:8000/en-US/stats/2WzwJAqfKd3QekqmJcKmli/">
          About
        </a>
      </li>
      <li onClick={close}>
        <a href="http://localhost:8000/en-US/stats/3Yj8RUXHGUebU2k1UfYnqT/">
          Employment Trends
        </a>
      </li>
      <li onClick={close}>
        <a href="http://localhost:8000/en-US/stats/ZtDiHSNyWRJYz57YMk7aX/">
          Interest Rates Changes
        </a>
      </li>
      <li onClick={close}>
        <a href="http://localhost:8000/en-US/stats/2k7dZil1MPa7B2vbqlNKlH/">
          Consumer Confidence
        </a>
      </li>
      <hr />
      <li onClick={close}>
        <a href="https://www.crea.ca/housing-market-stats/quarterly-forecasts/">
          Quarterly Forecasts
        </a>
      </li>
      <li onClick={close}>
        <a href="https://www.crea.ca/housing-market-stats/national-price-map/">
          National Average Price Map
        </a>
      </li>
      <hr />

      <li onClick={close}>
        REALTOR<sup>®</sup> MEMBERS
      </li>
      <li onClick={close}>BUYERS OR SELLERS</li>
      <li onClick={close}>FEDRERAL AFFAIRS</li>
      <li onClick={close}>HOUSING MARKET STATS</li>
      <hr />
      <li onClick={close}>Member Login</li>
      <li onClick={close}>
        <a href="https://www.crea.ca/newsroom/">Newsroom</a>
      </li>
      <li onClick={close}>
        <a href="https://www.crea.ca/about/careers/">Careers</a>
      </li>
      <li onClick={close}>
        <a href="https://www.crea.ca/contact/">Contact</a>
      </li>
      <li onClick={close}>
        <a href="http://localhost:8000/fr-CA/">FR</a>
      </li>
      <hr />
      <li onClick={close}>
        <a href="https://www.crea.ca/">CREA.CA</a>
      </li>
      <li onClick={close}>
        <a href="https://www.creacafe.ca/">CREA CAFE</a>
      </li>
      <li onClick={close}>
        <a href="https://www.realtorscare.ca/">
          REALTOR CARE<sup>®</sup>
        </a>
      </li>
    </ul>
  </div>
)
