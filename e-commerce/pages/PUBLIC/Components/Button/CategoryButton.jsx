import React from 'react'
import styleCSS from '@/pages/PUBLIC/Components/Button/CategoryButtonStyle.module.css'
import axios from 'axios'

const CategoryButton = ({buttonName, categoryId, setData}) => {

  const handleCallProductCategory = () =>{
    const apiUrl = `http://localhost:3032/v1/fakestoreapi/products/${categoryId}/category`; 
    axios.get(apiUrl)
      .then(response => setData(response.data))
      .catch(error => console.log('Error detected:', error));
  }

  return (
    <>
    <button onClick={()=>{handleCallProductCategory()}} className={styleCSS.button}>{buttonName}</button>
    </>
  )
}

export default CategoryButton