import './BackgroundStyles2.css'
import {Component} from 'react'

import React from 'react'

class Background2 extends Component {
    render(){
        return (
            <div className='background2'>
                <div className='heading'>
                   <h1>{this.props.heading}</h1>
                   <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default Background2