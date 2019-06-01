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
    const muskRa2 = this.props.muskRa2
    const barrRa = this.props.barrRa
    const chatRa = this.props.chatRa
    const edmoRa = this.props.edmoRA
    const trebRa = this.props.trebRA
    const name = this.props.name
    const field1 = this.props.field
    const muskField = this.props.muskField
    const muskField2 = this.props.muskField2

    console.log('chattt', chatRa)

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
              <th colSpan="4">{muskField}</th>
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
            <tr>
              <th colSpan="4">{field1}</th>
            </tr>
          </tbody>
        )}

        {muskRa2 !== undefined && (
          <tbody className="BoardTable">
            {muskRa2.map((row, i) => (
              <tr scope="row" key={`${row.node.field_1} ${i}`}>
                <td>{row.node.field_1}</td>
                <td>{row.node.field_2}</td>
                <td>{row.node.field_3}</td>
                <td>{row.node.field_4}</td>
              </tr>
            ))}
            <tr>
              <th colSpan="4">{field1}</th>
            </tr>
          </tbody>
        )}

        {edmoRa !== undefined && (
          <tbody className="BoardTable">
            {edmoRa.map((row, i) => (
              <tr scope="row" key={`${row.node.field_1} ${i}`}>
                <td>{row.node.field_1}</td>
                <td>{row.node.field_2}</td>
                <td>{row.node.field_3}</td>
                <td>{row.node.field_4}</td>
              </tr>
            ))}
          </tbody>
        )}

        {trebRa !== undefined && (
          <tbody className="BoardTable">
            {trebRa.map((row, i) => (
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
