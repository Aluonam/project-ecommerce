import React from 'react'
import styleCSS from '@/pages/PUBLIC/Components/Products/Products.module.css'


const Products = () => {
  return (
    <div className={styleCSS.products}>
      <div className={styleCSS.products_card}>

          <div className={styleCSS.products_card__title}>
            <h3>Titulillo</h3>
            </div>
          <div className={styleCSS.products_card__img}>
              <img></img>
            </div>
          <div className={styleCSS.products_card__price}>precio</div>

      </div>
    </div>
  )
}

export default Products