import React from 'react'

import footerStyles from '../styles/footer.module.scss'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p>Copyright &copy; {new Date().getFullYear()} COVTECH</p>
    </footer>
  )
}

export default Footer
