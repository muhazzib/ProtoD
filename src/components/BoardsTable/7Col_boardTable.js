import React from 'react'
import TableSheet from '../Table/sheet.module.css'
import { Table } from 'reactstrap'

const boardtablehead = {
  background: 'white',
}

export default class BoardTable7 extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextProp) {
    console.log(nextProp, 'next')
  }
  render() {
    const musk = this.props.muskData
    const muskRa = this.props.muskRa
    const name = this.props.name
    const muskfield = this.props.field

    console.log('table', name)
    return (
      <Table
        bordered
        className={TableSheet.tableBordered}
        style={{ marginTop: '20px', marginBottom: '40px' }}
      >
        <thead>
          <tr>
            <th
              boardtablehead={boardtablehead}
              colSpan="7"
              className="tableHeader boardTableHead"
            >
              {name}
            </th>
          </tr>
          <tr
            boardtablehead={boardtablehead}
            className="tableHeader boardTableHead"
          >
            <th colSpan="4">Unit Sales</th>
            <th colSpan="3">Median Sales</th>
          </tr>
        </thead>
        {musk !== undefined && (
          <tbody className="BoardTable">
            {musk.map((row, i) => (
              <tr scope="row" key={`${row.node.field_1} ${i}`}>
                <td>{row.node.field_1}</td>
                <td>{row.node.field_2}</td>
                <td>{row.node.field_3}</td>
                <td>{row.node.field_4}</td>
                <td>{row.node.field_5}</td>
                <td>{row.node.field_6}</td>
                <td>{row.node.field_7}</td>
              </tr>
            ))}
          </tbody>
        )}
        <thead>
          <tr>
            <th colSpan="7" className={TableSheet.tableFooter}>
              <b>Note:</b> A percentage change of -- indicates there were no
              sales in the same month one year ago.
            </th>
          </tr>
        </thead>

        {muskRa !== undefined && (
          <tbody className="BoardTable">
            {muskRa.map((row, i) => (
              <tr scope="row" key={`${row.node.field_1} ${i}`}>
                <td>{row.node.field_1}</td>
                <td>{row.node.field_2}</td>
                <td>{row.node.field_3}</td>
                <td>{row.node.field_4}</td>
                <td>{row.node.field_5}</td>
                <td>{row.node.field_6}</td>
                <td>{row.node.field_7}</td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    )
  }
}
