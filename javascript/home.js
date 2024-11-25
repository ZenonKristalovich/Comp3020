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