import React from 'react'
import './Pagination.css'

export const Pagination = ({pokePerPage, totalPokes, paginate}) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPokes / pokePerPage); i++) {
        pageNumbers.push(i)
        
    }


  return (
    <div className='pagination-container'>
        <ul>
            {pageNumbers.map(number =>(
                <li key={number}>
                    <a onClick={(e) =>{e.preventDefault(); paginate(number)}} href='!#'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}
