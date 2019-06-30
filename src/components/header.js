import React from 'react'
import { Link } from 'gatsby'

import headerStyles from '../styles/header.module.scss'

const Header = () => {
  return (
    <div>
      <header>
        <h1>COVTECH</h1>
        <nav>
          <ul>
            <li>
              <Link className={headerStyles.link} to="/">Home</Link>
            </li>
            <li>
              <Link className={headerStyles.link} to="/berelentless">BeRelentless</Link>
            </li>
            <li>
              <Link className={headerStyles.link} to="/hfx">HFX</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
