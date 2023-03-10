import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer__container'>
      <div className='footer__heading'>
        <h1>Do you want to step into the future before others ?</h1>
        <button className='request_btn'>Request Early Access</button>
      </div>
      <div className='footer__content'>
        <div className='footer__logo'>
          <h2>GPT-3</h2>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='footer__list__container'>
          <div className='footer__list__1'>
            <h3>Links</h3>
            <a href='#overons'>Overons</a>
            <a href='#social-media'>Social Media</a>
            <a href='#counters'>Counters</a>
            <a href='#contact'>Contact</a>
          </div>
          <div className='footer__list__2'>
            <h3>Company</h3>
            <a href='#terms-conditions'>Terms & Conditions</a>
            <a href='#privacy'>Privacy</a>
            <a href='#contact'>Contact</a>
          </div>
          <div className='footer__list__3'>
            <h3>Get In Touch</h3>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>+91-8433682500</p>
            <a href={`mailto:pranavmaru22@gmail.com`}>pranavmaru22@gmail.com</a>
          </div>
        </div>
      </div>
      <p>© 2023 GPT-3. All rights reserved.</p>
    </div>
  )
}

export default Footer