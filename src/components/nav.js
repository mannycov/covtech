import React from 'react'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import navStyles from '../styles/nav.module.scss'

const Nav = ({ title }) => {
  let display;
  title === 'Home' ? display = 'flex' : display = 'none';
  return (
    <nav id={navStyles.mainNav}>
      <h1><Link className={navStyles.title} to="/">covtech</Link></h1>
      <ul style={{ display }} >
        <li><Link className={navStyles.navLink} activeClassName={navStyles.activeNavLink} to="/">Home</Link></li>
        <li><AnchorLink className={navStyles.navLink} offset={() => 80} href="/#about">About</AnchorLink></li>
        <li><AnchorLink className={navStyles.navLink} offset={() => 80} href="#projects">Projects</AnchorLink></li>
        <li><AnchorLink className={navStyles.navLink} offset={() => 80} href="#technologies">Technologies</AnchorLink></li>
        <li><AnchorLink className={navStyles.navLink} offset={() => 80} href="#contact">Contact</AnchorLink></li>
      </ul>
    </nav>
  )
}

export default Nav
