import React from 'react'
import Navbar from '../components/Navbar';
import AboutContent from '../components/AboutContent'
import Background2 from '../components/Background2';

const About = () => {
  return (
    <div>
      <Navbar />
      <Background2 heading="ABOUT" text="I am a MERN Full Stack Developer"/>
      <AboutContent />
    </div>
  )
}

export default About