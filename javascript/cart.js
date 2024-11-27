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

document.addEventListener("DOMContentLoaded", () => {
    // Retrieve cart data from localStorage
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items-container");
    const totalCostDisplay = document.getElementById("total-cost");

    // Function to calculate the total cost
    function calculateTotalCost() {
        return cartData.reduce((total, item) => total + item.cost * item.amount, 0);
    }

    // Function to update the cart data in localStorage
    function updateCartData() {
        localStorage.setItem("cart", JSON.stringify(cartData));
    }

    // Function to update the cart display (in case of changes)
    function updateCartDisplay() {
        cartData = JSON.parse(localStorage.getItem("cart")) || []; // Refresh cartData
        console.log(cartData)
        cartItemsContainer.innerHTML = ""; // Clear current display

        if (cartData.length === 0) {
            cartItemsContainer.innerHTML = "<p>You have no items in your cart.</p>";
            totalCostDisplay.textContent = "";
        } else {
            cartData.forEach((cartItem) => {
                const product = products.find((p) => p.id === cartItem.id);
                if (product) {
                    const itemContainer = document.createElement("div");
                    itemContainer.classList.add("action-button-container");
            
                    const image = document.createElement("img");
                    image.src = product.image;
                    image.classList.add("button-image");
                    // Add onclick event listener to call a function with the product ID
                    image.onclick = () => handleImageClick(product.id);
                    itemContainer.appendChild(image);
            
                    const itemName = document.createElement("p");
                    itemName.classList.add("item-name");
                    itemName.textContent = product.name;
                    itemContainer.appendChild(itemName);
            
                    const itemCost = document.createElement("p");
                    itemCost.classList.add("item-cost");
                    itemCost.textContent = `$${product.cost}`;
                    itemContainer.appendChild(itemCost);
            
                    const buttonGroup = document.createElement("div");
                    buttonGroup.classList.add("button-group");
            
                    const minusButton = document.createElement("button");
                    minusButton.classList.add("action-button");
                    minusButton.textContent = "-";
                    minusButton.onclick = () => {
                        if (cartItem.amount > 0) {
                            cartItem.amount -= 1;
                            if (cartItem.amount === 0) {
                                cartData = cartData.filter((item) => item.id !== cartItem.id);
                            }
                            updateCartData();
                            updateCartDisplay();
                        }
                    };
                    buttonGroup.appendChild(minusButton);
            
                    const amountDisplay = document.createElement("span");
                    amountDisplay.classList.add("amount-display");
                    amountDisplay.textContent = cartItem.amount;
                    buttonGroup.appendChild(amountDisplay);
            
                    const plusButton = document.createElement("button");
                    plusButton.classList.add("action-button");
                    plusButton.textContent = "+";
                    plusButton.onclick = () => {
                        cartItem.amount += 1;
                        updateCartData();
                        updateCartDisplay();
                    };
                    buttonGroup.appendChild(plusButton);
            
                    itemContainer.appendChild(buttonGroup);
                    cartItemsContainer.appendChild(itemContainer);
                }
            });
            
            

            totalCostDisplay.textContent = `Total Cost: $${calculateTotalCost().toFixed(2)}`;
        }
    }

    // Initial cart display
    updateCartDisplay();
    updateCartCount();
});

function go_search(text){
    if(text === ""){
        localStorage.removeItem('filter');
    }else{
        localStorage.setItem('filter', text);
    }
    window.location.href = "search.html";
}

function handleImageClick(id) {
    localStorage.setItem('item', id);
    window.location.href = "item.html";
}

function check_out() {
    window.location.href = "payment.html";
}

function handleItemClick(id) {
    localStorage.setItem('item', id);
    window.location.href = "item.html";
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
