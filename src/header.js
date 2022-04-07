import React, { Component } from 'react'
import './header.css';

export default class header extends Component {
  render() {
    return (
      <div className='header'>
       <div className='img_logo'>
          <div  className='img'/>
       </div>
       <div className='text_logo'>
           <h1>Currency tracking</h1>
       </div>
      </div>
    )
  }
}
