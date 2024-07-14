document.addEventListener('DOMContentLoaded', () => {
  const cartContainer = document.getElementById('carrito-items');
  let cart = localStorage.getItem('cart');
  
  if (cart) {
      cart = JSON.parse(cart);
      cart.forEach(item => {
          const productDiv = document.createElement('div');
          productDiv.classList.add('producto');
          productDiv.dataset.uniqueId = item.uniqueId;
          productDiv.innerHTML = `
              <img src="${item.image}" alt="${item.name}">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
              <button class="remove-from-cart">Eliminar</button>
          `;
          cartContainer.appendChild(productDiv);
      });

      document.querySelectorAll('.remove-from-cart').forEach(button => {
          button.addEventListener('click', removeFromCart);
      });
  } else {
      cartContainer.innerHTML = '<p>El carrito está vacío</p>';
  }

  function removeFromCart(event) {
      const product = event.target.closest('.producto');
      const uniqueId = product.getAttribute('data-unique-id');

      let cart = JSON.parse(localStorage.getItem('cart'));
      cart = cart.filter(item => item.uniqueId != uniqueId);
      localStorage.setItem('cart', JSON.stringify(cart));
      product.remove();

      if (cart.length === 0) {
          cartContainer.innerHTML = '<p>El carrito está vacío</p>';
      }
  }
});
