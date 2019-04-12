import React from 'react'
import TableSheet from '../Table/sheet.module.css'
import { Table } from 'reactstrap'

export default class BoardTable extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextProp) {
    console.log(nextProp, 'next')
  }
  render() {
    const data = this.props.mtlData
    const name = this.props.name
    const field1 = this.props.field1
    const field2 = this.props.field2
    const field3 = this.props.field3
    const field4 = this.props.field4
    const field5 = this.props.field5
    const field6 = this.props.field6
    const field7 = this.props.field7
    return (
      <Table
        bordered
        className={TableSheet.tableBordered}
        style={{ marginTop: '20px' }}
      >
        <thead>
          <tr>
            <th colSpan="8" className="tableHeader boardTableHead">
              {name}
            </th>
          </tr>
          <tr>
            <th rowSpan="2" bgcolor="#E7EBFE" id="table_col_one">
              Composite HPI
            </th>
            <th rowSpan="2" bgcolor="#E7EBFE">
              month / year
            </th>
            <th colSpan="6" bgcolor="#E7EBFE">
              Percentage Change vs.
            </th>
          </tr>
          <tr>
            <th bgcolor="#E7EBFE" id="table_col_one">
              1 month ago
            </th>
            <th bgcolor="#E7EBFE">3 months ago</th>
            <th bgcolor="#E7EBFE">6 months ago</th>
            <th bgcolor="#E7EBFE">12 months ago</th>
            <th bgcolor="#E7EBFE">3 years ago</th>
            <th bgcolor="#E7EBFE">5 years ago</th>
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
      </Table>
    )
  }
}
