function loadProducts() {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-item");
        productDiv.setAttribute("data-id", product.id);  // Set the product's unique ID
        productDiv.setAttribute("data-price", product.cost);
        productDiv.setAttribute("data-sport", product.sport);
        productDiv.setAttribute("data-gender", product.gender);

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-details">
                <h4>${product.name}</h4>
                <p class="product-price">$${product.cost}</p>
            </div>
        `;

        resultsContainer.appendChild(productDiv);
    });
}

function filterProducts() {
    const searchInput = document.querySelector(".bar").value.toLowerCase();
    const selectedPrice = parseFloat(document.getElementById("price-slider").value);
    const selectedSport = document.getElementById("sports-filter").value;
    const selectedGender = document.getElementById("gender-filter").value;
    const showJerseys = document.getElementById("filter1").checked;
    const showEquipment = document.getElementById("filter2").checked;
    const selectedReleaseDate = document.getElementById("release-date").value; // Get selected date

    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    products.forEach(product => {
        const productReleaseDate = new Date(product.releaseDate);
        const filterReleaseDate = selectedReleaseDate ? new Date(selectedReleaseDate) : null;

        if (
            (selectedSport === "all" || product.sport === selectedSport) &&
            (selectedGender === "all" || product.gender === selectedGender) &&
            product.cost <= selectedPrice &&
            (!showJerseys || product.isJersey) &&
            (!showEquipment || product.isEquipment) &&
            product.name.toLowerCase().includes(searchInput) &&
            (!filterReleaseDate || productReleaseDate >= filterReleaseDate) // Compare dates
        ) {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product-item");

            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-details">
                    <h4>${product.name}</h4>
                    <p class="product-price">$${product.cost}</p>
                </div>
            `;
            resultsContainer.appendChild(productDiv);
        }
    });
}


function updatePriceRange(value) {
    const priceValueElement = document.getElementById('price-value');
    priceValueElement.textContent = `0 -> ${value}`;
    filterProducts(); // Optionally filter the results in real-time
}


document.addEventListener("DOMContentLoaded", () => {
    loadProducts();

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
            releaseDateInput.value = new Date().toISOString().split('T')[0]; // Set the release date filter
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

        // If the array has items, set the count, otherwise set to null
        itemCount = cartArray.length > 0 ? cartArray.length : null;
    } else {
        itemCount = null; // Default to null if cart is empty or not set
    }

    cartAmountElement.textContent = itemCount === null ? "" : itemCount;
}





// Run the startupFunction when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", startupFunction);
document.getElementById("release-date").addEventListener("change", filterProducts);



