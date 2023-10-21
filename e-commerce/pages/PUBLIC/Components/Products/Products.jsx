import React  from 'react'
import styleProduct from '@/pages/PUBLIC/Components/Products/Products.module.css'


const Products = ({productTitle}) => {

  return (
      <div className={styleProduct.products_card}>

          <div className={styleProduct.products_card__title}>
            <h3>{productTitle}</h3>
            </div>
          <div className={styleProduct.products_card__imgBox}>
              {/* <img src='https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png' className={styleProduct.products_card__productImg}></img> */}
              <img src='https://i.pinimg.com/564x/1e/36/7e/1e367e667b0b2b917b1206f6db088cb7.jpg' className={styleProduct.products_card__productImg}></img>
              {/* <img src='http://dealgoritmos.com/wp-content/uploads/2023/05/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png' className={styleProduct.products_card__productImg}></img> */}
           </div>
          <div className={styleProduct.products_card__price}>precio</div>

      </div>
  )
}

export default Products