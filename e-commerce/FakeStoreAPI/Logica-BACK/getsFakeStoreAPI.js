const express = require("express");
const app = express();

const productsDataAPI = require("../DatosModificados/fakeApiData.json");

// http://localhost:3032/v1/fakestoreapi/products?limit=1
// rootPath (base de la ruta) = http://localhost:3032/v1
// params = v1/fakestoreapi/products
// query = ?limit=1  


app.get("/fakestoreapi/products", (req, res) => {
  const { limit } = req.query;
  const limitValue = limit ? parseInt(limit) : undefined;

  let filteredProducts = productsDataAPI;

  if (limitValue) {
    filteredProducts = filteredProducts.slice(0, limitValue);
  }

  res.json(filteredProducts);
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
