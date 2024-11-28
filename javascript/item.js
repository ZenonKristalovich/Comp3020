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
    {id: 12, name: "Men's Running Shoes", image: "../images/mens_running_shoes.jpg", cost: 89.99, sport: "running", releaseDate: "2023-11-28", isJersey: false, isEquipment: true, gender: "male"},
    {id: 13, name: "Female Running Shoes", image: "../images/female_running_shoes.jpg", cost: 89.99, sport: "running", releaseDate: "2023-05-01", isJersey: false, isEquipment: true, gender: "female"},
    {id: 14, name: "Boxing Gloves", image: "../images/boxing_gloves.jpg", cost: 59.99, sport: "boxing", releaseDate: "2023-03-10", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 15, name: "Boxing Hand Wraps", image: "../images/boxing_hand_wraps.jpg", cost: 12.99, sport: "boxing", releaseDate: "2023-03-25", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 16, name: "Tennis Racket", image: "../images/tennis_racket.jpg", cost: 99.99, sport: "tennis", releaseDate: "2023-06-15", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 17, name: "Tennis Balls (24 Pack)", image: "../images/tennis_balls.jpg", cost: 7.99, sport: "tennis", releaseDate: "2023-11-28", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 18, name: "Baseball Bat", image: "../images/baseball_bat.jpg", cost: 29.99, sport: "baseball", releaseDate: "2023-05-15", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 19, name: "Baseball Glove", image: "../images/baseball_glove.jpg", cost: 49.99, sport: "baseball", releaseDate: "2023-06-10", isJersey: false, isEquipment: true, gender: "unisex"},
    {id: 20, name: "Basketball Jersey", image: "../images/basketball_jersey.jpg", cost: 29.99, sport: "basketball", releaseDate: "2023-08-15", isJersey: true, isEquipment: false, gender: "unisex"},
    {id: 21, name: "Hockey Jersey", image: "../images/hockey_jersey.jpg", cost: 49.99, sport: "hockey", releaseDate: "2023-11-28", isJersey: true, isEquipment: false, gender: "unisex"},
];

document.addEventListener("DOMContentLoaded", () => {

    // Get the product ID from localStorage
    const productId = localStorage.getItem('item'); // Retrieve the stored item ID

    if (productId) {
        const product = products.find(p => p.id === parseInt(productId)); // Find the selected product by ID

        if (product) {
            // Populate the item display with the product details
            document.getElementById('item-image-img').src = product.image;
            document.getElementById('item-name').textContent = product.name;
            document.getElementById('item-cost').textContent = `$${product.cost.toFixed(2)}`;
            document.getElementById('item-seller').textContent = "Source for Sports"; // Default seller
        }
    } else {
        // Handle case if no product ID is found in localStorage (maybe redirect or show an error)
        alert("No product selected.");
    }
    updateTotalCost()
    updateCartCount();
});

// Function to update total cost dynamically
function updateTotalCost() {
    // Get the current cost from the #item-cost element
    const costElement = document.getElementById('item-cost');
    const costPerItem = parseFloat(costElement.textContent.replace(/[^0-9.]/g, '')) || 0; // Extract numeric value
    const quantity = parseInt(document.getElementById('quantity').value) || 1; // Default to 1 if invalid

    // Calculate total cost
    const totalCost = costPerItem * quantity;

    // Update total cost display
    document.getElementById('total-cost-value').textContent = `$${totalCost.toFixed(2)}`;
}

function go_search(text){
    if(text === ""){
        localStorage.removeItem('filter');
    }else{
        localStorage.setItem('filter', text);
    }
    window.location.href = "search.html";
}

function add_to_cart() {
    // Get the product ID and quantity from the page
    const productId = parseInt(localStorage.getItem('item'));  // Ensure it's a number
    const quantity = parseInt(document.getElementById('quantity').value) || 1; // Default quantity is 1 if not valid

    if (!productId) {
        alert("No product selected.");
        return;
    }

    // Retrieve the current cart from localStorage (or initialize an empty array if none exists)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        // If the product exists, update its quantity
        existingProduct.amount += quantity;
    } else {
        // If the product doesn't exist in the cart, find the product details
        const product = products.find(p => p.id === productId);  // Find the product using the ID
        if (product) {
            // Store only the necessary details (id, img, amount, and cost)
            const cartItem = {
                id: product.id,
                img: product.image,  // Assuming 'image' is the correct field for the product's image
                amount: quantity,
                cost: product.cost,
                name: product.name
            };
            cart.push(cartItem);  // Add the product to the cart
        }
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Log the cart for debugging
    console.log(localStorage.getItem('cart'));

    // Show the popup
    showPopup();
}

function showPopup() {
    // Create the modal structure
    const modal = document.createElement('div');
    modal.id = 'cart-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <p class='display-text'>Item has been added to Cart</p>
            <div style="display: flex; gap: 10px; justify-content: center;">
                <button id="continue-shopping">Continue Shopping</button>
                <button id="go-to-cart">Go to Cart</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Style the modal
    const style = document.createElement('style');
    style.innerHTML = `
        #cart-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }
        .modal-content {
            background: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            max-width: 400px;
            width: 100%;
        }
        button {
            padding: 10px 20px;
            font-family: 'Copperplate Gothic', 'Georgia', serif;
            font-weight: bold;
            font-size: 16px;
            cursor: pointer;
            border-radius: 10px;
            background: #a70404; 
            color: #ffff
            transition: background 0.3s ease;
        }
        
        button:hover {
            background: #790000; 
        }

        .display-text{
            padding-bottom: 20px;
            font-weight: bold;
            font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    // Button actions
    document.getElementById('continue-shopping').addEventListener('click', () => {
        window.location.href = "search.html";
    });

    document.getElementById('go-to-cart').addEventListener('click', () => {
        window.location.href = "cart.html"; // Redirect to cart page
    });
}

function closePopup() {
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.remove();
    }
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



