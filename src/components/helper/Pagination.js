import React from 'react'
import './Pagination.css'

export const Pagination = ({pokePerPage, totalPokes, paginateNext, paginatePrev, currentPage}) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPokes / pokePerPage); i++) {
        pageNumbers.push(i)
        
    }


  return (
    <div className='pagination-container'>
        <div className='buttons-container'>
            <button disabled={currentPage === 1 ? true : false} className='btn-pagination' onClick={paginatePrev}><i className="fas fa-chevron-left"></i></button>
            <span className='page-number'>{currentPage}</span>
            <button disabled={currentPage === pageNumbers.length ? true : false} className='btn-pagination' onClick={paginateNext}><i className="fas fa-chevron-right"></i></button>
        </div>
    </div>
  )
}
