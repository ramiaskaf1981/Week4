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
