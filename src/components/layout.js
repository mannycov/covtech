import React from 'react'

import Nav from './nav'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from '../styles/layout.module.scss'

const Layout = (props) => {
  const title = props.children[0].props.title;
  // let display;
  // title !== 'Home' ? display = none : '';
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Nav title={title} />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
