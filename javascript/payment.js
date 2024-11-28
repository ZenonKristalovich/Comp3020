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
    localStorage.clear();
    window.location.href = "home.html"; // Redirect to home page
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
});
