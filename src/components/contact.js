import React from 'react'
import { FaEnvelopeOpen } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

import contactStyles from '../styles/contact.module.scss'

const Contact = () => {
  return  (
    <div>
      <section id={contactStyles.contactA} className={`${contactStyles.textCenter} ${contactStyles.py3}`}>
        <div className={contactStyles.container}>
          <h2 className={contactStyles.sectionTitle}>Contact Me</h2>
          <div className={contactStyles.bottomLine}></div>
          <p className={contactStyles.lead}>Get in touch</p>
          <form method="POST" data-netlify="true" data-netlify-recaptcha="true">
            <div className={contactStyles.textFields}>
              <input type="text" className={`${contactStyles.textInput} ${contactStyles.nameInput}`} placeholder="Name" name="name" />
              <input type="text" className={`${contactStyles.textInput} ${contactStyles.subjectInput}`} placeholder="Subject" name="subject" />
              <input type="email" className={`${contactStyles.textInput} ${contactStyles.emailInput}`} placeholder="Email Address" name="email" />
              <input type="text" className={`${contactStyles.textInput} ${contactStyles.phoneInput}`} placeholder="Phone Number" name="phone" />
              <textarea type="text" className={`${contactStyles.textInput} ${contactStyles.messageInput}`} placeholder="Enter Message" name="message"></textarea>
              <div className={contactStyles.my2}>
                <div data-netlify-recaptcha="true"></div>
              </div>
            </div>
            <button type="submit" className={contactStyles.btnDark}>Submit</button>
          </form>
        </div>
      </section>
      <section id={contactStyles.contactB} className={`${contactStyles.py3} ${contactStyles.bgDark}`}>
        <div className={contactStyles.container}>
          <div className={contactStyles.contactInfo}>
            <div>
              <FaEnvelopeOpen />
              <h3>Email</h3>
              <p>cov.emanuel@gmail.com</p>
            </div>
            <div>
              <MdLocationOn />
              <h3>Location</h3>
              <p>San Jose, CA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
