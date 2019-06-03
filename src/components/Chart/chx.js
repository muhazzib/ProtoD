import React from 'react'
import '../Chart/chart-accordion.css'
import '../Chart/chart.module.css'
import Lightbox from 'react-images'
import Gallery from 'react-photo-gallery'

const imgStyle = {
  width: '25%',
  display: 'inline-flex',
  padding: '20px',
}

const customRow = {
  background: '#edf0fe',
}

export default class ChartY extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImage: 0,
    }
    this.closeLightbox = this.closeLightbox.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
  }
  componentWillReceiveProps(nextProp) {
    console.log(nextProp, 'next')
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    })
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }

  render() {
    /*  const data = this.props.acc.allFile.edges  */
    const charts = this.props.chartsGI
    console.log('chx', charts, ' chx')

    const chartsx = charts.map((item, id) => {
      return {
        src: item.node.baseUrl,
        width: 247,
        height: 169,
      }
    })
    console.log('jay', chartsx)

    const activeImages = chartsx

    return (
      <div>
        <div className="container">
          <div className="row" style={customRow}>
            <div className=".col-lg-">
              {/* <Gallery photos={activeImages} onClick={this.openLightbox} /> */}

              {/*  <Lightbox
                images={activeImages}
                onClose={this.closeLightbox}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                currentImage={this.state.currentImage}
                isOpen={this.state.lightboxIsOpen}
              /> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
