import React from 'react'
import styleProductTable from './ProductTable.module.css'


const ProductTable = () => {
  return (
    <>
    <div className={styleProductTable.titleOfTheTable}>ProductTable</div>
     <div className={styleProductTable.GlobalProductTable}>
        
        <table className={styleProductTable.Table}>
            <thead className={styleProductTable.theadTable}>
                
                    <th className={styleProductTable.columnNameProduct}>nombre del producto</th>
                    <th className={styleProductTable.columnCategory}>categoría</th>
                    <th className={styleProductTable.columnPrice}>precio</th>
                
            </thead>
            <tbody className={styleProductTable.tbodyTable}>
                
                    <td className={styleProductTable.columnNameProduct}>producto 1</td>
                    <td className={styleProductTable.columnCategory}>categoría 1</td>
                    <td className={styleProductTable.columnPrice}>precio 1</td>
                
            </tbody>
            
        </table>
    
    </div>
    </>
   
  )
}

export default ProductTable