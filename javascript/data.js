// Assuming the 'products' array is already available
const products = [
    {id: 1, name: "Basketball", image: "../images/bball.jpg", cost: 29.99, sport: "basketball", releaseDate: "2024-11-23", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 2, name: "Soccer Ball", image: "../images/soccball.jpeg", cost: 24.99, sport: "soccer", releaseDate: "2022-05-10", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 3, name: "Hockey Stick", image: "../images/hockey_stick.png", cost: 59.99, sport: "hockey", releaseDate: "2023-02-15", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 4, name: "Golf Clubs", image: "../images/golf_clubs.jpg", cost: 199.99, sport: "golf", releaseDate: "2021-07-22", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 5, name: "Volleyball", image: "../images/volleyball_image.jpg", cost: 19.99, sport: "volleyball", releaseDate: "2023-03-15", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 6, name: "Knee Pads", image: "../images/knee_pads.jpg", cost: 14.99, sport: "volleyball", releaseDate: "2023-06-10", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 7, name: "Volleyball Net", image: "../images/volleyball_net.jpg", cost: 49.99, sport: "volleyball", releaseDate: "2023-03-15", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 8, name: "Golf Bag", image: "../images/golf_bag.jpg", cost: 89.99, sport: "golf", releaseDate: "2021-11-20", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 9, name: "Hockey Gloves", image: "../images/hockey_gloves.jpg", cost: 49.99, sport: "hockey", releaseDate: "2023-02-15", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 10, name: "Men's Shoulder Pads", image: "../images/mens_shoulder_pads.jpg", cost: 89.99, sport: "hockey", releaseDate: "2023-03-10", isJersey: false, isEquipment: true, gender: "male"},
    {id: 11, name: "Female Shoulder Pads", image: "../images/female_shoulder_pads.jpg", cost: 79.99, sport: "hockey", releaseDate: "2023-03-20", isJersey: false, isEquipment: true, gender: "female"},
    {id: 12, name: "Men's Running Shoes", image: "../images/mens_running_shoes.jpg", cost: 89.99, sport: "running", releaseDate: "2023-05-01", isJersey: false, isEquipment: true, gender: "male"},
    {id: 13, name: "Female Running Shoes", image: "../images/female_running_shoes.jpg", cost: 89.99, sport: "running", releaseDate: "2023-05-01", isJersey: false, isEquipment: true, gender: "female"},
    {id: 14, name: "Boxing Gloves", image: "../images/boxing_gloves.jpg", cost: 59.99, sport: "boxing", releaseDate: "2023-03-10", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 15, name: "Boxing Hand Wraps", image: "../images/boxing_hand_wraps.jpg", cost: 12.99, sport: "boxing", releaseDate: "2023-03-25", isJersey: false, isEquipment: true, gender: "unisex"},
];

// Function to display the products
function displayProducts(products) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear existing content

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        
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

    const filteredProducts = products.filter(product => {
        // Convert releaseDate string to Date object for comparison
        const productReleaseDate = new Date(product.releaseDate);
        const filterReleaseDate = selectedReleaseDate ? new Date(selectedReleaseDate) : null;

        return (
            (selectedSport === "all" || product.sport === selectedSport) &&
            (selectedGender === "all" || product.gender === selectedGender) &&
            product.cost <= selectedPrice &&
            (!showJerseys || product.isJersey) &&
            (!showEquipment || product.isEquipment) &&
            product.name.toLowerCase().includes(searchInput) &&
            (!filterReleaseDate || productReleaseDate >= filterReleaseDate) // Compare dates
        );
    });

    displayProducts(filteredProducts);
}

// Ensure the products are loaded after the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    setUpFilters();
    displayProducts(products);
});
