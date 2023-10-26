import React, {useEffect, useState} from 'react'
import styleCSS from '@/pages/PUBLIC/Components/Filter/Filter.module.css'
import buttonStyle from '../Button/CategoryButtonStyle.module.css'
import CategoryButton from '../Button/CategoryButton'
import axios from 'axios'

const Filter = ({data, setData}) => {

  const [categoriesProducts, setCategoriesProducts] = useState([])

  //useEffect para que se haga la llamada segun se cargan los filtros
  useEffect(() => {
    const apiUrl = 'http://localhost:3032/v1/fakestoreapi/getAllCategories'; 
    axios.get(apiUrl)
      .then(response => setCategoriesProducts(response.data))
      .catch(error => console.log('Error detected:', error));
  }, [])


  const showCategory = categoriesProducts.map((actualElement)=>{
    return(
        <CategoryButton buttonName={actualElement.categoryName} categoryId={actualElement.categoryId} setData={setData}></CategoryButton>
    )
  })

  const handlePriceLowest = ()=>{
    const copyArr = structuredClone(data);
    const lowestToHigh = copyArr.sort((a,b)=>{return(a.price-b.price)})
    setData(lowestToHigh)
  }
 

  return (
    <div className={styleCSS.filter}>
      {showCategory}
      <button className={buttonStyle.button} onClick={()=>{handlePriceLowest()}}>más baratos primero</button>
    </div>
  )
}

export default Filter