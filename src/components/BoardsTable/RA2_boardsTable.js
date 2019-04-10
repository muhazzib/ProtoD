import React from 'react'
import TableSheet from '../Table/sheet.module.css'
import { Table } from 'reactstrap'

export default class RA2BoardTable extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextProp) {
    console.log(nextProp, 'next')
  }
  render() {
    const data = this.props.tableData
    const name = this.props.name
    console.log('dates', data)

    return (
      <Table
        bordered
        className={TableSheet.tableBordered}
        style={{ marginTop: '20px' }}
      >
        <thead verticalAlign="top">
          <tr>
            <th colSpan="7" className="tableHeader boardTableHead">
              {name}
            </th>
          </tr>
          <tr>
            <th colSpan="7" className="tableHeader boardTableHead">
              header 2
            </th>
          </tr>

          <tr>
            <th rowSpan="2" bgcolor="#E7EBFE">
              <b>By Area</b>
            </th>
            <th colSpan="3" bgcolor="#E7EBFE">
              Unit Sales
            </th>
            <th colSpan="3" bgcolor="#E7EBFE">
              Median Sale Price
            </th>
          </tr>
          <tr>
            <td align="left" bgcolor="#E7EBFE">
              <b>Q1-2019</b>
            </td>
            <td align="center" bgcolor="#E7EBFE">
              <b>Q4 - 2018</b>
            </td>
            <td align="center" bgcolor="#E7EBFE">
              <b>Year-over-year percentage change</b>
            </td>
            <td align="center" bgcolor="#E7EBFE">
              <b>Q4-2018</b>
            </td>
            <td align="right" bgcolor="#E7EBFE">
              <b>Q4-2017</b>
            </td>
            <td align="right" bgcolor="#E7EBFE">
              <b>Year-over-year percentage change</b>
            </td>
          </tr>
        </thead>
        {data !== undefined && (
          <tbody>
            {data.map((row, i) => (
              <tr scope="row" key={`${row.node.Area} ${i}`}>
                <td>{row.node.area}</td>
                <td>{row.node.current_s}</td>
                <td>{row.node.past_s}</td>
                <td>{row.node.yys}</td>
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
