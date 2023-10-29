import React from 'react'
import styleProductTable from './ProductTable.module.css'



const ProductTable = ({data}) => {

 
  const dataProductTable = data.map((actualProduct)=>{
    return(
      
        <tr className={styleProductTable.trBodyTable}>
              <td className={styleProductTable.columnId}>{actualProduct.id}</td>
              <td className={styleProductTable.columnNameProduct}>{actualProduct.title}</td>
              <td className={styleProductTable.columnCategory}>{actualProduct.category.name}</td>
              <td className={styleProductTable.columnPrice}>{actualProduct.price}$</td>
        </tr>
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
          <tbody className={styleProductTable.tbodyTable}>
            {dataProductTable}
          </tbody>
        </table>
      </div>
    </>

  )
}

export default ProductTable