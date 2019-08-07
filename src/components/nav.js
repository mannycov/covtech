import React from 'react'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import navStyles from '../styles/nav.module.scss'

const Nav = ({ title }) => {
  let display, offSet;
  title === 'Home' ? display = 'flex' : display = 'none';

  function handleOffSet() {
    const windowWidth = window.innerWidth;
    windowWidth <= 500 ? offSet = 110 : offSet = 80;
  }

  handleOffSet();

  function resize() {
    handleOffSet();
  }

  window.onresize = resize;

  return (
    <nav id={navStyles.mainNav}>
      <h1><Link className={navStyles.title} to="/">covtech</Link></h1>
      <ul style={{ display }} >
        <li><Link className={navStyles.navLink} activeClassName={navStyles.activeNavLink} to="/">Home</Link></li>
        <li><AnchorLink className={navStyles.navLink} offset={() => offSet} href="/#about">About</AnchorLink></li>
        <li><AnchorLink className={navStyles.navLink} offset={() => offSet} href="#projects">Projects</AnchorLink></li>
        <li><AnchorLink className={navStyles.navLink} offset={() => offSet} href="#technologies">Technologies</AnchorLink></li>
        <li><AnchorLink className={navStyles.navLink} offset={() => offSet} href="#contact">Contact</AnchorLink></li>
      </ul>
    </nav>
  )
}

export default Nav
