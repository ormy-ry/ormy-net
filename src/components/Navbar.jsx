import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Navbar extends Component {
  state = {
    isActive: false,
  }

  toggleNav = () => {
    console.log('ayy')
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a
              className={
                this.state.isActive
                  ? 'navbar-burger is-active'
                  : 'navbar-burger'
              }
              aria-label="menu"
              aria-expanded="false"
              onClick={this.toggleNav}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div
            className={
              ' navbar-menu' + (this.state.isActive ? ' is-active' : '')
            }
          >
            <div className="navbar-start">
              <Link className="navbar-item is-uppercase" exact to="/">
                etusivu
              </Link>
              <Link className="navbar-item is-uppercase" to="/event">
                tapahtumat
              </Link>
              <Link className="navbar-item is-uppercase" to="/info">
                info
              </Link>
            </div>
            <div className="navbar-end">
              <a
                href="/email-signup"
                className="navbar-item is-uppercase"
              >
                <FontAwesomeIcon
                  style={{ marginRight: '0.3rem' }}
                  icon="envelope"
                />{' '}
                sähköpostilista
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
