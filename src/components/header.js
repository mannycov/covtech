import React from 'react'
import { Link } from 'gatsby'

import headerStyles from '../styles/header.module.scss'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">COVTECH</Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink} to="/">Home</Link>
          </li>
          <li>
            <Link className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink} to="/berelentless">BeRelentless</Link>
          </li>
          <li>
            <Link className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink} to="/hfx">HFX</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
