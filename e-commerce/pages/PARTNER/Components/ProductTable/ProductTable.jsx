import React, { useState, useEffect } from 'react'
import styleProductTable from './ProductTable.module.css'
import axios from 'axios';


const ProductTable = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3032/v1/fakestoreapi/products?limit=20'; 
    axios.get(apiUrl)
      .then(response => setData(response.data))
      .catch(error => console.log('Error detected:', error));
  }, []);

  const dataProductTable = data.map((actualProduct)=>{
    return(
      <tbody className={styleProductTable.tbodyTable}>
        <tr className={styleProductTable.trBodyTable}>
              <td className={styleProductTable.columnId}>{actualProduct.id}</td>
              <td className={styleProductTable.columnNameProduct}>{actualProduct.title}</td>
              <td className={styleProductTable.columnCategory}>{actualProduct.category.name}</td>
              <td className={styleProductTable.columnPrice}>{actualProduct.price}$</td>
        </tr>
      </tbody>
    )
  })

  return (
    <>
      <div className={styleProductTable.titleOfTheTable}>ProductTable</div>
      <div className={styleProductTable.GlobalProductTable}>

        <table className={styleProductTable.Table}>

          <thead className={styleProductTable.theadTable}>
            <tr className={styleProductTable.trHeadTable}>
              <th className={styleProductTable.columnId}>Id</th>
              <th className={styleProductTable.columnNameProduct}>nombre del producto</th>
              <th className={styleProductTable.columnCategory}>categoría</th>
              <th className={styleProductTable.columnPrice}>precio</th>
            </tr>
          </thead>

          {dataProductTable}

        </table>
      </div>
    </>

  )
}

export default ProductTable