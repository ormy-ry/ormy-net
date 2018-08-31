import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <nav className="navbar has-background-black-bis is-dark">
    <div className="container">
      <div className="navbar-start">
        <Link className="navbar-item " exact to="/">
          ETUSIVU
        </Link>
        <Link className="navbar-item " to="/about">
          INFO
        </Link>
        <Link className="navbar-item " to="/event">
          TAPAHTUMAT
        </Link>
      </div>
      <div className="navbar-end" />
    </div>
  </nav>
)

export default Navbar
