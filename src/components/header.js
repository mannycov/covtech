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
            <p className={headerStyles.lead}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque earum nihil reiciendis tempora delectus accusantium voluptatem quaerat at voluptas amet, aperiam adipisci aspernatur vero culpa reprehenderit doloremque, soluta excepturi.</p>
            <AnchorLink className={`${headerStyles.btn} ${headerStyles.btnLight}`} offset={() => 80} href="/#about">About Me</AnchorLink>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
