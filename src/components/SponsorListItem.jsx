import React from 'react'
import styled from 'styled-components'

const SponsorImg = styled.img`
  display: block;
  max-width: 90%;
  max-height: 10rem;
  width: auto;
  height: auto;
`

export default props => {
  return (
    <div className="column is-4">
      <a href={props.url}>
        <SponsorImg src={props.logo} />
      </a>
    </div>
  )
}
