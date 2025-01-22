export class Product {
  #price;
  #discountPercentage;
  #stock;
  #rating;

  constructor(product) {
    //public
    this.title = product.title;
    this.thumbnail = product.thumbnail;
    this.category = product.category;
    //private
    this.#price = product.price;
    this.#discountPercentage = product.discountPercentage;
    this.#stock = product.stock;
    this.#rating = product.rating;
  }

  // Getter for discounted price (read-only)
  get price() {
    return (this.#price * (1 - this.#discountPercentage / 100)).toFixed(2);
  }

  // Getter for stock
  get stock() {
    return this.#stock;
  }

  // Setter for stock
  set stock(change) {
    if (this.#stock + change < 0) {
      throw new Error("Not enough stock available");
    }
    this.#stock += change;
  }

  // Getter for rating
  get rating() {
    return this.#rating;
  }

  // Render method (unchanged except for getter/method usage)
  renderCard() {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
                <h2> ${this.title} </h2>
                <img src = "${this.thumbnail}" alt = "${this.title}" />
                <h4> Price with discount: ${this.price}$ <h4>
                <p> Stock: ${this.stock} </p>
                <p> Rating: ${this.rating} </p>
                <button> Add to cart </button>`;

    card.querySelector("button").addEventListener("click", () => {
      try {
        this.stock = -1;
        card.querySelector("p").innerText = `Stock: ${this.stock}`;
      } catch (error) {
        alert(error.message);
      }
    });

    return card;
  }
}
