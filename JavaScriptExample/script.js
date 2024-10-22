document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartItemsList = document.querySelector('.cart-items');
    const totalElement = document.getElementById('total');
  
    // Function to update the cart display
    function updateCart() {
      // Clear the list before updating
      cartItemsList.innerHTML = '';
  
      // Add each item in the cart to the list
      cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
      });
  
      // Calculate the total price
      const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
      totalElement.textContent = totalPrice.toFixed(2);
    }
  
    // Function to handle adding items to the cart
    function addToCart(itemName, itemPrice) {
      cartItems.push({ name: itemName, price: parseFloat(itemPrice) });
      updateCart();
    }
  
    // Add event listeners to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const itemName = event.target.getAttribute('data-name');
        const itemPrice = event.target.getAttribute('data-price');
        addToCart(itemName, itemPrice);
      });
    });
  });
  