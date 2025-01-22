/* A webshop (dummyjson.com API) that has a list of products with title, image, stock, price with discount and rating. 
The user can filter the products by category or under 10:- and sort them by price or rating. 
The user can also add a product to the cart. When a product is added to the cart, the stock gets be updated. 
If the stock is 0 an alert will be shown. 

I used AI to help me with the sorting and filtering of the products and other little things that I was stuck on.
The css is mostly made by AI, I just added some things to make it look better. */

import { filterProducts, sortProducts, fetchProducts } from "../js/api.js";
let PRODUCTS;

document.querySelector("#filters").addEventListener("submit", (event) => {
  event.preventDefault();
  const categoryFilter = document.querySelector("#categoryFilter").value;
  const sortFilter = document.querySelector("#sortFilter").value;
  const filteredProducts = filterProducts(PRODUCTS, categoryFilter);
  const sortedProducts = sortProducts(filteredProducts, sortFilter);
  renderProducts(sortedProducts);
});

function renderProducts(products) {
  const productContainer = document.querySelector("#productContainer");
  productContainer.innerHTML = "";
  products.forEach((product) => {
    productContainer.appendChild(product.renderCard());
  });
}

async function main() {
  PRODUCTS = await fetchProducts();
  renderProducts(PRODUCTS);
}

main();
filters.reset();
