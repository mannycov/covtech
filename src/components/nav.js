import React from 'react'
import { Link } from 'gatsby'

import navStyles from '../styles/nav.module.scss'

const Nav = () => {
  return (
    <nav id={navStyles.mainNav}>
      <h1><Link className={navStyles.title} to="/">covtech</Link></h1>
      <ul>
        <li><Link className={navStyles.navLink} activeClassName={navStyles.activeNavLink} to="/">Home</Link></li>
        <li><Link className={navStyles.navLink} activeClassName={navStyles.activeNavLink} to="/berelentless">BeRelentless</Link></li>
        <li><Link className={navStyles.navLink} activeClassName={navStyles.activeNavLink} to="/hfx">HFX</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
