const buttons = [
    { id: 1, image: '../images/basketball.png', amount: 1 },
    { id: 2, image: '../images/basketball.png', amount: 1 },
    { id: 3, image: '../images/basketball.png', amount: 1 },
    { id: 4, image: '../images/basketball.png', amount: 1 },
    { id: 5, image: '../images/basketball.png', amount: 1 }
];

// Reference to the button container
const buttonContainer = document.getElementById('button-container');

// Loop through the array and create buttons dynamically
buttons.forEach(buttonData => {
    const button = document.createElement('div');
    button.classList.add('action-button-container');
    
    // Create image element for the top part of the button
    const image = document.createElement('img');
    image.src = buttonData.image;
    image.classList.add('button-image');
    image.onclick = () => clickImage(buttonData);  // Attach click handler to image
    button.appendChild(image);
    
    // Create the button group container
    const buttonGroup = document.createElement('div');
    buttonGroup.classList.add('button-group');
    
    // Create minus button
    const minusButton = document.createElement('button');
    minusButton.classList.add('action-button');
    minusButton.textContent = '-';
    minusButton.onclick = () => {
        if (buttonData.amount > 0) {
            buttonData.amount -= 1;  // Decrease amount
            amountDisplay.textContent = buttonData.amount;
        }
    };
    buttonGroup.appendChild(minusButton);
    
    // Create the amount display between the buttons
    const amountDisplay = document.createElement('span');
    amountDisplay.classList.add('amount-display');
    amountDisplay.textContent = buttonData.amount;  // Show the initial amount
    buttonGroup.appendChild(amountDisplay);
    
    // Create plus button
    const plusButton = document.createElement('button');
    plusButton.classList.add('action-button');
    plusButton.textContent = '+';
    plusButton.onclick = () => {
        buttonData.amount += 1;  // Increase amount
        amountDisplay.textContent = buttonData.amount;
    };
    buttonGroup.appendChild(plusButton);
    
    // Append the button group to the button
    button.appendChild(buttonGroup);
    
    // Append the button to the container
    buttonContainer.appendChild(button);
});

// Function to handle clicks on images
function clickImage(buttonData) {
    alert(`Image clicked for button ID: ${buttonData.id}`);
    // You can implement any action you want when the image is clicked
    // For example, you can increase or decrease the amount based on image clicks
    buttonData.amount += 1;
    const buttonGroup = document.querySelector(`#button-${buttonData.id} .button-group .amount-display`);
    buttonGroup.textContent = buttonData.amount;  // Update the amount display
}
