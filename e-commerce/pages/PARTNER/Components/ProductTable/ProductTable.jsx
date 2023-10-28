import React from 'react'
import styleProductTable from './ProductTable.module.css'


const ProductTable = () => {
  return (
    <div className={styleProductTable.GlobalProductTable}>
        <div>ProductTable</div>
        <table>
            <thead>
                <tr>
                    <th>nombre del producto</th>
                    <th>categoría</th>
                    <th>precio</th>
                </tr>
                <tr>
                    <td>producto 1</td>
                    <td>categoría 1</td>
                    <td>precio 1</td>
                </tr>

            </thead>
        </table>
    
    </div>
  )
}

export default ProductTable