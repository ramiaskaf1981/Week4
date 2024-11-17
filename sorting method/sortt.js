document.addEventListener("DOMContentLoaded", () => {
    const sortDropdown = document.getElementById("sort");
    const productsGrid = document.getElementById("products-grid");
    const productCards = Array.from(productsGrid.getElementsByClassName("product-card"));
  
    sortDropdown.addEventListener("change", () => {
      const sortOption = sortDropdown.value;
      let sortedCards;
  
      if (sortOption === "asc") {
        sortedCards = productCards.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
      } else if (sortOption === "desc") {
        sortedCards = productCards.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
      } else {
        sortedCards = productCards; // Default order
      }
  
      productsGrid.innerHTML = "";
      sortedCards.forEach(card => productsGrid.appendChild(card));
    });
  });
  