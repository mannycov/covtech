import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import Covtech from '../components/covtech'
import About from '../components/about'
import Projects from '../components/projects'
import Technologies from '../components/technologies'
import Contact from '../components/contact'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Covtech />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </Layout>
  )
}

export default IndexPage
