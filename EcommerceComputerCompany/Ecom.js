

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