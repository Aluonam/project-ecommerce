import React  from 'react'
import styleCSS from '@/pages/PUBLIC/Components/Products/Products.module.css'


const Products = () => {

  return (
      <div className={styleCSS.products_card}>

          <div className={styleCSS.products_card__title}>
            <h3>Title</h3>
            </div>
          <div className={styleCSS.products_card__imgBox}>
              <img src='https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png' className={styleCSS.products_card__productImg}></img>
            </div>
          <div className={styleCSS.products_card__price}>precio</div>

      </div>
  )
}

export default Products