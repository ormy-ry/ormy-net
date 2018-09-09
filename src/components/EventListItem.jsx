import React from 'react'
import { push } from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
