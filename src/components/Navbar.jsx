import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-menu is-active">
        <div className="navbar-start">
          <Link className="navbar-item" exact to="/">
            ETUSIVU
          </Link>
          <Link className="navbar-item" to="/event">
            TAPAHTUMAT
          </Link>
          <Link className="navbar-item" to="/info">
            INFO
          </Link>
        </div>
        <div className="navbar-end" />
      </div>
    </div>
  </nav>
)

export default Navbar
