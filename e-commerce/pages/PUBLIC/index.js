import Head from 'next/head'
import Filter from './Components/Filter/Filter'
import Products from './Components/Products/Products'
import styleCSS from '@/pages/PUBLIC/stylePublic.module.css'
import Title from './Components/Title/Title'
import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function Home() {

  //-------------------consumo API

  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products?limit=·'; 
    axios.get(apiUrl)
      .then(response => setData(response.data))
      .catch(error => console.log('Error detected:', error));
  }, []);

  const actualProduct = data.map((actualElement)=>{
    return(
      <>
      <Products 
          productTitle={actualElement.title}
          productImage={actualElement.image}
          productPrice={actualElement.price}
        ></Products>
      </>
    )
  })

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Title></Title>
       <Filter></Filter>

       <div className={styleCSS.products}>
          
          {actualProduct}
          
        </div>
        
       

    </>
  )
}