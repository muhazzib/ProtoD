import React from 'react'
import footerStyle from '../Footer/footer.module.css'

class Footer extends React.Component {
  getYear() {
    return new Date().getFullYear()
  }
  render() {
    return (
      <div className={footerStyle.footer}>
        <div id="cc">
          <h3>
            <b>PLEASE NOTE:</b>
          </h3>
          <strong>
            <p>
              The information contained in this news release combines both major
              market and national sales information from MLS&reg; Systems from
              the previous month.
            </p>
            <p>
              CREA cautions that average price information can be useful in
              establishing trends over time, but does not indicate actual prices
              in centres comprised of widely divergent neighbourhoods or account
              for price differential between geographic areas. Statistical
              information contained in this report includes all housing types.
            </p>
          </strong>
          <p>
            MLS&reg; Systems are co-operative marketing systems used only by
            Canada&rsquo;s real estate Boards to ensure maximum exposure of
            properties listed for sale.
          </p>
          <p>
            The Canadian Real Estate Association (CREA) is one of Canada's
            largest single-industry trade associations. CREA works on behalf of
            more than 125,000 REALTORS<sup>®</sup> who contribute to the
            economic and social well-being of communities across Canada.
            Together they advocate for property owners, buyers and sellers.
          </p>
        </div>

        {/*         <!--  =========================================================== -->
<!--  BOARD CONTACT INFORMATION HERE ============================ -->
<!--  =========================================================== --> */}
        <div className="board_contact">
          <p>
            <strong>For more information, please contact:</strong> <br />
            <br />
            <strong>Media only:</strong> <br />
            Pierre Leduc
            <br />
            Media Relations
            <br />
            Tel.: 613-237-7111 or 613-884-1460
            <br />
            E-mail:&nbsp;
            <a href="mailto:pleduc@crea.ca" className="emailcolor">
              <span className="emailcolor">pleduc@crea.ca</span>
            </a>
            <br />
            <br />
            <strong>All other requests:</strong> <br />
            Janet Lemoine
            <br />
            MLS&reg; Statistics Coordinator
            <br />
            E-mail:&nbsp;
            <a href="mailto:jlemoine@crea.ca" className="emailcolor">
              <span className="emailcolor">jlemoine@crea.ca</span>
            </a>
          </p>
          <img
            src={require('../../images/mls_logo.png')}
            alt="mls logo"
            width="130"
            height="64"
          />
        </div>
        {/* <!--  ==========================================================  -->
  <!--  BOARD AND CREA DECLARATION HERE ==========================  -->
  <!--  ==========================================================  --> */}
        <div className={footerStyle.boardCredit}>
          <hr />
          <p>
            The information contained in this report has been prepared by The
            Canadian Real Estate Association, in co-operation with the Vancouver
            Island Real Estate Board. The information has been drawn from
            sources deemed to be reliable, but the accuracy and completeness of
            the information is not guaranteed. In providing this information,
            neither The Canadian Real Estate Association nor the Vancouver
            Island Real Estate Board assumes any responsibility or liability.
            Copyright&nbsp;&copy;{this.getYear()}
            The Canadian Real Estate Association. All rights reserved.
            Reproduction in whole or in part is prohibited without written
            permission.
          </p>
          <hr />
        </div>
        {/* <!--  ==========================================================  -->
  <!-- END EDITING PAGE CONTENT HERE =============================  -->
  <!--  ==========================================================  --></div> */}
        <div className="row">
          <div className="col">
            <h5>
              <strong>CANADIAN REAL ESTATE ASSOCIATION</strong>
            </h5>
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
              identify the quality of services provided by real estate
              professionals who are members of CREA. The trademarks REALTOR®,
              REALTORS® and the REALTOR® logo are controlled by CREA and
              identify real estate professionals who are members of CREA.{' '}
              <a href="#">Legal</a> | <a href="#">Privacy</a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
export default Footer
