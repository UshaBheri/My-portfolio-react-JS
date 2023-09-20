import React from 'react'
import Navbar from '../components/Navbar';
import Background2 from '../components/Background2';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <Background2 heading="PROJECTS" text="Some of my most recent works"/>
      <Work />
    </div>
  )
}

export default Project