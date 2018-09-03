import React from 'react'
import { push } from 'gatsby-link'

const trStyle = {
  cursor: 'pointer',
}

export default props => {
  return (
    <tr style={trStyle} onClick={() => push(props.slug)}>
      <td>{props.title}</td>
      <td>{props.date}</td>
      <td>{props.location}</td>
    </tr>
  )
}
