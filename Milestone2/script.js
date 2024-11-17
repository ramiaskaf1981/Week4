// Array of product objects
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49.99,
    description: "High-quality wireless headphones with noise cancellation.",
    image: "https://via.placeholder.com/250?text=Headphones"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 99.99,
    description: "Stylish smart watch with heart rate monitoring and GPS.",
    image: "https://via.placeholder.com/250?text=Smart+Watch"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 29.99,
    description: "Portable Bluetooth speaker with deep bass.",
    image: "https://via.placeholder.com/250?text=Bluetooth+Speaker"
  },
  {
    id: 4,
    name: "Digital Camera",
    price: 399.99,
    description: "Capture beautiful moments with this high-resolution camera.",
    image: "https://via.placeholder.com/250?text=Camera"
  }
];

// Function to display products in HTML
function displayProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Clear the product list before re-rendering
  products.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <div class="product-info">
              <h2>${product.name}</h2>
              <p>${product.description}</p>
              <p class="price">$${product.price.toFixed(2)}</p>
          </div>
          <a href="index2.html" class="button">Add to Cart</a>
      `;

      productList.appendChild(productCard);
  });
}

// Function to sort products based on the selected option
function sortProducts(order) {
  let sortedProducts;
  switch (order) {
      case 'price-asc':
          sortedProducts = [...products].sort((a, b) => a.price - b.price);
          break;
      case 'price-desc':
          sortedProducts = [...products].sort((a, b) => b.price - a.price);
          break;
      case 'name-asc':
          sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
          break;
      case 'name-desc':
          sortedProducts = [...products].sort((a, b) => b.name.localeCompare(a.name));
          break;
      default:
          sortedProducts = products;
  }
  displayProducts(sortedProducts);
}

// Event listener for the sorting dropdown
document.getElementById('sort').addEventListener('change', (event) => {
  sortProducts(event.target.value);
});

// Initial display of products
displayProducts(products);
