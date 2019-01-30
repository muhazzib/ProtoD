import React from 'react'
import footerStyle from '../Footer/footer.module.css'

class FooterSub extends React.Component {
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
          <hr />
        </div>
      </div>
    )
  }
}
export default FooterSub
