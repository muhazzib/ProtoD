import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Select from 'react-select'

const style = {
  fontSize: '14px',
  fontWeight: 'bold',
}

class MenuX extends React.Component {
  state = {
    selectedOption: null,
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption })
    window.location.href = '/board/' + selectedOption.value
    console.log(`Option selected:`, '/board/' + selectedOption)
  }

  render() {
    const { selectedOption } = this.state
    const data = this.props.menu.allContentfulBoardMenu.edges[0].node
      .menuForBoards

    const itemList = data.map(item => {
      console.log('slugs', item.slug)
      return {
        value: item.slug,
        label: item.title,
      }
    })
    console.log(itemList)
    return (
      <div style={style}>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={itemList}
        />
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query MenuQuery {
        allContentfulBoardMenu {
          edges {
            node {
              title
              menuForBoards {
                title
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        <MenuX menu={data} />
      </header>
    )}
  />
)
