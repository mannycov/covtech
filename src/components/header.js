import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <div>
      <header>
        <h1>COVTECH</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/berelentless">BeRelentless</Link>
            </li>
            <li>
              <Link to="/hfx">HFX</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
