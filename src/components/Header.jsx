import styled from 'styled-components'

const HeaderContainer = styled.div`
  background-color: #2e2e2e;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 20rem;
  width: 100%;
  margin-bottom: 2rem;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center top;
  border-bottom: 1px solid #181818;
  background-size: cover;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1025px) {
    height: 40rem;
  }
`

export default HeaderContainer
