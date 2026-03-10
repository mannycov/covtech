import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import aboutStyles from "../styles/about.module.scss"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.jpg" }) {
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
      <section
        id={aboutStyles.about}
        className={`${aboutStyles.textCenter} ${aboutStyles.py3}`}
      >
        <div className={aboutStyles.container}>
          <h2 className={aboutStyles.sectionTitle}>About Me</h2>
          <div className={aboutStyles.bottomLine}></div>
          <div className={aboutStyles.aboutInfo}>
            <Img
              className={aboutStyles.bioImage}
              fixed={data.file.childImageSharp.fixed}
            />
            <div className={`${aboutStyles.bio} ${aboutStyles.bgLight}`}>
              <p>
                {" "}
                Pillars is a fitness app that allows users to track their
                workouts, set goals, and connect with a community of fitness
                enthusiasts. The app provides a user-friendly interface for
                logging exercises, monitoring progress, and viewing
                achievements. With features like personalized workout plans and
                social integration, Pillars aims to motivate users to stay
                active and reach their fitness goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
