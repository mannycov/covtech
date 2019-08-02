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
          <FaInstagram className={footerStyles.icon} />
          <FaLinkedin className={footerStyles.icon} />
          <FaGithub className={footerStyles.icon} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
