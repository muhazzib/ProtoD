import React from 'react'
import { Link } from 'gatsby'
import '../Breadcrumb/breadcrumb.css'

const BreadCrumb = ({ siteTitle }) => (
  <div className="breadcrumbs">
    <ul className="BC_list">
      <li>
        <a href="#">CREA</a>
      </li>
      &nbsp;>
      <li>
        <a href="#">Housing Market Stats</a>
      </li>
      <span>></span>
      <li>
        <a href="#">National Statistics</a>
      </li>
    </ul>
  </div>
)

export default BreadCrumb
