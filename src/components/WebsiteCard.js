import {NavLink} from 'react-router-dom'
import './WebsiteCardStyles.css'

import React from 'react'

const WebsiteCard = (props) => {
  return (
    <div className="project-card">
        <img src = {props.imgSrc} alt="project website" />
            <h1 className="project-title">{props.title}</h1>
                <div className="project-details">
                    <p className="project-text">{props.text}</p>
                    <div className="project-buttons">
                        <NavLink to={props.view} className="btn">View</NavLink>
                        <NavLink to={props.source} className="btn">Source</NavLink>
                    </div>
             </div>
        </div>
    )
}

export default WebsiteCard