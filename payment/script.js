// Handle form submission
document.getElementById("payment-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission
    console.log("Submit button clicked"); // Log for debugging

    // Validate all input fields
    const inputs = document.querySelectorAll("#payment-form input");
    let allFilled = true;

    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    });

    if (!allFilled) {
        alert("Please fill out all fields.");
        return;
    }

    // Fetch email from shipping address
    const shippingEmail = document.getElementById("shipping-email").value.trim();

    // Simulate payment result
    const paymentSuccess = Math.random() > 0.5;
    const dialogOverlay = document.getElementById("dialog-overlay");
    const dialogMessage = document.getElementById("dialog-message");
    const retryButton = document.getElementById("retry-button");

    if (paymentSuccess) {
        dialogMessage.innerHTML = `Payment Successful! A receipt has been emailed to <strong>${shippingEmail}</strong>.`;
        retryButton.style.display = "none"; // Hide retry button on success
    } else {
        dialogMessage.textContent = "Payment Failed. Please Try Again.";
        retryButton.style.display = "inline-block"; // Show retry button on failure
    }

    dialogOverlay.style.display = "flex"; // Show dialog
    console.log("Dialog displayed");
});

// Redirect to home page
function goHome() {
    window.location.href = "index.html"; // Redirect to home page
}

// Retry action
function retry() {
    document.getElementById("dialog-overlay").style.display = "none"; // Hide dialog
}

// Promo code logic
document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalCostElement = document.getElementById("total-cost");

    let originalTotal = 0.0; // Initial total cost
    //Retrieve cart items from localStorage
    //const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Define promo codes and discounts


    // Generate cart items dynamically
    /*cartItems.forEach((item) => {
        const itemRow = document.createElement("div");
        itemRow.className = "cart-item";

        const itemName = document.createElement("p");
        itemName.textContent = item.name;

        const itemPrice = document.createElement("p");
        itemPrice.textContent = `$${item.price.toFixed(2)}`;

        itemRow.appendChild(itemName);
        itemRow.appendChild(itemPrice);
        cartItemsContainer.appendChild(itemRow);

        // Update the total cost
        originalTotal += item.price;
    });
    */

    // Display the total cost
    totalCostElement.innerHTML = `<strong>$${originalTotal.toFixed(2)}</strong>`;

    // Promo code logic
    const promoCodeInput = document.getElementById("promo-code");
    const applyPromoButton = document.getElementById("apply-promo");
    let currentTotal = originalTotal;

    const promoCodes = {
        SAVE10: 10, // 10% discount
        SAVE20: 20, // 20% discount
        SAVE30: 30, // 30% discount
    };


    applyPromoButton.addEventListener("click", function () {
        const enteredCode = promoCodeInput.value.trim().toUpperCase();

        // Check if promo code is valid
        if (promoCodes[enteredCode]) {
            const discountPercentage = promoCodes[enteredCode];
            const discountAmount = (originalTotal * discountPercentage) / 100;
            currentTotal = originalTotal - discountAmount;

            // Update total cost in UI
            totalCostElement.innerHTML = `<strong>$${currentTotal.toFixed(2)}</strong>`;
            alert(`Promo code applied! You saved ${discountPercentage}%.`);
        } else {
            alert("Invalid promo code. Please try again.");
        }
    });
});
