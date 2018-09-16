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
  transition: 0.2s ease;
  :hover {
    filter: none;
  }
`

export default props => {
  return (
    <div className="tile is-parent">
      <div className="tile is child">
        <a href={props.url}>
          <SponsorImg src={props.logo} />
        </a>
      </div>
    </div>
  )
}
