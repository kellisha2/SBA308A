import { productsEl, searchedProductsEl } from "./global.js";

export function displaySearchedProducts(filteredData) {
      searchedProductsEl.innerHTML = "";

    if (filteredData.length > 0) {

        productsEl.style.display = "none";

        const heading = document.createElement("h2");
        heading.textContent = "Searched Products";

        const searchedProductsContent = document.createElement("div");
        searchedProductsContent.classList.add("serched-products");

        filteredData.forEach(product => {
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

            searchedProductsContent.appendChild(productEl);

        })


        searchedProductsEl.appendChild(heading);
        searchedProductsEl.appendChild(searchedProductsContent);

    } else {
        searchedProductsEl.textContent = "No product found...";
    }
}