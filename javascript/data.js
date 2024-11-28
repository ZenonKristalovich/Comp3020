// Assuming the 'products' array is already available
const products = [
    {id: 1, name: "Basketball", image: "../images/bball.jpg", cost: 29.99, sport: "basketball", releaseDate: "2024-11-23", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 2, name: "Soccer Ball", image: "../images/soccball.jpeg", cost: 24.99, sport: "soccer", releaseDate: "2022-05-10", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 3, name: "Hockey Stick", image: "../images/hockey_stick.png", cost: 59.99, sport: "hockey", releaseDate: "2023-02-15", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 4, name: "Golf Clubs", image: "../images/golf_clubs.jpg", cost: 199.99, sport: "golf", releaseDate: "2021-07-22", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 5, name: "Volleyball", image: "../images/volleyball_image.jpg", cost: 19.99, sport: "volleyball", releaseDate: "2023-03-15", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 6, name: "Knee Pads", image: "../images/knee_pads.jpg", cost: 14.99, sport: "volleyball", releaseDate: "2024-11-28", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 7, name: "Volleyball Net", image: "../images/volleyball_net.jpg", cost: 49.99, sport: "volleyball", releaseDate: "2023-03-15", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 8, name: "Golf Bag", image: "../images/golf_bag.jpg", cost: 89.99, sport: "golf", releaseDate: "2021-11-20", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 9, name: "Hockey Gloves", image: "../images/hockey_gloves.jpg", cost: 49.99, sport: "hockey", releaseDate: "2024-11-28", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 10, name: "Men's Shoulder Pads", image: "../images/mens_shoulder_pads.jpg", cost: 89.99, sport: "hockey", releaseDate: "2023-03-10", isJersey: false, isEquipment: true, gender: "male"},
    {id: 11, name: "Female Shoulder Pads", image: "../images/female_shoulder_pads.jpg", cost: 79.99, sport: "hockey", releaseDate: "2024-11-28", isJersey: false, isEquipment: true, gender: "female"},
    {id: 12, name: "Men's Running Shoes", image: "../images/mens_running_shoes.jpg", cost: 89.99, sport: "running", releaseDate: "2023-11-28", isJersey: false, isEquipment: true, gender: "male"},
    {id: 13, name: "Female Running Shoes", image: "../images/female_running_shoes.jpg", cost: 89.99, sport: "running", releaseDate: "2023-05-01", isJersey: false, isEquipment: true, gender: "female"},
    {id: 14, name: "Boxing Gloves", image: "../images/boxing_gloves.jpg", cost: 59.99, sport: "boxing", releaseDate: "2023-03-10", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 15, name: "Boxing Hand Wraps", image: "../images/boxing_hand_wraps.jpg", cost: 12.99, sport: "boxing", releaseDate: "2023-03-25", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 16, name: "Tennis Racket", image: "../images/tennis_racket.jpg", cost: 99.99, sport: "tennis", releaseDate: "2023-06-15", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 17, name: "Tennis Balls (24 Pack)", image: "../images/tennis_balls.jpg", cost: 7.99, sport: "tennis", releaseDate: "2023-11-28", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 18, name: "Baseball Bat", image: "../images/baseball_bat.jpg", cost: 29.99, sport: "baseball", releaseDate: "2023-05-15", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 19, name: "Baseball Glove", image: "../images/baseball_glove.jpg", cost: 49.99, sport: "baseball", releaseDate: "2023-06-10", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 20, name: "Basketball Jersey", image: "../images/basketball_jersey.jpg", cost: 29.99, sport: "basketball", releaseDate: "2023-08-15", isJersey: true, isEquipment: false, gender: "unisex"},
    {id: 21, name: "Hockey Jersey", image: "../images/hockey_jersey.jpg", cost: 49.99, sport: "hockey", releaseDate: "2024-11-28", isJersey: true, isEquipment: false, gender: "unisex"},
];

