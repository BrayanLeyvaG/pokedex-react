import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './PokemonsInfo.css'

export const PokemonsInfo = () => {
  const [pokemonInfo, setPokemonInfo] = useState({})
    const {id} = useParams()

    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemonInfo(res.data))
    }, [])

    function typeColor() {
      let color = "white"
      switch (pokemonInfo.types?.[0].type.name) {
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
    <div className='all-detail'>
      <img src={pokemonInfo.sprites?.other["official-artwork"].front_default} alt={`${id} image`}></img>
      <div className='bg-color-detail' style={{backgroundColor:`${typeColor()}`}}>
        <div className='bg-white-detail'>
          <div className='detail-content'>
            <span className='id-number' style={fontColor}>#{pokemonInfo.id}</span>
            <div className='name-separator'>
              <div className='separator'></div>
              <h3 className='pokemon-name-detail' style={fontColor}>{`${pokemonInfo.forms?.[0].name.charAt(0).toUpperCase()}${pokemonInfo.forms?.[0].name.slice(1)}`}</h3>
              <div className='separator'></div>
            </div>
            <div>
              <div>
                <span>Weight</span>
                <span>{pokemonInfo.weight} hectograms</span>
              </div>
              <div>
                <span>Height</span>
                <span>{pokemonInfo.height} decimetres</span>
              </div>
            </div>
            <div>
              <span>Type</span>
              {pokemonInfo.types?.[1]?.type.name ? <div><span>{`${pokemonInfo.types?.[0].type.name.charAt(0).toUpperCase()}${pokemonInfo.types?.[0].type.name.slice(1)}`}</span><span>{`${pokemonInfo.types?.[1].type.name.charAt(0).toUpperCase()}${pokemonInfo.types?.[1].type.name.slice(1)}`}</span></div>:<span>{`${pokemonInfo.types?.[0].type.name.charAt(0).toUpperCase()}${pokemonInfo.types?.[0].type.name.slice(1)}`}</span>}
            </div>
            <div>
              <span>Abilities</span>
              {pokemonInfo.abilities?.[1]?.ability.name ? <div><span>{`${pokemonInfo.abilities?.[0].ability.name.charAt(0).toUpperCase()}${pokemonInfo.abilities?.[0].ability.name.slice(1)}`}</span><span>{`${pokemonInfo.abilities?.[1].ability.name.charAt(0).toUpperCase()}${pokemonInfo.abilities?.[1].ability.name.slice(1)}`}</span></div>:<span>{`${pokemonInfo.abilities?.[0].ability.name.charAt(0).toUpperCase()}${pokemonInfo.abilities?.[0].ability.name.slice(1)}`}</span>}
            </div>
            <div>
              <span>Stats</span>
              <hr/>
              <div className='pokeball-detail'>
                <div className='ellipse-5'></div>
                <div className='ellipse-6'></div>
                <div className='ellipse-7'></div>
                <div className='vector-10'></div>
                <div className='vector-11'></div>
              </div>
            </div>
            <div>
              <div>
                <span>HP:</span>
                <span>{pokemonInfo.stats?.[0].base_stat}</span>
              </div>
              <div>
                <span>Attack:</span>
                <span>{pokemonInfo.stats?.[1].base_stat}</span>
              </div>
              <div>
                <span>Defense:</span>
                <span>{pokemonInfo.stats?.[2].base_stat}</span>
              </div>
              <div>
                <span>Speed:</span>
                <span>{pokemonInfo.stats?.[5].base_stat}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <span>Movements</span>
          <hr/>
          <div className='pokeball-detail'>
            <div className='ellipse-5'></div>
            <div className='ellipse-6'></div>
            <div className='ellipse-7'></div>
            <div className='vector-10'></div>
            <div className='vector-11'></div>
          </div>
        </div>
        <div>
          {
            pokemonInfo.moves?.map(move => (
              <span key={move.move.name}>{move.move.name}</span>
            ))
          }
        </div>
      </div>
    </div>
  )
}
