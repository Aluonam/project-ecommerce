import React from 'react'
import stylePagination from './Pagination.module.css'

const Pagination = () => {
  return (
    <div className={stylePagination.prueba}>
      <button>pag anterior</button>
      <div>pag actual</div>
      <button>pag siguiente</button>
    </div>
  )
}

export default Pagination