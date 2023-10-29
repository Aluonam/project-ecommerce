import React from 'react'
import stylePagination from './Pagination.module.css'

const Pagination = ({paginationData, seturlEndData}) => {
  
  const loadPrev = paginationData.linksPagination?.prevPage
  const loadNext = paginationData.linksPagination?.nextPage

  
  const handlePage = (endURL)=>{
    seturlEndData(endURL)
  }

  return (
    <div className={stylePagination.prueba}>
      {/* programación defensiva no mostrará el botón si recibe false al comprobar prevPage */}
      {loadPrev && <button className={stylePagination.buttonPagination} onClick={()=>handlePage(paginationData.linksPagination.prevPage)}>pag ant</button>} 
      <div> {paginationData.pageData?.actualPage} de {paginationData.pageData?.totalPages} </div>
      {loadNext && <button className={stylePagination.buttonPagination} onClick={()=>{handlePage(paginationData.linksPagination?.nextPage)}}>pag sig</button>}
    </div>
  )
}

export default Pagination