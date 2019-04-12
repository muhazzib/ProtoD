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
    const abfield1 = this.props.abfield1
    const abfield2 = this.props.abfield2
    const abfield3 = this.props.abfield3
    const abfield4 = this.props.abfield4
    const datar = this.props.abData
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
              {/*  Composite HPI  */}
              {abfield1}
            </th>
            <th rowSpan="2" bgcolor="#E7EBFE">
              {/*  month / year */}
              {abfield2}
            </th>
          </tr>
          <tr>
            <th bgcolor="#E7EBFE" id="table_col_one">
              {/* 1 month ago  */}
              {abfield3}
            </th>
            <th bgcolor="#E7EBFE">{abfield4}</th>
          </tr>
        </thead>
        {datar !== undefined && (
          <tbody>
            {datar.map((row, i) => (
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
