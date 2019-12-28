import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout'
import Head from '../components/head'
import hfxStyles from '../styles/hfx.module.scss'

const HFX = () => {
  const data = useStaticQuery(graphql`
  query {
    hfx: file (relativePath: { eq: "hfx.png" }) {
      childImageSharp {
        fluid(maxWidth: 580, maxHeight: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    laptop: file (relativePath: { eq: "laptop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 580, maxHeight: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  return (
    <Layout>
      <Head title="HFX" />
      <main id={hfxStyles.hfx} >
        <section id={hfxStyles.projectSummary} className={`${hfxStyles.bgDark} ${hfxStyles.textCenter} ${hfxStyles.py3}`}>
          <h2 className={hfxStyles.sectionTitle}>Hair Effects by Ricardo</h2>
          <div className={hfxStyles.bottomLine}></div>
          <div className={hfxStyles.container}>
            <div className={hfxStyles.projectDescription}>
              <p className={hfxStyles.lead}>A hair salon website created for a local businees - Hair Effects by Ricardo provides the latest style trends, excellent care for your hair, and great customer service!</p>
            </div>
            <div className={hfxStyles.project}>
              <div className={hfxStyles.projectImage}>
                <Img fluid={data.hfx.childImageSharp.fluid} />
              </div>
              <div className={hfxStyles.projectLink}>
                <a className={hfxStyles.btnLight} href="http://www.hfxbyricardo.com" target="_blank" rel="noopener noreferrer">Visit</a>
              </div>
            </div>
          </div>
        </section>
        <section id={hfxStyles.projectDescription} className={`${hfxStyles.textCenter} ${hfxStyles.py3}`}>
          <h2 className={hfxStyles.sectionTitle}>How It Was Built</h2>
          <div className={hfxStyles.bottomLine}></div>
          <div className={hfxStyles.container}>
            <div className={hfxStyles.project}>
              <div className={hfxStyles.projectImage}>
                <Img fluid={data.laptop.childImageSharp.fluid} />
              </div>
            </div>
            <div className={`${hfxStyles.projectTechnologies} ${hfxStyles.bgLight}`}>
              <ul>
                <li>jQuery</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Animate CSS for animations</li>
                <li>Waypoints for scroll effect</li>
                <li>SEO</li>
                <li>Optimized for performance</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default HFX