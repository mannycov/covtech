import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h2>Emanuel Covarrubias from Silicon Valley</h2>
      <p>Visit my GitHub page at{' '}
        <a href="https://github.com/mannycov" target="_blank" rel="noopener noreferrer">
          github.com/mannycov
        </a>
      </p>
      <p>Visit the BeRelentless project details page <Link to="/berelentless">here</Link></p>
      <p>Visit the HFX project details page <Link to="/hfx">here</Link></p>
    </Layout>
  )
}

export default IndexPage
