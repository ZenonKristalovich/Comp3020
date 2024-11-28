function hitButton() {
    alert('You hit a button');
}

function setFilter(filter) {
    localStorage.setItem('filter', filter);
    alert('Data set in LocalStorage!');
}

function getFilter() {
    const data = localStorage.getItem('filter');
    alert(data)
    return data ? data : 'No data found';
}

function go_search(text){
    if(text === ""){
        localStorage.removeItem('filter');
    }else{
        localStorage.setItem('filter', text);
    }
    window.location.href = "search.html";
}

function go_cart(){
    // Clears all localStorage data
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

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    console.log()
});