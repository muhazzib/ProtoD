import React from 'react'
import TableSheet from '../Table/sheet.module.css'
import { Table } from 'reactstrap'

export default class RABoardTable extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextProp) {
    console.log(nextProp, 'next')
  }
  render() {
    const data = this.props.tableData
    const name = this.props.name

    console.log('table name', data)
    return (
      <Table
        bordered
        className={TableSheet.tableBordered}
        style={{ marginTop: '20px' }}
      >
        <thead>
          <tr>
            <th colSpan="4" className="tableHeader boardTableHead">
              {name}
            </th>
          </tr>
          <tr>
            <th rowSpan="2" bgcolor="#E7EBFE" id="table_col_one">
              Category
            </th>
            <th rowSpan="2" bgcolor="#E7EBFE">
              Q1-2019
            </th>
            <th rowSpan="2" bgcolor="#E7EBFE">
              Q1-2018
            </th>
          </tr>
          <tr>
            <th bgcolor="#E7EBFE" id="table_col_one">
              Year-over-year percentage change
            </th>
          </tr>
        </thead>
        {data !== undefined && (
          <tbody>
            {data.map((row, i) => (
              <tr scope="row" key={`${row.node.Area} ${i}`}>
                <td>{row.node.cat}</td>
                <td>{row.node.current_p}</td>
                <td>{row.node.past_p}</td>
                <td>{row.node.yyp}</td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    )
  }
}
