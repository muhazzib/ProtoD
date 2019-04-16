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
    const chat = this.props.chatData
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
              colSpan="8"
              className="tableHeader boardTableHead"
            >
              Percentage change compared to
            </th>
          </tr>

          {/* <tr>
            <th
              boardtablehead={boardtablehead}
              colSpan="8"
              className="tableHeader boardTableHead"
            >
              {name}
            </th>
          </tr>
          <td
            boardtablehead={boardtablehead}
            colSpan="2"
            rowspan="3"
            className="tableHeader boardTableHead"
          >
            Actual<sup>1</sup>
          </td>
          <th
            boardtablehead={boardtablehead}
            colSpan="6"
            className="tableHeader boardTableHead"
          >
            Percentage change compared to
          </th> */}
        </thead>
        <thead>
          <tr>
            <th>
              {/* Actual<sup>1</sup> */}
              {name}
            </th>
          </tr>
        </thead>
        {chat !== undefined && (
          <tbody className="BoardTable">
            {chat.map((row, i) => (
              <tr scope="row" key={`${row.node.name} ${i}`}>
                <td>{row.node.name}</td>
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
