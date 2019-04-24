import React from 'react'
import TableSheet from '../Table/sheet.module.css'
import { Table } from 'reactstrap'

const boardtablehead = {
  background: 'white',
}

export default class BoardTable4 extends React.Component {
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
    const muskRa = this.props.muskRa
    const barrRa = this.props.barrRa
    const chatRa = this.props.chatRa
    const name = this.props.name
    const field = this.props.field

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

        {barrRa !== undefined && (
          <tbody className="BoardTable">
            {barrRa.map((row, i) => (
              <tr scope="row" key={`${row.node.field_1} ${i}`}>
                <td>{row.node.field_1}</td>
                <td>{row.node.field_2}</td>
                <td>{row.node.field_3}</td>
                <td>{row.node.field_4}</td>
              </tr>
            ))}
          </tbody>
        )}

        {chatRa !== undefined && (
          <tbody className="BoardTable">
            {chatRa.map((row, i) => (
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
            <tr>
              <th colSpan="4">{field}</th>
            </tr>
          </tbody>
        )}

        {muskRa !== undefined && (
          <tbody className="BoardTable">
            {muskRa.map((row, i) => (
              <tr scope="row" key={`${row.node.field_1} ${i}`}>
                <td>{row.node.field_1}</td>
                <td>{row.node.field_2}</td>
                <td>{row.node.field_3}</td>
                <td>{row.node.field_4}</td>
              </tr>
            ))}
            {/*  <tr>
              <th colSpan="4">
                Includes transactions in all areas recorded by The Lakelands
                Association of REALTORS<sup>®</sup>
              </th>
            </tr> */}
          </tbody>
        )}
      </Table>
    )
  }
}
