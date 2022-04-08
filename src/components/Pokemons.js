import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {PokemonCard} from './PokemonCard'
import './Pokemons.css'
import { SearchPokemon } from './SearchPokemon'
import { Pagination } from './helper/Pagination'

export const Pokemons = () => {
  const userName = useSelector(state => state.userName)
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(true) 

  //PAGINATION
  const [currentPage, setCurrentPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(12)
  const indexOfLastPoke = currentPage * pokePerPage
  const indexOfFirstPoke  = indexOfLastPoke - pokePerPage
  const currentPoke = pokemons.slice(indexOfFirstPoke, indexOfLastPoke)

  function paginate(pageNumber) {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    let isMounted = true
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=1126&offset=0')
      .then((res) => {
        if (isMounted) {
          setPokemons(res.data.results)
          setIsLoading(false)
        }
      })
      return () => {
        isMounted = false
      }
  }, [])


  return (
    <div className='pokemons-main'>
      <p className='welcome-p'>
        <b>Welcome {userName},</b> here you would find your favorite pokemon.
      </p>
      
      <SearchPokemon setSearchPokemons={setPokemons}/>
      {isLoading ?
      <div className="wrapper">
        <div className="pokeball">
        </div>
      </div> : 
      <ul className='cards-container'>
        {currentPoke.map(pokemon => (
          <li key={pokemon.url} className='all-card'>
            <Link className='link-cards' to={`/pokemons/${pokemon.name}`}><PokemonCard url={pokemon.url}/></Link>
          </li>
        ))}
      </ul>}
      <Pagination pokePerPage={pokePerPage} totalPokes={pokemons.length} paginate={paginate}/>
    </div>
  )
}
