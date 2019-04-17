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
    const musk = this.props.muskData
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
            <th
              boardtablehead={boardtablehead}
              colSpan="7"
              className="tableHeader boardTableHead"
            >
              {name}
            </th>
          </tr>
          <th
            boardtablehead={boardtablehead}
            colSpan="4"
            className="tableHeader boardTableHead"
          >
            Unit Sales
          </th>
          <th
            boardtablehead={boardtablehead}
            colSpan="3"
            className="tableHeader boardTableHead"
          >
            Median Sales
          </th>
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
      </Table>
    )
  }
}