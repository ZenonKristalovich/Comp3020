window.addEventListener('DOMContentLoaded', () => {
    // Retrieve the cart information from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart)
    // Get the cart summary container
    const cartSummary = document.querySelector('.cart-summary');

    // Check if cart is empty
    if (cart.length === 0) {
        cartSummary.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    // Clear any existing cart items
    cartSummary.innerHTML = '<h3>Cart Summary</h3>';

    // Loop through each item in the cart and create HTML elements
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.amount * item.cost;
        console.log(itemTotal)
        total += itemTotal;

        // Create a new div for the cart item
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name} x${item.amount}</p>
            <p>$${itemTotal.toFixed(2)}</p>
        `;
        cartSummary.appendChild(cartItem);
    });

    // Add the total
    const totalDiv = document.createElement('div');
    totalDiv.classList.add('cart-total');
    totalDiv.innerHTML = `
        <p><strong>Total:</strong></p>
        <p><strong>$${total.toFixed(2)}</strong></p>
    `;
    cartSummary.appendChild(totalDiv);
});

function go_cart(){
    window.location.href = "cart.html";
}

function go_search(text){
    if(text === ""){
        localStorage.removeItem('filter');
    }else{
        localStorage.setItem('filter', text);
    }
    window.location.href = "search.html";
}

