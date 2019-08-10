import React from 'react'
import { navigate } from 'gatsby-link'
import { TiLocation, TiMail } from 'react-icons/ti'

import contactStyles from '../styles/contact.module.scss'

function encode (data) {
  return Object.keys(data) 
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Contact = () => {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return  (
    <div id="contact">
      <section id={contactStyles.contactA} className={`${contactStyles.bgLight} ${contactStyles.textCenter} ${contactStyles.py3}`}>
        <div className={contactStyles.container}>
          <h2 className={contactStyles.sectionTitle}>Contact Me</h2>
          <div className={contactStyles.bottomLine}></div>
          <p className={contactStyles.lead}>Get in touch</p>
          <form method="POST" name="contact" data-netlify="true" data-netlify-recaptcha="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
            <div className={contactStyles.textFields}>
              <input type="hidden" name="form-name" value="contact" />
              <input type="text" className={`${contactStyles.textInput} ${contactStyles.nameInput}`} placeholder="Name" name="name" onChange={handleChange} />
              <input type="text" className={`${contactStyles.textInput} ${contactStyles.subjectInput}`} placeholder="Subject" name="subject" onChange={handleChange} />
              <input type="email" className={`${contactStyles.textInput} ${contactStyles.emailInput}`} placeholder="Email Address" name="email" onChange={handleChange} />
              <input type="text" className={`${contactStyles.textInput} ${contactStyles.phoneInput}`} placeholder="Phone Number" name="phone" onChange={handleChange} />
              <textarea type="text" className={`${contactStyles.textInput} ${contactStyles.messageInput}`} placeholder="Enter Message" name="message" onChange={handleChange} ></textarea>
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
              <TiMail size='2em' />
              <h3>Email</h3>
              <p>cov.emanuel@gmail.com</p>
            </div>
            <div>
              <TiLocation size='2em' />
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
