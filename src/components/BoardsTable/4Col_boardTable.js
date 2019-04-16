import React from 'react'
import TableSheet from '../Table/sheet.module.css'
import { Table } from 'reactstrap'

const boardtablehead = {
  background: 'white',
}

export default class BoardTable extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextProp) {
    console.log(nextProp, 'next')
  }
  render() {
    const data = this.props.tableData
    const dataMtl = this.props.mtlData
    const dataAb = this.props.abData
    const dataMusk = this.props.muskData
    const name = this.props.name

    return (
      <Table
        bordered
        className={TableSheet.tableBordered}
        style={{ marginTop: '20px' }}
      >
        <thead>
          <tr>
            <th
              boardtablehead={boardtablehead}
              colSpan="4"
              className="tableHeader boardTableHead"
            >
              {name}
            </th>
          </tr>
        </thead>
        {data !== undefined && (
          <tbody className="BoardTable">
            {data.map((row, i) => (
              <tr scope="row" key={`${row.node.Area} ${i}`}>
                <td>{row.node.Area}</td>
                <td>{row.node.Benchmark}</td>
                <td>{row.node.One_Month}</td>
                <td>{row.node.Three_Month}</td>
              </tr>
            ))}
          </tbody>
        )}

        {dataMtl !== undefined && (
          <tbody className="BoardTable">
            {dataMtl.map((row, i) => (
              <tr scope="row" key={`${row.node.Area} ${i}`}>
                <td>{row.node.Area}</td>
                <td>{row.node.Benchmark}</td>
                <td>{row.node.One_Month}</td>
                <td>{row.node.Three_Month}</td>
              </tr>
            ))}
          </tbody>
        )}

        {dataAb !== undefined && (
          <tbody className="BoardTable">
            {dataAb.map((row, i) => (
              <tr scope="row" key={`${row.node.Area} ${i}`}>
                <td>{row.node.Area}</td>
                <td>{row.node.Benchmark}</td>
                <td>{row.node.One_Month}</td>
                <td>{row.node.Three_Month}</td>
              </tr>
            ))}
          </tbody>
        )}

        {dataMusk !== undefined && (
          <tbody className="BoardTable">
            {dataMusk.map((row, i) => (
              <tr scope="row" key={`${row.node.Area} ${i}`}>
                <td>{row.node.Area}</td>
                <td>{row.node.Benchmark}</td>
                <td>{row.node.One_Month}</td>
                <td>{row.node.Three_Month}</td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    )
  }
}
