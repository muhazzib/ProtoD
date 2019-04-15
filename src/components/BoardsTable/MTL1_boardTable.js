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
    return (
      <Table
        bordered
        className={TableSheet.tableBordered}
        style={{ marginTop: '20px' }}
      >
        <thead className="BoardTable">
          <tr>
            <th
              boardtablehead={boardtablehead}
              colSpan="4"
              className="tableHeader boardTableHead"
            >
              {name}
            </th>
          </tr>
          {/*           <tr>
            <th rowSpan="2" bgcolor="#E7EBFE" id="table_col_one">
           
              {field1}
            </th>
            <th rowSpan="2" bgcolor="#E7EBFE">
              
              {field2}
            </th>
          </tr>
          <tr>
            <th bgcolor="#E7EBFE" id="table_col_one">
              {field3}
            </th>
            <th bgcolor="#E7EBFE">{field4}</th>
          </tr> */}
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
      </Table>
    )
  }
}
