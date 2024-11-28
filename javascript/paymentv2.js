window.addEventListener('DOMContentLoaded', () => {
    // Retrieve the cart information from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart);

    // Get the cart summary container
    const cartSummary = document.querySelector('.cart-summary');

    // Check if cart is empty
    if (cart.length === 0) {
        cartSummary.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    // Promo code section
    const promoCodeDiv = document.createElement('div');
    promoCodeDiv.classList.add('promo-code');

    // Add promo code label and input side by side
    promoCodeDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <label for="promo-input">Promo Code:</label>
            <input type="text" id="promo-input" placeholder="Enter code">
        </div>
        <button id="apply-promo-btn" style="margin-top: 10px;">Apply Code</button>
        <p id="promo-message" style="color: red; font-size: 0.9em; margin-top: 5px;"></p>
    `;
    cartSummary.appendChild(promoCodeDiv);

    // Variables for cart total and discount
    let total = 0;
    let discount = 0;

    // Loop through each item in the cart and create HTML elements
    cart.forEach(item => {
        const itemTotal = item.amount * item.cost;
        console.log(itemTotal);
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
        <p><strong id="total-amount">$${total.toFixed(2)}</strong></p>
    `;
    cartSummary.appendChild(totalDiv);

    // Define valid promo codes
    const validPromoCodes = {
        SAVE10: 0.1, // 10% discount
        SAVE20: 0.2  // 20% discount
    };

    // Promo code logic
    const applyPromoButton = document.getElementById('apply-promo-btn');
    const promoInput = document.getElementById('promo-input');
    const promoMessage = document.getElementById('promo-message');
    const totalAmountEl = document.getElementById('total-amount');

    // Ensure totalAmountEl exists, otherwise fallback to total value
    let originalTotal = totalAmountEl ? parseFloat(totalAmountEl.textContent.replace('$', '')) : 0;
    console.log(`Original Total: ${originalTotal}`); // Debugging line

    // Handle promo code application
    applyPromoButton.addEventListener('click', () => {
        const promoInputValue = promoInput.value.trim().toUpperCase();
        console.log(`Entered promo code: ${promoInputValue}`); // Debugging line

        if (validPromoCodes.hasOwnProperty(promoInputValue)) {
            const discount = validPromoCodes[promoInputValue];
            const discountedTotal = (originalTotal * (1 - discount)).toFixed(2);
            totalAmountEl.textContent = `$${discountedTotal}`;
            promoMessage.textContent = `Promo code applied! You saved ${Math.round(discount * 100)}%.`;
            promoMessage.style.color = 'green';
        } else if (promoInputValue) {
            promoMessage.textContent = 'Invalid promo code.';
            promoMessage.style.color = 'red';
        } else {
            promoMessage.textContent = 'Please enter a promo code.';
            promoMessage.style.color = 'red';
        }
    });

    // Update cart count (if applicable elsewhere in your app)
    updateCartCount();
});

// Function to update the cart count
function updateCartCount() {
    const cartAmountElement = document.querySelector('.amount-in-cart');
    let itemCount = localStorage.getItem('cart');

    if (itemCount) {
        // Parse the JSON string into an array
        const cartArray = JSON.parse(itemCount);

        // Using reduce to get total count of items
        const totalAmount = cartArray.reduce((sum, item) => sum + (item.amount || 0), 0);

        // If the array has items, set the count; otherwise, set to null
        itemCount = totalAmount > 0 ? totalAmount : null;
    } else {
        itemCount = null; // Default to null if cart is empty or not set
    }

    cartAmountElement.textContent = itemCount === null ? "" : itemCount;
}

// Other navigation functions (go_cart, go_search)
function go_cart(){
    window.location.href = "cart.html";
}

function go_search(text){
    if(text === ""){
        localStorage.removeItem('filter');
    } else {
        localStorage.setItem('filter', text);
    }
    window.location.href = "search.html";
}
