import React, {useEffect, useState} from 'react'
import styleCSS from '@/pages/PUBLIC/Components/Filter/Filter.module.css'
import Button from '../Button/Button'
import axios from 'axios'

const Filter = ({setData}) => {

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
        <Button buttonName={actualElement.categoryName} categoryId={actualElement.categoryId} setData={setData}></Button>
    )
  })


  return (
    <div className={styleCSS.filter}>
      {showCategory}
    </div>
  )
}

export default Filter