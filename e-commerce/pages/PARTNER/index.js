import Head from 'next/head'
import ProductTable from './Components/ProductTable/ProductTable'
import StylePartner from './stylePartner.module.css'
import Pagination from './Components/Pagination/Pagination'
import axios from 'axios';
import React, {useState, useEffect} from 'react';

export default function Home() {

  const [data, setData] = useState([]);
  const [paginationData, setPaginationData] = useState([])
  const [urlEndData, seturlEndData] = useState("/fakestoreapi/products?limit=10&pagination=1")

  useEffect(() => {
    const apiUrl = `http://localhost:3032/v1${urlEndData}`; 
    axios.get(apiUrl)
      .then(response => {
                          setData(response.data.apiData.productsData)
                          setPaginationData({
                            pageData : response.data.apiData.paginationData,
                            linksPagination : response.data.links,
                          })
                        })
      .catch(error => console.log('Error detected:', error));
  }, [urlEndData]);




  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       <div className={StylePartner.titlePartner}>Productos del proveedor</div>
       <ProductTable data={data} ></ProductTable>
       <Pagination paginationData={paginationData} seturlEndData={seturlEndData}></Pagination>
      </main>
    </>
  )
}