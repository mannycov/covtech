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
              <p>I am a full stack software engineer with a focus on Javascript. I love to code because I find the process of problem solving very satisfying and I enjoy watching an idea for a project take shape and materialize.
              </p>
              <br/>
              <p> I build full stack applications on my own as well as in groups of engineers using the latest technology stacks. I love seeing new technologies in the community arise and I’m always excited to learn about them. I also am a lover of learning in general, a problem solver, and a fitness enthusiast. Please get in touch if you'd like to know more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
