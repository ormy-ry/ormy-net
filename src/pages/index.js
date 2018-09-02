import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import HeaderContainer from './../components/Header'
import Logo from './../components/Logo'
import Card from './../components/Card'
export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer>
          <Logo />
        </HeaderContainer>
        <div className="container">
          <Card />
        </div>
      </div>
    )
  }
}
