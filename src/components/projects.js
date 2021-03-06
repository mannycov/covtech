import React from 'react'
import { Link } from 'gatsby'

import hfx from '../images/hfx.png'
import berelentless from '../images/berelentless.png'
import projectStyles from '../styles/projects.module.scss'

const Projects = () => {
  return (
    <div id="projects">
      <section id={projectStyles.projects} className={`${projectStyles.bgLight} ${projectStyles.textCenter} ${projectStyles.py3}`}>
        <div className={projectStyles.container}>
          <h2 className={projectStyles.sectionTitle}>Projects</h2>
          <div className={projectStyles.bottomLine}></div>
          <p className={projectStyles.lead}>
            My latest projects
          </p>
          <div className={projectStyles.projectItems}>
            <div className={projectStyles.project}>
              <div className={projectStyles.projectImage}>
                <img src={berelentless} alt="BeRelentless"/>
              </div>
              <div className={projectStyles.projectText}>
                <div className={projectStyles.projectTextWrap}>
                  <h2 className={projectStyles.projectTextTitle}>BeRelentless</h2>
                  <p className={projectStyles.projectTextLink}>View the details <Link to="/berelentless">here</Link></p>
                </div>
              </div>
            </div>
            <div className={projectStyles.project}>
              <div className={projectStyles.projectImage}>
                <img src={hfx} alt="HFX"/>
              </div>
              <div className={projectStyles.projectText}>
                <div className={projectStyles.projectTextWrap}>
                  <h2 className={projectStyles.projectTextTitle}>Hair Effects by Ricardo</h2>
                  <p className={projectStyles.projectTextLink}>View the details <Link to="/hfx">here</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
