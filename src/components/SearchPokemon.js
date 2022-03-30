import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const SearchPokemon = () => {
    const [types, setTypes] = useState([])
    const [typeSelected, setTypeSelected] = useState(null)

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setTypes(res.data.results))
    }, [])
    
    function selected(e) {
        console.log(e.target.value)
    }

  return (
    <div>
        <form className='form-search'>
            <div>
            <input placeholder='Search for a pokemon'/>
            <button>Search</button>
            </div>
            <select name='typeFilter' onChange={selected}>
                <option value="0">All types</option>
                {types.map(type =>(
                    <option value={type.name} key={type.url} >{type.name}</option>
                ))}
            </select>
        </form>
    </div>
  )
}
