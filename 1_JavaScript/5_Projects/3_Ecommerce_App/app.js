document.addEventListener("DOMContentLoaded", () => {

  const products = [
    {id: 1, name: "Product 1", price: 30.998},
    {id: 2, name: "Product 2", price: 40.999},
    {id: 3, name: "Product 3", price: 80.997},
    {id: 4, name: "Product 4", price: 90.997}
  ]
  
  const cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  // Render product list
  products.forEach(product => {
    const productDiv = document.createElement("div")
    productDiv.classList.add("product")
    productDiv.innerHTML = `
    <span>${product.name} $${product.price}</span>
    <button data-id="${product.id}">Add to cart</button>
    `
    productList.appendChild(productDiv)

  })

  // Handle add to cart
  productList.addEventListener("click", function(e) {
    if(e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"))
      const returnedProduct = products.find(p => p.id === productId)
      addToCart(returnedProduct)
    }
  })

  // Function for Add To Cart
  function addToCart(product) {
    cart.push(product)
    updateLocalStorage()
    renderCart()
  }

  // Handle remove from cart
  cartItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const index = parseInt(e.target.getAttribute("data-index"));
      cart.splice(index, 1);
      updateLocalStorage();
      renderCart();
    }
  });

  // Render cart items
  function renderCart() {
    cartItems.innerHTML = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");

      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
              ${item.name} - $${item.price.toFixed(2)}
              <button class="remove-btn" data-index="${index}">Remove</button>
            `;
        cartItems.appendChild(cartItem);
      });

      totalPriceDisplay.textContent = totalPrice.toFixed(2);
    } else {
      emptyCartMessage.classList.remove("hidden");
      cartTotalMessage.classList.add("hidden");
      totalPriceDisplay.textContent = "0.00";
    }
  }

  // Save cart to localStorage
  // function updateLocalStorage() {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }

  function updateLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  // Load cart from localStorage on load
  function loadCartFromStorage() {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      cart.push(...JSON.parse(storedCart));
      renderCart();
    }
  }

  // Checkout button handler
  checkoutBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    cart.length = 0;
    localStorage.removeItem("cart");
    alert("Checkout Successfully");
    renderCart();
  });
  loadCartFromStorage(); // load cart on page load
});
