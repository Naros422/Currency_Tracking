import React, { Component } from 'react'
import './main.css';
export default class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: "",
            currency1: "usd"
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    }
    handleChange(event) {
        this.setState({currency1: event.target.value});
        console.log(this.state.currency1)
      }
    handleChangeInput =(event)=>{
        this.setState({value1:event.target.value});
            console.log(this.state.value1);
      }

  render() {
      const valueF = this.state.value1;
      const currencyS = this.state.currency1;
      let sum = 0;
      if(currencyS=="usd") {
          sum = valueF * 462.50;
      }else if(currencyS=="eur") {
        sum = valueF * 507;
      }else if(currencyS=="rub") {
        sum = valueF * 5.75;
      }else if(currencyS=="cny") {
        sum = valueF * 95;
      }


    return (
      <div className='main'>
        <div className='currency_rate'>
            <div className='kzt'>
            <h2>Курс валют на 08-04-2022 с</h2>
            <img className='kazakh' src='https://storage.ifin.kz/currency/kzt.svg'></img>
            </div>
            <div className='other_cur'>
            <div className='usd'>
                <h3>USD</h3>
                <img className='kazakh' src='https://storage.ifin.kz/currency/usd.svg'></img>

                <p>462.50 тенге</p>
            </div>
            <div className='eur'>
            <h3>EUR</h3>
                <img className='kazakh' src='https://storage.ifin.kz/currency/eur.svg'></img>

                <p>507.00 тенге</p>
            </div>
            <div className='rub'>
            <h3>RUB</h3>
                <img className='kazakh' src='https://storage.ifin.kz/currency/rub.svg'></img>

                <p>5.75 тенге</p>
            </div>
            <div className='cny'>
            <h3>CNY</h3>
                <img className='kazakh' src='https://storage.ifin.kz/currency/cny.svg'></img>

                <p>95.00 тенге</p>
            </div>
            </div>
        </div>
        <div className='currency_converter'>
            <div className='convert_text'><h2>Конвертер валют</h2></div>
            <div className='converter'>
                <input type="number" className='first_in' name='firstValue' value={valueF} onChange={this.handleChangeInput}/>
                <select className='first_sel'>
                    <option value="kzt">KZT</option>
                </select>
                <input type="number" className='second_in' name='secondValue' value={sum}/>
                <select className='second_sel' value={this.state.currency1}  onChange={this.handleChange}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="rub">RUB</option>
                    <option value="cny">CNY</option>
                </select>
            </div>
        </div>
      </div>
    )
  }
}
