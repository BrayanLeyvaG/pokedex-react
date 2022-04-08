import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const SearchPokemon = ({setSearchPokemons}) => {
/*     const [types, setTypes] = useState([]) */
    const [search, setSearch] = useState('')
    const [pokemons, setPokemons] = useState([])
/*     const [pokeTypes, setPokeTypes] = useState([])
    const [typeSelected, setTypeSelected] = useState("") */

/*     useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setTypes(res.data.results))
    }, [])
 */
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1126&offset=0')
          .then(res => setPokemons(res.data.results))
      }, [])

/*     useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/1/`)
            .then(res => setPokeTypes(res.data.pokemon))
            .then(() => console.log(pokeTypes))
    }, [])
     */

    function submitSearch(e) {
        e.preventDefault()
        const listSearch = pokemons.filter(pokemon => pokemon.name.includes(search))
        setSearchPokemons(listSearch)
    }

/*     function selected(e) {
        setTypeSelected(e.target.value)
        console.log(typeSelected)   
    } */

  return (
    <div className='all-search'>
        <form onSubmit={submitSearch} className='form-search'>
            <div className='search-btn'>
            <input className='input-search' required onChange={e => setSearch(e.target.value.toLowerCase())} type='text' value={search} placeholder='Search for a pokemon'/>
            <button>Search</button>
            </div>
{/*             <select name='typeFilter' onChange={selected}>
                <option value="0">All types</option>
                {types.map(type =>(
                    <option value={type.name} key={type.url} >{type.name}</option>
                ))}
            </select> */}
        </form>
    </div>
  )
}
