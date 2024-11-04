// script.js

// Sample product data
const products = [
    { name: "Product A", price: 29.99 },
    { name: "Product B", price: 19.99 },
    { name: "Product C", price: 39.99 },
    { name: "Product D", price: 9.99 },
    { name: "Product E", price: 49.99 },
];

// Function to display products on the page
function displayProducts(productList) {
    const productContainer = document.getElementById("product-list");
    productContainer.innerHTML = "";
    productList.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p class="price">$${product.price.toFixed(2)}</p>
        `;
        productContainer.appendChild(productCard);
    });
}

// Initial display of products
displayProducts(products);

// Function to sort products
function sortProducts() {
    const sortValue = document.getElementById("sort").value;
    let sortedProducts = [...products];

    switch (sortValue) {
        case "price-asc":
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case "price-desc":
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case "name-asc":
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "name-desc":
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            sortedProducts = products;
    }

    displayProducts(sortedProducts);
}
