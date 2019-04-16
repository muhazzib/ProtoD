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
    const data = this.props.tableData
    const dataMtl = this.props.mtlData
    const area = this.props.areaData
    const musk = this.props.muskData
    const name = this.props.name

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
              colSpan="4"
              className="tableHeader boardTableHead"
            >
              {name}
            </th>
          </tr>
        </thead>
        {data !== undefined && (
          <tbody className="BoardTable">
            {data.map((row, i) => (
              <tr scope="row" key={`${row.node.field_1} ${i}`}>
                <td>{row.node.field_1}</td>
                <td>{row.node.field_2}</td>
                <td>{row.node.field_3}</td>
                <td>{row.node.field_4}</td>
              </tr>
            ))}
          </tbody>
        )}

        {dataMtl !== undefined && (
          <tbody className="BoardTable">
            {dataMtl.map((row, i) => (
              <tr scope="row" key={`${row.node.field_1} ${i}`}>
                <td>{row.node.field_1}</td>
                <td>{row.node.field_2}</td>
                <td>{row.node.field_3}</td>
                <td>{row.node.field_4}</td>
              </tr>
            ))}
          </tbody>
        )}

        {area !== undefined && (
          <tbody className="BoardTable">
            {area.map((row, i) => (
              <tr scope="row" key={`${row.node.field_1} ${i}`}>
                <td>{row.node.field_1}</td>
                <td>{row.node.field_2}</td>
                <td>{row.node.field_3}</td>
                <td>{row.node.field_4}</td>
              </tr>
            ))}
          </tbody>
        )}

        {musk !== undefined && (
          <tbody className="BoardTable">
            {musk.map((row, i) => (
              <tr scope="row" key={`${row.node.field_1} ${i}`}>
                <td>{row.node.field_1}</td>
                <td>{row.node.field_2}</td>
                <td>{row.node.field_3}</td>
                <td>{row.node.field_4}</td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    )
  }
}
