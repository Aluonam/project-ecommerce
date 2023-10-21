import React  from 'react'
import styleProduct from '@/pages/PUBLIC/Components/Products/Products.module.css'


const Products = ({productTitle, productImage, productPrice}) => {

  return (
      <div className={styleProduct.products_card}>

          <div className={styleProduct.products_card__title}>
            <h3>{productTitle}</h3>
            </div>
          <div className={styleProduct.products_card__imgBox}>
              <img src={productImage} className={styleProduct.products_card__productImg}></img>
           </div>
          <div className={styleProduct.products_card__price}>{productPrice}$</div>

      </div>
  )
}

export default Products