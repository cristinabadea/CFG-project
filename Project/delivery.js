/** @format */

var products = [
  {
    name: "Classic Dog",
    id: 1,
    category: "Hot Dogs",
    brand: "American Goodies",
    price: 4,
  },
  {
    name: "Hamburger",
    id: 2,
    category: "Burgers",
    brand: "Five Guys",
    price: 6,
  },
  {
    name: "BLT",
    id: 3,
    category: "Sandwiches",
    brand: "American Goodies",
    price: 3,
  },
  {
    name: "Bacon Cheesburger",
    id: 4,
    category: "Burgers",
    brand: "Five Guys",
    price: 4,
  },
];

document.getElementById("product-price").innerHTML = "£" + products[0].price;

let x = document.getElementsByClassName("single-product")[0];
console.log(x.firstElementChild.innerHTML);
console.log(x.firstElementChild.nextSibling);
