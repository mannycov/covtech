import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import Header from '../components/header'
import About from '../components/about'
import Projects from '../components/projects'
import Technologies from '../components/technologies'
import Contact from '../components/contact'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Header />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </Layout>
  )
}

export default IndexPage
