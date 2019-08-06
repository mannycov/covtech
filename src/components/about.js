import React from 'react'

import aboutStyles from '../styles/about.module.scss'
import bioImage from '../images/me.jpg'

const About = () => {
  return (
    <div id="#about">
      <section id={aboutStyles.about} className={`${aboutStyles.textCenter} ${aboutStyles.py3}`}>
        <div className={aboutStyles.container}>
          <h2 className={aboutStyles.sectionTitle}>About Me</h2>
          <div className={aboutStyles.bottomLine}></div>
          <div className={aboutStyles.aboutInfo}>
            <img src={bioImage} alt="bio" className={aboutStyles.bioImage} />
            <div className={`${aboutStyles.bio} ${aboutStyles.bgLight}`}>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti explicabo eius optio! Beatae rerum, eius minus quisquam quaerat animi perspiciatis?</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
