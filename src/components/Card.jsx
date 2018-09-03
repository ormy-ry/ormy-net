import styled from 'styled-components'

const Card = styled.div`
  grid-area: content;
  width: calc(100% - 2rem);
  min-height: 10rem;
  padding: 1rem;
  margin: 1rem 1rem;
  background: #181818;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.1s;
  @media screen and (min-width: 780px) {
    padding: 2rem;
  }
`
export default Card
