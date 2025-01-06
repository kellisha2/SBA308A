const productsEl = document.querySelector(".products");
const searchForm = document.querySelector("#search-form");
const searchedProductsEl = document.querySelector(".searched-products-content");

// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//         "rate": 3.9,
//         "count": 120
//     }
// }


let productsData = [];

async function getProducts() {
    const response = await fetch(`https://fakestoreapi.com/products`);

    productsData = await response.json();
    console.log(productsData);

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


function displaySearchedProducts(filteredData){
    // <h2>Searched products</h2>
    // <div class="searched-products"></div>

    searchedProductsEl.innerHTML = "";

    if(filteredData.length > 0) {

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

searchForm.addEventListener("submit", function(event){
    event.preventDefault();

    const searchInputValue = document.querySelector("#search").value;

    console.log(searchInputValue);

    const filteredData = productsData.filter(product => product.title.includes(searchInputValue));

    displaySearchedProducts(filteredData);
    console.log(filteredData);
})

getProducts()

