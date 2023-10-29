import React from 'react'
import stylePagination from './Pagination.module.css'
import axios from 'axios'

const Pagination = ({paginationData, seturlEndData}) => {
  

  
  const handlePage = (endURL)=>{
    seturlEndData(endURL)
  }

  return (
    <div className={stylePagination.prueba}>
      {/* programación defensiva no mostrará el botón si recibe false al comprobar prevPage */}
     {paginationData.linksPagination?.prevPage && <button className={stylePagination.buttonPagination} onClick={()=>handlePage(paginationData.linksPagination.prevPage)}>pag ant</button>} 
      <div> {paginationData.pageData?.actualPage} de {paginationData.pageData?.totalPages} </div>
      {paginationData.linksPagination?.nextPage && <button className={stylePagination.buttonPagination} onClick={()=>{handlePage(paginationData.linksPagination?.nextPage)}}>pag sig</button>}
    </div>
  )
}

export default Pagination