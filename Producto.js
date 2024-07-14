document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart');

    buttons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const product = event.target.closest('.producto');
        const productId = product.getAttribute('data-id');
        const productName = product.querySelector('h3').innerText;
        const productDescription = product.querySelector('p').innerText;
        const productImage = product.querySelector('img').src;

        const cartItem = {
            uniqueId: Date.now(),  
            id: productId,
            name: productName,
            description: productDescription,
            image: productImage
        };

        let cart = localStorage.getItem('cart');
        if (!cart) {
            cart = [];
        } else {
            cart = JSON.parse(cart);
        }

        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Producto agregado al carrito');
    }
});
