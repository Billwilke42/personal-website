import React from 'react'
import './ContactContainer.css'

const ContactContainer = () => {



    return (
      <section className='contact-container'>
        <div>
          <div className='get-in-touch'>
            <h3>Get in touch</h3>
            <p className='contact-message'>Do you want to reach out for contract work or just to connect? Lets get in touch!</p>
          </div>
          <div className='follow-me'>
            <h3>Follow me</h3>
            <ul>
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Turing Alumni Page</li>
            </ul>
          </div>
        </div>
        <div className='send-a-message'>
          <div className='left-section'>
          <div className='send-message-title'>
            <h3>Send me a message</h3>
            <p>(All fields are required)</p>
          </div>
            <h4>Who are you?</h4>
            <p>Name, Company, how should I call you</p>
            <input type='text'></input> 
            <h4>What is your request about?</h4>
            <p>Project work, potential opportunities, etc</p>
            <input type='text'></input>
            <h4>Your email address</h4>
            <p>So that I can contact you</p>
            <input type='text'></input>
          </div>
          <div className='your-message'>
            <h4>Your message</h4>
            <textarea></textarea>
          </div>
        </div>
      </section>
  )

}

export default ContactContainer