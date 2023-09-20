import './BackgroundImgStyles.css'; 

import React from 'react'


const BackgroundImg = () => {
  return (
    <div className='background'>
        <div className='card'>
            <img src = "https://res.cloudinary.com/ddtoi0jtp/image/upload/v1689512646/flat-lay-desk-with-laptop-glasses_23-2148284275_pvdefm.avif" className='bg-image' alt = "background logo" />
        </div>
        <div className='content'>
            <p>Hi, I'm <span className='name'>Usha</span></p>
            <h1>Full Stack Developer</h1>
        </div>
    </div>
  )
}

export default BackgroundImg 