function displayProducts(products) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear existing content

    // Retrieve the cart data from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Default to an empty array

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.style.position = 'relative'; // Ensure child elements can be positioned absolutely
        
        // Store the product ID directly on the productDiv
        productDiv.setAttribute('data-id', product.id);

        // Create the image element
        const productImg = document.createElement('img');
        productImg.src = product.image;
        productImg.alt = product.name;

        // Create the name element
        const productName = document.createElement('h4');
        productName.textContent = product.name;

        // Create the cost element
        const productCost = document.createElement('div');
        productCost.classList.add('cost');
        productCost.textContent = `$${product.cost.toFixed(2)}`;

        // Check if the product is in the cart
        const cartItem = cart.find(item => item.id === product.id);
        if (cartItem) {
            // Create the cart overlay div
            const cartOverlay = document.createElement('div');
            
            // Style the overlay
            cartOverlay.style.position = 'absolute';
            cartOverlay.style.bottom = '-10px';   // Adjust to allow it to extend out
            cartOverlay.style.left = '-10px'; // Adjust to allow it to extend out
            cartOverlay.style.backgroundImage = "url('../images/red_cart.png')";
            cartOverlay.style.backgroundSize = 'contain';  // Ensures the image fits within the container
            cartOverlay.style.backgroundRepeat = 'no-repeat'; // Prevent image from repeating
            cartOverlay.style.backgroundPosition = 'center';  // Center the image
            cartOverlay.style.width = '70px';  // Adjust width as needed
            cartOverlay.style.height = '70px'; // Adjust height as needed
            cartOverlay.style.color = '#ffffff';
            cartOverlay.style.borderRadius = '50%';  // Circular overlay
            cartOverlay.style.fontWeight = 'bold';
            cartOverlay.style.fontSize = '14px';
            cartOverlay.style.zIndex = '1'; // Ensure it appears on top
        
            // Add the cart overlay to the product div
            productDiv.style.position = 'relative'; // Ensure the parent has positioning context
            productDiv.appendChild(cartOverlay);
        }
        
        

        // Append the elements to the product div
        productDiv.appendChild(productImg);
        productDiv.appendChild(productName);
        productDiv.appendChild(productCost);

        // Add a click event to the product div
        productDiv.onclick = function () {
            const productId = productDiv.getAttribute('data-id');
            localStorage.setItem('item', productId);
            window.location.href = "item.html";
        };

        // Append the product div to the results container
        resultsContainer.appendChild(productDiv);
    });
}

// Function to filter products based on user input
function filterProducts() {
    const searchInput = document.querySelector(".bar").value.toLowerCase();
    const selectedPrice = parseFloat(document.getElementById("price-slider").value);
    const selectedSport = document.getElementById("sports-filter").value;
    const selectedGender = document.getElementById("gender-filter").value;
    const showJerseys = document.getElementById("filter1").checked;
    const showEquipment = document.getElementById("filter2").checked;
    const selectedReleaseDate = document.getElementById("release-date").value; // Get selected date
    console.log(selectedPrice)
    // If selectedReleaseDate is empty, set it to null
    const filterReleaseDate = selectedReleaseDate ? new Date(selectedReleaseDate) : null;

    const filteredProducts = products.filter(product => {
        // Convert product's releaseDate string to Date object for comparison
        const productReleaseDate = new Date(product.releaseDate);

        return (
            (selectedSport === "all" || product.sport === selectedSport) &&
            (selectedGender === "all" || product.gender === selectedGender) &&
            product.cost <= selectedPrice &&
            (!showJerseys || product.isJersey) &&
            (!showEquipment || product.isEquipment) &&
            product.name.toLowerCase().includes(searchInput) &&
            (
                // If no release date is selected, return all products
                !filterReleaseDate || 
                // Ensure the product's release date is the same or later than the selected release date
                productReleaseDate >= filterReleaseDate
            )
        );
    });

    displayProducts(filteredProducts);
}

function updatePriceRange(value) {
    // Update the displayed price range text
    document.getElementById('price-value').textContent = `0 -> ${value}`;

    // Set the custom property for the slider value, to adjust the color
    document.getElementById('price-slider').style.setProperty('--slider-value', (value / 1000) * 100 + '%');
    filterProducts();
}

// Ensure the products are loaded after the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
    filterProducts();
});
document.getElementById("release-date").addEventListener("change", filterProducts);
