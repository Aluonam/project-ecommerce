import React, { useEffect } from 'react'
import stylePagination from './Pagination.module.css'

const Pagination = ({paginationData}) => {

  console.log(paginationData, "paginacionnnnn")
  
  const handlePage = (endURL)=>{
    const apiUrl = `http://localhost:3032/v1${endURL}`
    axios.get(apiUrl)
    .then(response => {
                      })
  }

  return (
    <div className={stylePagination.prueba}>
      {/* programación defensiva no mostrará el botón si recibe false al comprobar prevPage */}
     {paginationData.links.prevPage && <button className={stylePagination.buttonPagination} onClick={()=>handlePage(paginationData.links.prevPage)}>pag ant</button>} 
      <div> {paginationData.pageData.actualPage} de {paginationData.pageData.totalPages} </div>
      <button className={stylePagination.buttonPagination}>pag sig</button>
    </div>
  )
}

export default Pagination