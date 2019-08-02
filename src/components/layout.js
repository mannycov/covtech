import React from 'react'

import Nav from './nav'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from '../styles/layout.module.scss'

const Layout = (props) => {
  return (
    <div className={layoutStyles.layoutContainer}>
      <div className={layoutStyles.layoutContent}>
        <Nav />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
