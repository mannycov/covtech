import React from 'react'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import navStyles from '../styles/nav.module.scss'

const Nav = () => {
  return (
    <nav id={navStyles.mainNav}>
      <h1 className={navStyles.title}>covtech</h1>
      <ul>
        <li><Link className={navStyles.navLink} activeClassName={navStyles.activeNavLink} to="/">Home</Link></li>
        <li><AnchorLink className={navStyles.navLink} href="/#about">About</AnchorLink></li>
        <li><AnchorLink className={navStyles.navLink} href="#projects">Projects</AnchorLink></li>
        <li><AnchorLink className={navStyles.navLink} href="#technologies">Technologies</AnchorLink></li>
        <li><AnchorLink className={navStyles.navLink} href="#contact">Contact</AnchorLink></li>
      </ul>
    </nav>
  )
}

export default Nav
