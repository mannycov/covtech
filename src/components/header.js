import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import headerStyles from '../styles/header.module.scss'

const Header = () => {
  return (
    <div id="header">
      <header id={headerStyles.headerHome}>
        <div className={headerStyles.container}>
          <div className={headerStyles.headerContent}>
            <h1><span className={headerStyles.textPrimary}>COV</span>TECH</h1>
            <p className={headerStyles.lead}>I specialize in full stack development and design. Look below to learn more and view my work and to get in touch!</p>
            <AnchorLink className={`${headerStyles.btn} ${headerStyles.btnLight}`} offset={() => 70} href="/#about">About Me</AnchorLink>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
