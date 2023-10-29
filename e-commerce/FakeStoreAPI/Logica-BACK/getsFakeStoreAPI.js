const express = require("express");
const app = express();

const productsDataAPI = require("../DatosModificados/fakeApiData.json");

// http://localhost:3032/v1/fakestoreapi/products?limit=1 //url de BD
// rootPath (base de la ruta) = http://localhost:3032/v1
// params = v1/fakestoreapi/products
// query = ?limit=1

app.get("/fakestoreapi/products", (req, res) => {

  const { limit, pagination } = req.query;


//Controlamos que si pedimos paginación hemos especificado cuantos elementos queremos por pagina.
    if (pagination && !limit) {
    res.status(400).json({message:"Error en la llamada no se ha especificado cuantos quieres por pagina, para ello usa el limit.",});
    }
//Realizamos toda la logica necesaria para una paginación
    if (pagination) {
      const paginationValue = parseInt(pagination)
      const longPagination = Math.ceil(productsDataAPI.length/limit)
      const initialData = limit*paginationValue - limit
      const finalData = limit*paginationValue
      let pageProducts = productsDataAPI;
      pageProducts = pageProducts.slice(initialData, finalData);

      const prevPage = paginationValue==1?false:`/fakestoreapi/products?limit=${limit}&pagination=${paginationValue-1}`
      const nextPage = paginationValue>=longPagination ?false:`/fakestoreapi/products?limit=${limit}&pagination=${paginationValue+1}`
      const currentPage = `/fakestoreapi/products?limit=${limit}&pagination=${paginationValue}`

      const fulldata = {
        apiData : {
          productsData:pageProducts,
          paginationData:{
            actualPage:paginationValue,
            totalPages:longPagination
          }
        },
        links: {
          prevPage:prevPage,
          currentPage:currentPage,
          nextPage:nextPage
        }
      }
      res.json(fulldata);
    } 
//Toda la logica necesaria si no realizamos una paginación.
    else{
      const limitValue = limit ? parseInt(limit) : undefined;
      let filteredProducts = productsDataAPI;
      if (limitValue) {
        filteredProducts = filteredProducts.slice(0, limitValue);
      } 
      res.json(filteredProducts);
    }

  
    
  
    
 

});





// idDeCategoria : categoryId
app.get("/fakestoreapi/products/:categoryId/category", (req, res) => {
  const categoryId = req.params.categoryId;

  const productsOfCategory = productsDataAPI.filter(
    (actualElement) => actualElement.category.id == categoryId
  );

  res.json(productsOfCategory);
});

app.get("/fakestoreapi/getAllCategories", (req, res) => {
  const categories = [];

  productsDataAPI.map((actualElement, index) => {
    const alreadyExist = categories.some(
      (actE) => actE?.categoryId === actualElement.category.id
    );

    if (!alreadyExist) {
      categories.push({
        categoryId: actualElement.category.id,
        categoryName: actualElement.category.name,
      });
    }
  });

  res.json(categories);
});

module.exports = app;
