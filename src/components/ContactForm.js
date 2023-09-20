import React,{useState} from 'react'
import {FaInstagram,FaLinkedin,FaPhoneAlt,FaTwitter,FaGithub} from 'react-icons/fa'
import {BsFillSendFill} from 'react-icons/bs'
import './ContactFormStyles.css'

const ContactForm = () => {
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    message:''
  })
  const [formErrors,setFormErrors] = useState({
    name:'',
    email:'',
    message:''
  })
  
  const validateForm = () => {
    let isValid = true
    const newErrors = {...formData}

    if(!formData.name){
      newErrors.name = 'Name is required'
      isValid = false
    }else {
      newErrors.name = ''
    }
    if(!formData.email){
      newErrors.email = 'Email is required'
      isValid = false
    }else {
      newErrors.email = ''
    }
    if(!formData.message){
      newErrors.message = 'Message is required'
      isValid = false
    }else {
      newErrors.message = ''
    }
    setFormErrors(newErrors)
    return isValid
  }

  const onHandleChange = (e) => {
    const {name,value} = e.target
    setFormData((prevData) => ({
      ...prevData,[name] : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(validateForm()){
      console.log('form submitted:',formData)
      setFormData({
        name:'',
        email:'',
        message:''
      })
    }
  }
  
  return (
    <div className='container'>
      <h1 className='heading'>Contact Me</h1>
      <div className='details'>
      <p><BsFillSendFill className='icon'/>bheriusha@gmail.com</p>
      <p><FaPhoneAlt className='icon'/>9959118425</p>
      </div>
      <div className='social-icons'>
        <a href="https://twitter.com/"><FaTwitter className='icon'/></a>
        <a href="https://www.linkedin.com/feed/"><FaLinkedin className='icon'/></a>
        <a href="https://instagram.com/"><FaInstagram className='icon'/></a>
        <a href="https://github.com/"><FaGithub className='icon'/></a>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">NAME</label>
          <input type="text" id="name" value={formData.name} onChange={onHandleChange} required />
          {formData.name && 
          <div className='error'>{formErrors.name}</div>
          }
        </div>
        <div>
          <label htmlFor="email">EMAIL</label>
          <input type="text" id="email" value={formData.email} onChange={onHandleChange} required />
          {formData.email && 
          <div className='error'>{formErrors.email}</div>
          }
        </div>
        <div>
          <label htmlFor="message">MESSAGE</label>
          <textarea type="text" id="message" value={formData.message} onChange={onHandleChange} required />
          {formData.message && 
          <div className='error'>{formErrors.message}</div>
          }
        </div>
        <div className='btn-container'>
        <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm

/*import './ContactFormStyles.css'
import {FaTwitter,FaLinkedin,FaInstagram, FaGithub} from 'react-icons/fa'
import {BsTelephoneFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'

import React from 'react'

const Form = () => {
  return (
    <div className="contact">
      <div className='container'>
        <div className='row'>
          <div className='contact-left'>
            <h1 className='heading'>Contact Me</h1>
            <div className='details'>
            <p><GrMail className='icon'/>bheriusha@gmail.com</p>
            <p><BsTelephoneFill className='icon'/>+91 9959118425</p>
            </div>
            <div className='social-icons'>
              <a href="https://twitter.com/"><FaTwitter className='icon'/></a>
              <a href="https://www.linkedin.com/feed/"><FaLinkedin className='icon'/></a>
              <a href="https://instagram.com/"><FaInstagram className='icon'/></a>
              <a href="https://github.com/"><FaGithub className='icon'/></a>
            </div>
            <div className='button'>
            <a href = "file:///C:/Users/DELL/Desktop/Resume.pdf" download className='btn btn2'>DOWNLOAD CV</a>
            </div>
          </div>
          <div className='contact-right'>
          <form>
            <label>Name</label>
            <input type="text" name="Name" placeholder='Your Name' required />
            <label>Email</label>
            <input type="email" name="Email" placeholder='Your Email' required />
            <label>Message</label>
            <textarea name="message" rows="6" cols="35" placeholder="Type your message here"></textarea>
            <button type="submit" className='btn'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form*/