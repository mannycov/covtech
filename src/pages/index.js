import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>COVTECH</h1>
      <h2>Emanuel Covarrubias from Silicon Valley</h2>
      <p>Visit the BeRelentless project details page <Link to="/berelentless">here</Link></p>
      <p>Visit the HFX project details page <Link to="/hfx">here</Link></p>
      <Footer />
    </div>
  )
}

export default IndexPage
