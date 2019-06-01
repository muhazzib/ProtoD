import React from 'react'
import './chart-accordion.css'

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
  }
  componentWillReceiveProps(nextProp) {
    console.log(nextProp, 'next')
  }

  render() {
    /*  const data = this.props.acc.allFile.edges  */
    const charts = this.props.chartsGI
    console.log('chx', charts, ' chx')

    return (
      <div>
        <div className="container">
          <div className="row" style={customRow}>
            <div className=".col-lg-">
              {charts.map((item, i) => (
                <img style={imgStyle} key={i} src={item.node.productUrl} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
