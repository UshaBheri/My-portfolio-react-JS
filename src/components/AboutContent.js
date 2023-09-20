import {useState} from 'react'
import React from 'react'
import './AboutStyles.css'

const AboutContent = () => {
  const [activeTab, setActiveTab] = useState('skills')

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  return (
    <div className="about">
      <div className="container">
        <div className='row'>
          <div className='about-col-1'>
            <img src = "https://res.cloudinary.com/ddtoi0jtp/image/upload/v1692165762/pic_d5dq0c.jpg" alt="true" />
          </div>
          <div className='about-col-2'>
            <h1>About Me</h1>
            <p>I'm a MERN Full Stack Developer and passionate about designing websites. I am expertise in frontend, backend, and databases. I learnt new things everday.</p>
          <div>
          <div className='tab-titles'>
            <p
              className={activeTab === 'skills' ? 'tab-links active-link' : 'tab-links'}
              onClick={() => handleTabClick('skills')}
            >
            Skills
            </p>
            <p
             className={activeTab === 'education' ? 'tab-links active-link' : 'tab-links'}
             onClick={() => handleTabClick('education')}
            >
            Education
            </p>
          </div>
          <div className={activeTab === 'skills' ? 'tab-content active-tab' : 'tab-content'} id='skills'>
          <ul>
             <li><span>Frontend</span><br/>HTML, CSS, JavaScript, Bootstrap, React Js</li>
             <li><span>Backend</span><br/>Python, Node JS, Express JS</li>
             <li><span>Database</span><br/>SQL</li>
          </ul>
         </div>
         <div className={activeTab === 'education' ? 'tab-content active-tab' : 'tab-content'} id='education'>
         <ul>
           <li><span>2019</span><br/>B-Tech in ECE from Sri Sivani College of Engineering, A.P</li>
           <li><span>2015</span><br/>Intermediate from Kakathiya Junior College, A.P</li>
           <li><span>2013</span><br/>SSC from T.P.M.High school, A.P</li>
         </ul>
         </div>
         </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default AboutContent


