import React from 'react'
import stylePagination from './Pagination.module.css'
import axios from 'axios'

const Pagination = ({paginationData, setData, setPaginationData}) => {

  console.log(paginationData, "paginacionnnnn")
  
  const handlePage = (endURL)=>{
    const apiUrl = `http://localhost:3032/v1${endURL}`
    axios.get(apiUrl)
    .then(response => { setData(response.data.apiData.productsData)
                        setPaginationData({
                          pageData : response.data.apiData.paginationData,
                          linksPagination : response.data.links,
                        } )})
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