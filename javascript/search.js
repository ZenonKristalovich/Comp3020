

function updatePriceRange(value) {
    const priceValueElement = document.getElementById('price-value');
    priceValueElement.textContent = `0 -> ${value}`;
    filterProducts(); // Optionally filter the results in real-time
}


document.addEventListener("DOMContentLoaded", () => {

    const priceSlider = document.getElementById("price-slider");
    priceSlider.addEventListener("input", (e) => updatePriceRange(e.target.value));
});


function startupFunction() {
    const data = localStorage.getItem('filter');

    if (data) {
        const [filterType, filterOption] = data.split('|');

        if (filterType === "sport") {
            const sportsFilter = document.getElementById("sports-filter");
            sportsFilter.value = filterOption;
        } else if (filterType === "release") {
            const releaseDateInput = document.getElementById("release-date");
            releaseDateInput.value = '2024-11-28';
        }else if (filterType ==="jersey"){
            const jerseyCheckbox = document.getElementById("filter1");
            jerseyCheckbox.checked = true;
        }else if (filterType ==="equipment"){
            const equipmentCheckbox = document.getElementById("filter2");
            equipmentCheckbox.checked = true;
        }
    }
    // Trigger filtering based on the set options
    filterProducts();
    updateCartCount();
}

function go_cart(){
    window.location.href = "cart.html";
}

function updateCartCount() {
    const cartAmountElement = document.querySelector('.amount-in-cart');
    let itemCount = localStorage.getItem('cart');

    if (itemCount) {
        // Parse the JSON string into an array
        const cartArray = JSON.parse(itemCount);

        // Using reduce
        const totalAmount = cartArray.reduce((sum, item) => sum + (item.amount || 0), 0);

        // If the array has items, set the count, otherwise set to null
        itemCount = totalAmount > 0 ? totalAmount : null;
    } else {
        itemCount = null; // Default to null if cart is empty or not set
    }

    cartAmountElement.textContent = itemCount === null ? "" : itemCount;
}







// Run the startupFunction when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", startupFunction);




