import { fetchProducts } from "./fetchAPI.js";
import { productsEl, searchForm, createForm } from "./global.js";
import { displaySearchedProducts } from "./utils.js";

let productsData = [];

async function getProducts() {

    productsData = await fetchProducts();

    const heading = document.createElement("h2");
    heading.textContent = "Products";
    productsEl.appendChild(heading)

    productsData.forEach(product => {
        const productEl = document.createElement("div");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.title;

        const h3 = document.createElement("h3");
        h3.textContent = product.title;

        const priceEl = document.createElement("p");
        priceEl.textContent = product.price;

        const descriptionEl = document.createElement("p");
        descriptionEl.textContent = product.description;

        productEl.appendChild(productImage);
        productEl.appendChild(h3);
        productEl.appendChild(priceEl);
        productEl.appendChild(descriptionEl);

        productsEl.appendChild(productEl)
    });
}


searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const searchInputValue = document.querySelector("#search").value;

    console.log(searchInputValue);

    const filteredData = productsData.filter(product => product.title.includes(searchInputValue));

    displaySearchedProducts(filteredData);
    console.log(filteredData);
})

getProducts()

createForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const price = document.querySelector("#price").value;
    const description = document.querySelector("#description").value;
    const image = document.querySelector("#image").value;
    const category = document.querySelector("#category").value;

    fetch('https://fakestoreapi.com/products', {
        method: "POST",
        body: JSON.stringify(
            {
                title,
                price,
                description,
                image,
                category
            }
        )
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            if (data.id) {
                alert("Product added successfully");
            }
        })
        .catch(error => console.log(error))
})


