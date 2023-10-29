import React from 'react'
import stylePagination from './Pagination.module.css'

const Pagination = () => {
  return (
    <div className={stylePagination.prueba}>
      <button className={stylePagination.buttonPagination}>pag ant</button>
      <div>pag actual</div>
      <button className={stylePagination.buttonPagination}>pag sig</button>
    </div>
  )
}

export default Pagination