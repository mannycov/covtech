import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import laptop from '../images/laptop.jpg'
import hfx from '../images/hfx.png'
import hfxStyles from '../styles/hfx.module.scss'

const HFX = () => {
  return (
    <Layout>
      <Head title="HFX" />
      <main id={hfxStyles.hfx} >
        <section id={hfxStyles.projectSummary} className={`${hfxStyles.bgDark} ${hfxStyles.textCenter} ${hfxStyles.py3}`}>
          <h2 className={hfxStyles.sectionTitle}>Hair Effects by Ricardo</h2>
          <div className={hfxStyles.bottomLine}></div>
          <div className={hfxStyles.container}>
            <div className={hfxStyles.projectDescription}>
              <p className={hfxStyles.lead}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dignissimos mollitia aut animi rem atque fugit dolor eos consequuntur perspiciatis, neque, quod reprehenderit, nobis sunt! Voluptas beatae iure dolores consequatur.</p>
            </div>
            <div className={hfxStyles.project}>
              <div className={hfxStyles.projectImage}>
                <img src={hfx} alt="HFX" />
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
            <div className={hfxStyles.projectImage}>
              <img src={laptop} alt="laptop"/>
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