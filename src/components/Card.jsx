import styled from 'styled-components'

const Card = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  background: #181818;
  padding: 1rem;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.1s;
  @media screen and (min-width: 780px) {
    padding: 2rem;
  }
`
export default Card
