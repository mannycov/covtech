import React from 'react'
import {
  FaInstagram,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa'

import footerStyles from '../styles/footer.module.scss'

const Footer = () => {
  return (
    <footer id={footerStyles.mainFooter}>
      <div className={`${footerStyles.footerContent} ${footerStyles.container}`}>
        <p>Copyright &copy; {new Date().getFullYear()} COVTECH</p>
        <div className={footerStyles.social}>
          <a href="https://www.instagram.com/emanuel_cov/" target="_blank" rel="noopener noreferrer"><FaInstagram className={footerStyles.icon} /></a>
          <a href="https://www.linkedin.com/in/emanuel-covarrubias/" target="_blank" rel="noopener noreferrer"><FaLinkedin className={footerStyles.icon} /></a>
          <a href="https://github.com/mannycov" target="_blank" rel="noopener noreferrer"><FaGithub className={footerStyles.icon} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
