import React from 'react'
import WebsiteCard from './WebsiteCard'
import WorkCardData from './WorkCardData';

const work = () => {
  return (
    <div className="website-card">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((value,index) =>{
                return (
                    <WebsiteCard 
                    key={index}
                    imgSrc={value.imgSrc}
                    title={value.title}
                    text={value.text}
                    view={value.view}
                    source={value.source}
                    />
                )
            })}
            
        </div>
    </div>
  )
}

export default work