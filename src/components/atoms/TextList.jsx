import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ItemList = styled.div`
  display: flex;
  justify-content: flex-start;
`

const renderList = list => {
  return list.map(element => {
    return (
      <ItemList>
        <div>-</div>
        <div>{element}</div>
      </ItemList>
    )
  })
}

const TextList = ({ list }) => (
  <>{list.length > 0 ? renderList(list) : <div>Empty list</div>}</>
)

TextList.propTypes = {
  list: PropTypes.array
}

TextList.defaultProps = {
  list: []
}

export default TextList
