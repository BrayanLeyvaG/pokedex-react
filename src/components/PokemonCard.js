import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './PokemonCard.css'

export const PokemonCard = (url) => {
  const [pokemonData, setPokemonData] = useState({})

  useEffect(() => {
    axios.get(`${url.url}`)
      .then(res => {
        setPokemonData(res.data)
      })
  }, [url])

  function typeColor() {
    let color = "white"
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
        color = '#8fbf18';
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
        color = '#62b778';
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

  const fontColor = {
    color:`${typeColor()}`
  }

  return ( 

    <div className='card-container' style={{backgroundColor:`${typeColor()}`}}>
      <div className='white-bg'>
      </div>
      <img src={pokemonData.sprites?.other["official-artwork"].front_default}></img>
      <h4 className='card-p-name' style={fontColor}>{`${pokemonData.forms?.[0].name.charAt(0).toUpperCase()}${pokemonData.forms?.[0].name.slice(1)}`}</h4>
      <p className='card-title-stat'>Type</p>
      <p className='card-type-title'> {pokemonData.types?.[1]?.type.name ? `${pokemonData.types?.[0].type.name.charAt(0).toUpperCase()}${pokemonData.types?.[0].type.name.slice(1)} / ${pokemonData.types?.[1]?.type.name.charAt(0).toUpperCase()}${pokemonData.types?.[1]?.type.name.slice(1)}` : `${pokemonData.types?.[0].type.name.charAt(0).toUpperCase()}${pokemonData.types?.[0].type.name.slice(1)}`}</p>
      <hr className='card-separator'/>
      <div className='stats-card'>
        <div className="hp-card">
          <p className='card-title-stat'>HP</p>
          <p style={fontColor} className='card-ind-stat'>{pokemonData.stats?.[0].base_stat}</p>
        </div>
        <div className="attack-card">
          <p className='card-title-stat'>ATTACK</p>
          <p style={fontColor} className='card-ind-stat'>{pokemonData.stats?.[1].base_stat}</p>
        </div>
        <div className="defense-card">
          <p className='card-title-stat'>DEFENSE</p>
          <p style={fontColor} className='card-ind-stat'>{pokemonData.stats?.[2].base_stat}</p>
        </div>
        <div className="defense-card">
          <p className='card-title-stat'>SPEED</p>
          <p style={fontColor} className='card-ind-stat'>{pokemonData.stats?.[5].base_stat}</p>
        </div>
      </div>
    </div>
  )
}
