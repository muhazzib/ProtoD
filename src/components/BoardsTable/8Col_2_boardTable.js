import React from 'react'
import TableSheet from '../Table/sheet.module.css'
import { Table } from 'reactstrap'

export default class BoardTable8 extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextProp) {
    console.log(nextProp, 'next')
  }
  render() {
    const data = this.props.tableData
    const datamtl = this.props.mtlData

    const name = this.props.name

    console.log('table', name)
    return (
      <Table
        bordered
        className={TableSheet.tableBordered}
        style={{ marginTop: '20px', marginBottom: '40px' }}
      >
        <thead>
          <tr>
            <th colSpan="8" className="tableHeader boardtablehead">
              {name}
            </th>
          </tr>
          <tr>
            {/*    <th rowSpan="2" bgcolor="#E7EBFE" id="table_col_one">
              Composite HPI
            </th>
            <th rowSpan="2" bgcolor="#E7EBFE">
              month / year
            </th> */}
            <th colSpan="8" bgcolor="#E7EBFE">
              Percentage Change vs.
            </th>
          </tr>
        </thead>
        {data !== undefined && (
          <tbody>
            {data.map((row, i) => (
              <tr scope="row" key={`${row.node.Area} ${i}`}>
                <td>{row.node.Area}</td>
                <td>{row.node.Benchmark}</td>
                <td>{row.node.One_Month}</td>
                <td>{row.node.Three_Month}</td>
                <td>{row.node.Six_Month}</td>
                <td>{row.node.Twelve_Month}</td>
                <td>{row.node.Three_Year}</td>
                <td>{row.node.Five_Year}</td>
              </tr>
            ))}
          </tbody>
        )}
        {datamtl !== undefined && (
          <tbody>
            {datamtl.map((row, i) => (
              <tr scope="row" key={`${row.node.Area} ${i}`}>
                <td>{row.node.Area}</td>
                <td>{row.node.Benchmark}</td>
                <td>{row.node.One_Month}</td>
                <td>{row.node.Three_Month}</td>
                <td>{row.node.Six_Month}</td>
                <td>{row.node.Twelve_Month}</td>
                <td>{row.node.Three_Year}</td>
                <td>{row.node.Five_Year}</td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    )
  }
}
