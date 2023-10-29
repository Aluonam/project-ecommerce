import React from 'react'
import stylePagination from './Pagination.module.css'

const Pagination = ({paginationData}) => {

  console.log(paginationData, "paginacionnnnn")


  return (
    <div className={stylePagination.prueba}>
      <button className={stylePagination.buttonPagination}>pag ant</button>
      <div> {paginationData.pageData.actualPage} de {paginationData.pageData.totalPages} </div>
      <button className={stylePagination.buttonPagination}>pag sig</button>
    </div>
  )
}

export default Pagination