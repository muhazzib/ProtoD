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
    const data = this.props.tableData
    const name = this.props.name

    console.log('table', name)
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
          </tr>
        </thead>
        {data !== undefined && (
          <tbody>
            {data.map((row, i) => (
              <tr scope="row" key={`${row.node.Area} ${i}`}>
                <td>{row.node.Area}</td>
                <td>{row.node.Benchmark}</td>
                <td>{row.node.One_Month}</td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    )
  }
}
