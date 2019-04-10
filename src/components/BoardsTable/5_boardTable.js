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
    const name2 = this.props.name2
    const field1 = this.props.field1
    const field2 = this.props.field2
    const field3 = this.props.field3
    const field4 = this.props.field4
    const field5 = this.props.field5

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
              {/*  Composite HPI  */}
              {field1}
            </th>
            <th rowSpan="2" bgcolor="#E7EBFE">
              {/*  month / year */}
              {field2}
            </th>
            <th colSpan="3" bgcolor="#E7EBFE">
              {/*  Percentage Change vs. */} {name2}
            </th>
          </tr>
          <tr>
            <th bgcolor="#E7EBFE" id="table_col_one">
              {/* 1 month ago  */}
              {field3}
            </th>
            <th bgcolor="#E7EBFE">{field4}</th>
            <th bgcolor="#E7EBFE">{field5}</th>
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
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    )
  }
}
