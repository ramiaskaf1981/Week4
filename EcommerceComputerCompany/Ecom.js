

// JavaScript function to toggle product details visibility
function toggleDetails(productId) {
  const details = document.getElementById(`details-${productId}`);
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}

// JavaScript function to sort products

function sortProducts() {
    const sortOption = document.getElementById("sort").value;
    const productsGrid = document.getElementById("products-grid");
    const productCards = Array.from(productsGrid.getElementsByClassName("product-card"));
  
    productCards.sort((a, b) => {
      if (sortOption === "low-to-high" || sortOption === "high-to-low") {
        // Sorting by price
        const priceA = parseFloat(a.getAttribute("data-price"));
        const priceB = parseFloat(b.getAttribute("data-price"));
        return sortOption === "low-to-high" ? priceA - priceB : priceB - priceA;
      } else if (sortOption === "name-asc" || sortOption === "name-desc") {
        // Sorting by name
        const nameA = a.querySelector("h3").textContent.toLowerCase();
        const nameB = b.querySelector("h3").textContent.toLowerCase();
        return sortOption === "name-asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
      }
    });
  
    // Append sorted cards back to the container
    productsGrid.innerHTML = "";
    productCards.forEach(card => productsGrid.appendChild(card));
  }

  //........................................
  // Get references to DOM elements
const cartItemsList = document.getElementById("cart-items");
const totalElement = document.getElementById("total");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

let cart = [];
let total = 0;

// Function to update the cart display
function updateCart() {
    // Clear the cart list
    cartItemsList.innerHTML = "";

    // Add each item to the cart list
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(listItem);
    });

    // Update total price
    totalElement.textContent = total;
}

// Event listener for adding items to the cart
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.getAttribute("data-name");
        const productPrice = parseFloat(button.getAttribute("data-price"));

        // Add item to cart array
        cart.push({ name: productName, price: productPrice });

        // Update the total price
        total += productPrice;

        // Update the cart display
        updateCart();
    });
});
