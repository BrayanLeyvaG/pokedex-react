import React from 'react'
import './Header.css'
import logo from '../img/pokeLogo.svg'

export const Header = () => {
  return (
    <div className='header'>
        <div className='red-poke'></div>
        <div className="black-poke"></div>
        <img src={logo} alt='Pokedex-logo'></img>
        <div className="outside-ball"><div className="inside-ball"></div></div>
    </div>
  )
}
