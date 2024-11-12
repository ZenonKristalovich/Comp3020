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