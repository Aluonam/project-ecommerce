import React, { useState, useEffect } from 'react'
import styleProductTable from './ProductTable.module.css'
import axios from 'axios';


const ProductTable = () => {

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const apiUrl = 'http://localhost:3032/v1/fakestoreapi/products?limit=20'; 
  //   axios.get(apiUrl)
  //     .then(response => setData(response.data))
  //     .catch(error => console.log('Error detected:', error));
  // }, []);


  return (
    <>
      <div className={styleProductTable.titleOfTheTable}>ProductTable</div>
      <div className={styleProductTable.GlobalProductTable}>

        <table className={styleProductTable.Table}>

          <thead className={styleProductTable.theadTable}>
            <tr className={styleProductTable.trHeadTable}>
              <th className={styleProductTable.columnNameProduct}>nombre del producto</th>
              <th className={styleProductTable.columnCategory}>categoría</th>
              <th className={styleProductTable.columnPrice}>precio</th>
            </tr>
          </thead>

          <tbody className={styleProductTable.tbodyTable}>
            <tr className={styleProductTable.trBodyTable}>
              <td className={styleProductTable.columnNameProduct}>producto 1</td>
              <td className={styleProductTable.columnCategory}>categoría 1</td>
              <td className={styleProductTable.columnPrice}>precio 1</td>
            </tr>
          </tbody>

        </table>

      </div>
    </>

  )
}

export default ProductTable