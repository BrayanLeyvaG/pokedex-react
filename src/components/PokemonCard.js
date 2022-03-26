import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './PokemonCard.css'

export const PokemonCard = (url) => {
  const [pokemonData, setPokemonData] = useState({})

  useEffect(() => {
    axios.get(`${url.url}`)
      .then(res => {
        setPokemonData(res.data)
        console.log(res.data)
      })
  }, [url])

  function typeColor() {
    let color = "yellow"
    switch (pokemonData.types?.[0].type.name) {
      case 'normal':
        color = "#735259";
        break;
      case 'fighting':
        color = '#96402A';
        break;
      case 'flying':
        color = '#E7FDFC';
        break;
      case 'poison':
        color = '#5B3184';
        break;
      case 'ground':
        color = '#654008';
        break;
      case 'rock':
        color = '#7E7E7E';
        break;
      case 'bug':
        color = '#4AB648';
        break;
      case 'ghost':
        color = '#323569';
        break;
      case 'steel':
        color = '#5E736C';
        break;
      case 'fire':
        color = '#E75C35';
        break;
      case 'water':
        color = '#1479FB';
        break;
      case 'grass':
        color = '#B1DBBC';
        break;
      case 'electric':
        color = '#eed535';
        break;
      case 'psychic':
        color = '#f366b9';
        break;
      case 'ice':
        color = '#6FBEDF';
        break;
      case 'dragon':
        color = '#478A93';
        break;
      case 'dark':
        color = '#0B0E0D';
        break;
      case 'fairy':
        color = '#971B45';
        break;
      case 'unknown':
        color = '#a4acaf';
        break;
      case 'shadow':
        color = '#707070 ';
        break;
        default:
          color = "white";
    }
    return color
  }

  return ( 

    <div className='card-container' style={{backgroundColor:`${typeColor()}`}}>
      <img src={pokemonData.sprites?.other["official-artwork"].front_default}></img>
      <h4>{pokemonData.forms?.[0].name}</h4>
      <p>Type</p>
      <p> {pokemonData.types?.[1]?.type.name ? `${pokemonData.types?.[0].type.name} / ${pokemonData.types?.[1]?.type.name}` : pokemonData.types?.[0].type.name}</p>
      <hr/>
      <div className='stats-card'>
        <div className="hp-card">
          <p>HP</p>
          <p>{pokemonData.stats?.[0].base_stat}</p>
        </div>
        <div className="attack-card">
          <p>Attack</p>
          <p>{pokemonData.stats?.[1].base_stat}</p>
        </div>
        <div className="defense-card">
          <p>Defense</p>
          <p>{pokemonData.stats?.[2].base_stat}</p>
        </div>
        <div className="defense-card">
          <p>Speed</p>
          <p>{pokemonData.stats?.[5].base_stat}</p>
        </div>
      </div>
    </div>
  )
}
