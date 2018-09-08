import React from 'react'
import styled from 'styled-components'

const SponsorImg = styled.img`
  display: block;
  padding: 2rem;
  max-width: 100%;
  max-height: 10rem;
  width: auto;
  height: auto;
  filter: brightness(0) invert(1);
  transition: 0.3s;
  :hover {
    filter: none;
  }
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
