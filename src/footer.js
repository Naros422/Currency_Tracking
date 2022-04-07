import React, { Component } from 'react'
import './footer.css';
export default class footer extends Component {
  render() {
      
    return (
      <div className='footer'>
        <div className='text_log'>
            <h2>2022.Currency.Tracking</h2>
        </div>
        <div>
        <nav className='navig'>
            <ul>
                <li><a href='/'>Главная</a></li>
                <li><a href='/about'>Информация</a></li>
                <li><a href='/footer'>Контакты</a></li>
            </ul>
        </nav>
        </div>
      </div>
    )
  }
}
