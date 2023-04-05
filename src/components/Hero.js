import React from 'react'
import logo from './assets/logo.svg'
import './style.css'
function Hero() {
  return (
    <div className='hero'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="hero-title">
        <h1>HOLA MUNDO SOY PABLO FERRARI, DESARROLLADOR WEB FRONT END<span>&#160;</span></h1>
      </div>
      </div>
  )
}

export default Hero