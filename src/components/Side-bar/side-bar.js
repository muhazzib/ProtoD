import React from 'react'
import { Link } from 'gatsby'
import '../Side-bar/side-bar.css'
import Menu from '../Board-Menu/menu'

const SideBar = ({ siteTitle }) => (
  <div className="sidebar-wrapper">
    <div className="community">
      <Menu />
      {/* <Menu /> */}
    </div>
    <h5 className="text_upper"> Housing Market Stats</h5>
    <ul>
      <li>
        <a href="#">MLS® Home Price Index</a>
      </li>
      <ul className="children">
        <li>
          <a href="#">About HPI</a>
        </li>
        <li>
          <a href="#">Getting Started</a>
        </li>
        <li>
          <a href="#">HPI Tool</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
      </ul>
    </ul>

    <ul>
      <h5 className="text_upper">National Statistics</h5>
      <ul className="children ntl_stats">
        <li>
<<<<<<< HEAD
          <a href="/en-US/stats/2WzwJAqfKd3QekqmJcKmli/">About </a>
        </li>
        <li>
          <a href="/en-US/stats/3Yj8RUXHGUebU2k1UfYnqT/">Employment Trends</a>
        </li>
        <li>
          <a href="/en-US/stats/ZtDiHSNyWRJYz57YMk7aX/">
=======
          <a href="/en-CA/stats/2WzwJAqfKd3QekqmJcKmli/">About </a>
        </li>
        <li>
          <a href="/en-CA/stats/3Yj8RUXHGUebU2k1UfYnqT/">Employment Trends</a>
        </li>
        <li>
          <a href="/en-CA/stats/ZtDiHSNyWRJYz57YMk7aX/">
>>>>>>> e8686f427982cf77b622935b8a5b7c3da598f616
            Interest Rate Changes
          </a>
        </li>
        <li>
<<<<<<< HEAD
          <a href="/en-US/stats/2k7dZil1MPa7B2vbqlNKlH/">Consumer Confidence</a>
=======
          <a href="/en-CA/stats/2k7dZil1MPa7B2vbqlNKlH/">Consumer Confidence</a>
>>>>>>> e8686f427982cf77b622935b8a5b7c3da598f616
        </li>
      </ul>
    </ul>
    <ul>
      <li>
        <a href="#">Quaterly Forecasts</a>
      </li>
      <li>
        <a href="#">National Average Price Map</a>
      </li>
    </ul>
    <br />
    <div className="widgets widget_1">
      <h2>Why A Realtor?</h2>
      <p>
        Whether you're buying or selling, a real estate transaction can be
        complicated. A REALTOR® helps by making it easy for you...
        <a href="#">Read more ›</a>
      </p>
    </div>
    <div className="widgets widget_2">
      <h2>How CREA Helps</h2>
      <p>
        Whether you're buying or selling, a real estate transaction can be
        complicated. A REALTOR® helps by making it easy for you...
        <a href="#">Read more ›</a>
      </p>
    </div>
    <div className="widgets widget_3">
      <h2>Get Info And Stats</h2>
      <p>
        Whether you're buying or selling, a real estate transaction can be
        complicated. A REALTOR® helps by making it easy for you...
        <a href="#">Read more ›</a>
      </p>
    </div>
  </div>
)

export default SideBar
