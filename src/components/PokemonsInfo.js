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

    //pokemonInfo.types?.[0].type.name

    function typeColor(type) {
      let color = "white"
      switch (type) {
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
      color:`${typeColor(pokemonInfo.types?.[0].type.name)}`
    }

    function statsPercentage(index) {
      return `${(100/150)*(pokemonInfo.stats?.[index].base_stat)}%` 
    }

  return (
    <div className='all-detail'>
      <img src={pokemonInfo.sprites?.other["official-artwork"].front_default} alt={`${id} image`}></img>
      <div className='bg-color-detail' style={{backgroundColor:`${typeColor(pokemonInfo.types?.[0].type.name)}`}}>
        <div className='bg-white-detail'>
          <div className='detail-content'>
            <span className='id-number' style={fontColor}>#{pokemonInfo.id}</span>
            <div className='all-separator'>
              <div className='separator'></div>
              <h3 className='pokemon-name-detail' style={fontColor}>{`${pokemonInfo.forms?.[0].name.charAt(0).toUpperCase()}${pokemonInfo.forms?.[0].name.slice(1)}`}</h3>
              <div className='separator'></div>
            </div>
            <div className='pokemon-measures'>
              <div className='wh-container'>
                <span className='tm-measure'>Weight</span>
                <span className='qty-measure'>{pokemonInfo.weight}</span>
                <span className='tm-measure'>hectograms</span>
              </div>
              <div className='wh-container'>
                <span className='tm-measure'>Height</span>
                <span className='qty-measure'>{pokemonInfo.height}</span>
                <span className='tm-measure'>decimetres</span>
              </div>
            </div>
            <div className='type-ab-container'>
              <div className='tyab-container'>
                <span>Type</span>
                {pokemonInfo.types?.[1]?.type.name ? <div className='ta-container-details'><span style={{color: 'white',backgroundColor:`${typeColor(pokemonInfo.types?.[0].type.name)}`}} className='ta-boxes'>{`${pokemonInfo.types?.[0].type.name.charAt(0).toUpperCase()}${pokemonInfo.types?.[0].type.name.slice(1)}`}</span><span style={{color: 'white',backgroundColor:`${typeColor(pokemonInfo.types?.[1].type.name)}`}} className='ta-boxes'>{`${pokemonInfo.types?.[1].type.name.charAt(0).toUpperCase()}${pokemonInfo.types?.[1].type.name.slice(1)}`}</span></div>:<span style={{color: 'white',backgroundColor:`${typeColor(pokemonInfo.types?.[0].type.name)}`}} className='ta-boxes'>{`${pokemonInfo.types?.[0].type.name.charAt(0).toUpperCase()}${pokemonInfo.types?.[0].type.name.slice(1)}`}</span>}
              </div>
              <div className='tyab-container'>
                <span>Abilities</span>
                {pokemonInfo.abilities?.[1]?.ability.name ? <div className='ta-container-details'><span className='ta-boxes'>{`${pokemonInfo.abilities?.[0].ability.name.charAt(0).toUpperCase()}${pokemonInfo.abilities?.[0].ability.name.slice(1)}`}</span><span className='ta-boxes'>{`${pokemonInfo.abilities?.[1].ability.name.charAt(0).toUpperCase()}${pokemonInfo.abilities?.[1].ability.name.slice(1)}`}</span></div>:<span className='ta-boxes'>{`${pokemonInfo.abilities?.[0].ability.name.charAt(0).toUpperCase()}${pokemonInfo.abilities?.[0].ability.name.slice(1)}`}</span>}
              </div>
            </div>
            <div className='all-separator'>
              <span className='separator-title'>Stats</span>
              <div className='separator2'/>
              <div className='pokeball-detail'>
                <div className='ellipse-5'>
                <div className='vector-10'></div>
                  <div className='ellipse-6'>
                    <div className='ellipse-7'></div>
                  </div>
                <div className='vector-11'></div>
                </div>
              </div>
            </div>
            <div className='main-stats'>
              <div className='ind-container'>
                <div className='ind-stats'>
                  <span>HP</span>
                  <span>{pokemonInfo.stats?.[0].base_stat} / 150</span>
                </div>
                <div className='bar'>
                  <div className='ind-bar' style={{width:`${statsPercentage(0)}`}}></div>
                </div>
              </div>
              <div className='ind-container'>
                <div className='ind-stats'>
                  <span>Attack</span>
                  <span>{pokemonInfo.stats?.[1].base_stat} / 150</span>
                </div>
                <div className='bar'>
                  <div className='ind-bar' style={{width:`${statsPercentage(1)}`}}></div>
                </div>
              </div>
              <div className='ind-container'>
                <div className='ind-stats'>
                  <span>Defense</span>
                  <span>{pokemonInfo.stats?.[2].base_stat} / 150</span>
                </div>
                <div className='bar'>
                  <div className='ind-bar' style={{width:`${statsPercentage(2)}`}}></div>
                </div>
              </div>
              <div className='ind-container'>
                <div className='ind-stats'>
                  <span>Speed</span>
                  <span>{pokemonInfo.stats?.[5].base_stat} / 150</span>
                </div>
                <div className='bar'>
                  <div className='ind-bar' style={{width:`${statsPercentage(5)}`}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-container2'>
        <div className='all-separator'>
          <span className='separator-title'>Moves</span>
          <div className='separator2'/>
          <div className='pokeball-detail'>
              <div className='ellipse-5'>
              <div className='vector-10'></div>
                <div className='ellipse-6'>
                  <div className='ellipse-7'></div>
                </div>
              <div className='vector-11'></div>
              </div>
            </div>
        </div>
        <div className='moves-container'>
          {
            pokemonInfo.moves?.map(move => (
              <span key={move.move.name} className='ind-moves'>{move.move.name}</span>
            ))
          }
        </div>
      </div>
    </div>
  )
}
