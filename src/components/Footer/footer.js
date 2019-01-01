import React from 'react'
import { Link } from 'gatsby'
import '../Footer/footer.css'

const Footer = ({ siteTitle }) => (
  <div className="footer">
    <div className="row">
      <div className="col">
        <p>
          <strong>CANADIAN REAL ESTATE ASSOCIATION</strong>
        </p>
      </div>
      <div className="col">
        <strong>Phone</strong>
        :613.237-7111 &nbsp; &nbsp;
        <strong>Email:</strong>
        <a href="#">info@crea.ca</a>
      </div>
      <div className="col">Social icons go here</div>
    </div>
    <hr />
    <div className="row">
      <div className="col-2">
        <img src={require('../../images/logo_crea_EN.svg')} />
      </div>
      <div className="col">
        <span>
          The trademarks MLS®, Multiple Listing Service® and the associated
          logos are owned by The Canadian Real Estate Association (CREA) and
          identify the quality of services provided by real estate professionals
          who are members of CREA. The trademarks REALTOR®, REALTORS® and the
          REALTOR® logo are controlled by CREA and identify real estate
          professionals who are members of CREA. <a href="#">Legal</a> |{' '}
          <a href="#">Privacy</a>
        </span>
      </div>
    </div>
  </div>
)
export default Footer
