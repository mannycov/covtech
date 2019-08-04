import React from 'react'
import {
  FaJsSquare,
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt
 } from 'react-icons/fa'
 import {
  DiMongodb,
  DiSass,
  DiHeroku,
  DiGit
} from 'react-icons/di'

import technologiesStyles from '../styles/technologies.module.scss'

const Technologies = () => {
  return (
    <div id="technologies">
      <section id={technologiesStyles.technologies} className={`${technologiesStyles.textCenter} ${technologiesStyles.py2}`}>
        <div className={technologiesStyles.container}>
          <h2 className={technologiesStyles.sectionTitle}>Technologies</h2>
          <div className={technologiesStyles.bottomLine}></div>
          <p className={technologiesStyles.lead}>
            Some of the technologies I love using include
          </p>
          <div className={technologiesStyles.techStack}>
            <div>
              <h3>JavaScript <FaJsSquare className={technologiesStyles.icon} color='#f0db4f'/></h3>
            </div>
            <div>
              <h3>React & Redux <FaReact className={technologiesStyles.icon} color='#5c84b0'/></h3>
            </div>
            <div>
              <h3>Node & Express <FaNode className={technologiesStyles.icon} color='#69a15c'/></h3>
            </div>
            <div>
              <h3>MongoDB <DiMongodb className={technologiesStyles.icon} color='#11aa51'/></h3>
            </div>
            <div>
              <h3>HTML <FaHtml5 className={technologiesStyles.icon} color='#e54b21'/></h3>
            </div>
            <div>
              <h3>CSS <FaCss3Alt className={technologiesStyles.icon} color='#204ce5'/></h3>
            </div>
            <div>
              <h3>Git <DiGit className={technologiesStyles.icon} color='#f34b27'/></h3>
            </div>
            <div>
              <h3>Sass <DiSass className={technologiesStyles.icon} color='#bf4080'/></h3>
            </div>
            <div>
              <h3>Heroku <DiHeroku className={technologiesStyles.icon} color='#9576b9'/></h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Technologies
