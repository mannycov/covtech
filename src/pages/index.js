import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>COVTECH</h1>
      <h2>Emanuel Covarrubias from Silicon Valley</h2>
      <p>Visit the BeRelentless project details page <Link to="/berelentless">here</Link></p>
      <p>Visit the HFX project details page <Link to="/hfx">here</Link></p>
    </Layout>
  )
}

export default IndexPage
