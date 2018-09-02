import styled from 'styled-components'
import img from './../../static/img/header-bg.jpg'

const HeaderContainer = styled.div`
  background-color: #2e2e2e;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 20rem;
  width: 100%;
  overflow: hidden;
  background-image: url(${img});
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
