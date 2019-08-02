import React from 'react'
import aboutStyles from '../styles/about.module.scss'

const About = () => {
  return (
    <section id={aboutStyles.about} className={`${aboutStyles.textCenter} ${aboutStyles.py3}`}>
      <div className={aboutStyles.container}>
        <h2 className={aboutStyles.sectionTitle}>About Me</h2>
        <div className={aboutStyles.bottomLine}></div>
        <p className={aboutStyles.lead}>A little about myself...</p>
        <div className={aboutStyles.aboutInfo}>
          <img src="https://source.unsplash.com/random/200x200?v=3"  alt="bio" className={aboutStyles.bioImage} />
          <div className={`${aboutStyles.bio} ${aboutStyles.bgLight}`}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti explicabo eius optio! Beatae rerum, eius minus quisquam quaerat animi perspiciatis?</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
