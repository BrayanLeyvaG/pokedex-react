import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const PokemonsInfo = () => {
  const [pokemonInfo, setPokemonInfo] = useState({})

    const {id} = useParams()

    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemonInfo(res.data))
    }, [])

    console.log(pokemonInfo)
    console.log(pokemonInfo.sprites?.other.home)
  return (
    <div>
      <h3>{id}</h3>
      <img src={pokemonInfo.sprites?.other["official-artwork"].front_default} alt={`${id} image`}></img>
    </div>
  )
}
