import React from 'react'
import Navbar from '../components/Navbar'

import Background2 from '../components/Background2'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Background2 heading="Contact"
      text="Let's have a chat" />
      <ContactForm />
      
    </div>
  )
}

export default Contact