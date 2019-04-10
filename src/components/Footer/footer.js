import React from 'react'
import footerStyle from '../Footer/footer.module.css'

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const path = this.props.pathname ? this.props.pathname.split('/')[1] : false
    console.log(path, '===path')
    const langPath = path
      ? path == 'en-US'
        ? true
        : path == 'board'
        ? true
        : false
      : true
    return (
      <div className={footerStyle.footer}>
        <div className="container">
          {langPath ? (
            <div className="row">
              <div className="col-sm">
                <h5>
                  <strong>CANADIAN REAL ESTATE ASSOCIATION</strong>
                </h5>
              </div>
              <div className="col-sm">
                <strong>Phone</strong>
                :613.237-7111 &nbsp; &nbsp;
                <strong>Email:</strong>
                <a href="#">info@crea.ca</a>
              </div>
              <div className="col-sm" className={footerStyle.col1}>
                <a
                  href="https://www.facebook.com/CREA.ACI"
                  target="_blank"
                  id="icon_facebook"
                  alt="CREA's Facebook page"
                >
                  <img src={require('../../images/icon_facebook.png')} />
                </a>
                <a
                  href="https://www.linkedin.com/company/1400987"
                  target="_blank"
                  id="icon_linkedin"
                  alt="CREA's LinkedIn page"
                >
                  <img src={require('../../images/icon_linkedin.png')} />
                </a>
                <a
                  href="https://twitter.com/CREA_ACI"
                  target="_blank"
                  id="icon_twitter"
                  alt="CREA's Twitter page"
                >
                  <img src={require('../../images/icon_twitter.png')} />
                </a>
                <a
                  href="https://www.youtube.com/user/CREACHANNEL"
                  target="_blank"
                  id="icon_youtube"
                  alt="CREA's YouTube page"
                >
                  <img src={require('../../images/icon_youtube.png')} />
                </a>
                <a
                  href="https://www.instagram.com/crea_aci/"
                  target="_blank"
                  id="icon_instagram"
                  alt="CREA's Instagram page"
                >
                  <img src={require('../../images/icon_instagram.png')} />
                </a>
                <a
                  href="http://www.crea.ca/feed/?post_type=crea_newsroom"
                  target="_blank"
                  id="icon_rss"
                  alt="CREA's RSS Feed"
                >
                  <img src={require('../../images/icon_rss.png')} />
                </a>
                <a
                  href="https://plus.google.com/+CREAACI/posts"
                  target="_blank"
                  id="icon_googleplus"
                  alt="CREA's GooglePlus page"
                >
                  <img src={require('../../images/icon_googleplus.png')} />
                </a>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-sm">
                <h5>
                  <strong>French REAL ESTATE ASSOCIATION</strong>
                </h5>
              </div>
              <div className="col-sm">
                <strong>French</strong>
                :613.237-7111 &nbsp; &nbsp;
                <strong>Email:</strong>
                <a href="#">info@crea.ca</a>
              </div>
              <div className="col-sm" className={footerStyle.col1}>
                <a
                  href="https://www.facebook.com/CREA.ACI"
                  target="_blank"
                  id="icon_facebook"
                  alt="CREA's Facebook page"
                >
                  <img src={require('../../images/icon_facebook.png')} />
                </a>
                <a
                  href="https://www.linkedin.com/company/1400987"
                  target="_blank"
                  id="icon_linkedin"
                  alt="CREA's LinkedIn page"
                >
                  <img src={require('../../images/icon_linkedin.png')} />
                </a>
                <a
                  href="https://twitter.com/CREA_ACI"
                  target="_blank"
                  id="icon_twitter"
                  alt="CREA's Twitter page"
                >
                  <img src={require('../../images/icon_twitter.png')} />
                </a>
                <a
                  href="https://www.youtube.com/user/CREACHANNEL"
                  target="_blank"
                  id="icon_youtube"
                  alt="CREA's YouTube page"
                >
                  <img src={require('../../images/icon_youtube.png')} />
                </a>
                <a
                  href="https://www.instagram.com/crea_aci/"
                  target="_blank"
                  id="icon_instagram"
                  alt="CREA's Instagram page"
                >
                  <img src={require('../../images/icon_instagram.png')} />
                </a>
                <a
                  href="http://www.crea.ca/feed/?post_type=crea_newsroom"
                  target="_blank"
                  id="icon_rss"
                  alt="CREA's RSS Feed"
                >
                  <img src={require('../../images/icon_rss.png')} />
                </a>
                <a
                  href="https://plus.google.com/+CREAACI/posts"
                  target="_blank"
                  id="icon_googleplus"
                  alt="CREA's GooglePlus page"
                >
                  <img src={require('../../images/icon_googleplus.png')} />
                </a>
              </div>
            </div>
          )}
        </div>
        <hr />
        {langPath ? (
          <div className="row row-2">
            <div className={footerStyle.logo}>
              <div className="col">
                <img src={require('../../images/logo_crea_EN.svg')} />
              </div>
            </div>
            <div className="col ">
              <p className={footerStyle.Trademark}>
                The trademarks MLS®, Multiple Listing Service® and the
                associated logos are owned by The Canadian Real Estate
                Association (CREA) and identify the quality of services provided
                by real estate professionals who are members of CREA. The
                trademarks REALTOR®, REALTORS® and the REALTOR® logo are
                controlled by CREA and identify real estate professionals who
                are members of CREA. <a href="#">Legal</a> |
                <a href="#">Privacy</a>
              </p>
            </div>
          </div>
        ) : (
          <div className="row row-2">
            <div className={footerStyle.logo}>
              <div className="col">
                <img src={require('../../images/logo_crea_EN.svg')} />
              </div>
            </div>
            <div className="col ">
              <p className={footerStyle.Trademark}>
                French French French FrenchFrenchFrenchFrenchFrench.{' '}
                <a href="#">Legal</a> |<a href="#">Privacy</a>
              </p>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default Footer
