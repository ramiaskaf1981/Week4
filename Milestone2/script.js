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
  
  // Initial display of products
  displayProducts(products);
  