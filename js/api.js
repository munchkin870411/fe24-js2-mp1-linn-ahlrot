import { Product } from "./products.js";

export async function fetchProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products.map((product) => new Product(product));
}

export function filterProducts(products, category) {
  if (category === "all") {
    return products;
  } else if (category === "under10") {
    return products.filter((products) => products.price < 10);
  } else {
    return products.filter((products) => products.category === category);
  }
}

export function sortProducts(products, sortBy) {
  return products.slice().sort((a, b) => {
    if (sortBy === "lowPrice") {
      return a.price - b.price;
    } else if (sortBy === "highPrice") {
      return b.price - a.price;
    } else if (sortBy === "highRating") {
      return b.rating - a.rating;
    } else if (sortBy === "lowRating") {
      return a.rating - b.rating;
    }
  });
}
