import React from 'react'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import navStyles from '../styles/nav.module.scss'

const Nav = ({ title }) => {
  let display, offSet;
  title === 'Home' ? display = 'flex' : display = 'none';

  function handleOffSet() {
    if (typeof window !== `undefined`) {
      const windowWidth = window.innerWidth;
      windowWidth <= 500 ? offSet = 110 : offSet = 70;
    }
  }
  
  function resize() {
    handleOffSet();
  }

  handleOffSet();

  if (typeof window !== `undefined`) window.onresize = resize;
  
  return (
    <nav id={navStyles.mainNav}>
      <h1><Link className={navStyles.logo} to="/">Covtech</Link></h1>
      <ul style={{ display }} >
        <li><AnchorLink offset={() => offSet} href="#header">Home</AnchorLink></li>
        <li><AnchorLink offset={() => offSet} href="/#about">About</AnchorLink></li>
        <li><AnchorLink offset={() => offSet} href="#projects">Projects</AnchorLink></li>
        <li><AnchorLink offset={() => offSet} href="#technologies">Technologies</AnchorLink></li>
        <li><AnchorLink offset={() => offSet} href="#contact">Contact</AnchorLink></li>
      </ul>
    </nav>
  )
}

export default Nav
