import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Table } from 'reactstrap'
import TableSheet from '../Table/sheet.module.css'

class Sheet extends React.Component {
  state = {}

  render() {
    const data = this.props.sheet.allNrHpiTableEnCsv.edges
    console.log('data-wa', data)

    const xd = data.map(item => item.node.Year)

    console.log('monrh', xd)

    return (
      <div>
        <Table bordered className={TableSheet.tableBordered}>
          <thead>
            <tr>
              <th colSpan="8" className="tableHeader">
                MLS® Home Price Index Benchmark Price
              </th>
            </tr>
            <tr>
              <th rowSpan="2" bgcolor="#E7EBFE" id="table_col_one">
                Composite HPI
              </th>
              <th rowSpan="2" bgcolor="#E7EBFE">
                month / year
              </th>
              <th colSpan="6" bgcolor="#E7EBFE">
                Percentage Change vs.
              </th>
            </tr>
            <tr>
              <th bgcolor="#E7EBFE" id="table_col_one">
                1 month ago
              </th>
              <th bgcolor="#E7EBFE">3 months ago</th>
              <th bgcolor="#E7EBFE">6 months ago</th>
              <th bgcolor="#E7EBFE">12 months ago</th>
              <th bgcolor="#E7EBFE">3 years ago</th>
              <th bgcolor="#E7EBFE">5 years ago</th>
            </tr>
          </thead>
          {data !== undefined && (
            <tbody>
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
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query CsvQuery {
        allLettersCsv {
          edges {
            node {
              letter
              value
            }
          }
        }
        allNrHpiTableEnCsv {
          edges {
            node {
              Area
              Benchmark
              One_Month
              Three_Month
              Six_Month
              Twelve_Month
              Three_Year
              Five_Year
              Month
              Year
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        {/* <h1>{data.site.siteMetadata.title}</h1> */}
        <Sheet sheet={data} />
      </header>
    )}
  />
)
