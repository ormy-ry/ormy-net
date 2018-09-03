import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-menu is-active">
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
        <div className="navbar-end" />
      </div>
    </div>
  </nav>
)

export default Navbar
