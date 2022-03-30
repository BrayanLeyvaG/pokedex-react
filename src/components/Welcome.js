import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Welcome.css'
import logo from '../img/pokeLogo.svg'


export const Welcome = () => {
    const [userName, setUserName] = useState("")
    const dispatch = useDispatch()

    const navigate = useNavigate()


    function submit(e) {
        e.preventDefault()
        dispatch({
            type: "GET_USERNAME",
            payload: userName
        })
        navigate("/pokemons")

    }

  return (
    <div className='welcome-container'>
        <img src={logo} alt='Pokedex-logo'></img>
        <h5>Welcome trainer!</h5>
        <p>What's your name?</p>
        <form onSubmit={submit} className='form-welcome'>
            <input type="text" onChange={e => setUserName(e.target.value)} value={userName} placeholder="Type your name"/>
            <button>Start</button>
        </form>
        <div className='red-line'></div>
        <div className='black-line'></div>
        <div className='pokeball-welcome'>
            <div className="big-ball"><div className="small-ball"></div></div>
            
        </div>
    </div>
  )
}
