import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {PokemonCard} from './PokemonCard'
import './Pokemons.css'
import { SearchPokemon } from './SearchPokemon'

export const Pokemons = () => {
  const userName = useSelector(state => state.userName)
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(true) 



  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
      .then(res => setPokemons(res.data.results))
      .then(() => setIsLoading(false))
  }, [])

  

  return (
    <div className='pokemons-main'>
      <p className='welcome-p'>
        <b>Welcome {userName},</b> here you would find your favorite pokemon.
      </p>
      <SearchPokemon/>
      {isLoading ?
      <div className="wrapper">
        <div className="pokeball">
        </div>
      </div> : 
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.url} className='all-card'>
            <Link className='link-cards' to={`/pokemons/${pokemon.name}`}><PokemonCard url={pokemon.url}/></Link>
          </li>
        ))}
      </ul>}
    </div>
  )
}
