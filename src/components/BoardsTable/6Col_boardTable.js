import React from 'react'
import TableSheet from '../Table/sheet.module.css'
import { Table } from 'reactstrap'

const boardtablehead = {
  background: 'white',
}

export default class BoardTable6 extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextProp) {
    console.log(nextProp, 'next')
  }
  render() {
    const barrSpr = this.props.barrSPR

    const name = this.props.name

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
              colSpan="6"
              className="tableHeader boardTableHead"
            >
              {name}
            </th>
          </tr>
        </thead>

        {barrSpr !== undefined && (
          <tbody className="BoardTable">
            <tr>
              <th colSpan="6">
                <b>Year-over-year percentage change</b>
              </th>
            </tr>
            {barrSpr.map((row, i) => (
              <tr scope="row" key={`${row.node.field_1} ${i}`}>
                <td>{row.node.field_1}</td>
                <td>{row.node.field_2}</td>
                <td>{row.node.field_3}</td>
                <td>{row.node.field_4}</td>
                <td>{row.node.field_5}</td>
                <td>{row.node.field_6}</td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    )
  }
}