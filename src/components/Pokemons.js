import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {PokemonCard} from './PokemonCard'
import './Pokemons.css'

export const Pokemons = () => {
  const userName = useSelector(state => state.userName)
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(res => setPokemons(res.data.results))
  }, [])
  

  return (
    <div className='pokemons-main'>
      <p className='welcome-p'>
        <b>Welcome {userName},</b> here you can find your favorite pokemon
      </p>
      <form className='form-search'>
        <div>
        <input placeholder='Search for a pokemon'/>
        <button>Search</button>
        </div>
        <select><option value="0">All Pokemons</option></select>
      </form>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.url}>
            <Link to={`/pokemons/${pokemon.name}`}><PokemonCard url={pokemon.url}/></Link>
            
          </li>
        ))}
      </ul>
    </div>
  )
}
