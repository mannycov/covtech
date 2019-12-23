import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import aboutStyles from '../styles/about.module.scss'

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file (relativePath: { eq: "me.jpg"}) {
        childImageSharp {
          fixed(width: 350, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div id="#about">
      <section id={aboutStyles.about} className={`${aboutStyles.textCenter} ${aboutStyles.py3}`}>
        <div className={aboutStyles.container}>
          <h2 className={aboutStyles.sectionTitle}>About Me</h2>
          <div className={aboutStyles.bottomLine}></div>
          <div className={aboutStyles.aboutInfo}>
            <Img className={aboutStyles.bioImage} fixed={data.file.childImageSharp.fixed} />
            <div className={`${aboutStyles.bio} ${aboutStyles.bgLight}`}>
              <p>My name is Emanuel Covarrubias and I am a full stack software engineer with a focus on web applications. I love to code because I find the process of problem solving very satisfying and I enjoy watching an idea for a project take shape and materialize.
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
