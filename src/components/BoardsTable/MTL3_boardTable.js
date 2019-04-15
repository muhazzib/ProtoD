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
            <th
              boardtablehead={boardtablehead}
              colSpan="8"
              className="tableHeader boardTableHead"
            >
              {name}
            </th>
          </tr>
          <tr>
            <th colSpan="8" bgcolor="#E7EBFE">
              Percentage Change vs.
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
