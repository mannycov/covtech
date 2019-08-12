import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import laptop from '../images/laptop.jpg'
import beRelentless from '../images/berelentless.png'
import beRelentlessStyles from '../styles/berelentless.module.scss'

const BeRelentless = () => {
  return (
    <Layout>
      <Head title="BeRelentless" />
      <main id={beRelentlessStyles.beRelentless}>
        <section id={beRelentlessStyles.projectSummary} className={`${beRelentlessStyles.bgDark} ${beRelentlessStyles.textCenter} ${beRelentlessStyles.py3}`}>
          <h2 className={beRelentlessStyles.sectionTitle}>BeRelentless</h2>
          <div className={beRelentlessStyles.bottomLine}></div>
          <div className={beRelentlessStyles.container}>
            <div className={beRelentlessStyles.projectDescription}>
              <p className={beRelentlessStyles.lead}>A social networking fitness goals app designed to help you reach your fitness goals - Create a profile and set fitness goals. Then create check ins to track your progress on your goals. You can like and comment on other users' fitness goals to inspire them as well!</p>
            </div>
            <div className={beRelentlessStyles.project}>
              <div className={beRelentlessStyles.projectImage}>
                <img src={beRelentless} alt="BeRelentless"/>
              </div>
              <div className={beRelentlessStyles.projectLink}>
                <a className={beRelentlessStyles.btnLight} href="http://www.berelentless.io" target="_blank" rel="noopener noreferrer">Visit</a>
              </div>
            </div>
          </div>
        </section>
        <section id={beRelentlessStyles.projectDescription} className={`${beRelentlessStyles.textCenter} ${beRelentlessStyles.py3}`}>
          <h2 className={beRelentlessStyles.sectionTitle}>How It Was Built</h2>
          <div className={beRelentlessStyles.bottomLine}></div>
          <div className={beRelentlessStyles.container}>
            <div className={beRelentlessStyles.projectImage}>
              <img src={laptop} alt="laptop"/>
            </div>
            <div className={`${beRelentlessStyles.projectTechnologies} ${beRelentlessStyles.bgLight}`}>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>React Router</li>
                <li>Node & Express</li>
                <li>MongoDB</li>
                <li>JWT & Passport for authentication</li>
                <li>Bootstrap</li>
                <li>Deployed to Heroku</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default BeRelentless
