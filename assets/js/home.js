document
    .getElementById("search-input")
    .addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            // Mencegah aksi default Enter
            event.preventDefault();
            alert("SORRY, SEARCH IS NOT AVAIBLE IN THE WIZARDING WORLD YET  :'(");
        }
    });




// Untuk mengambil element dari overlay navbar dan navbar mobile
const navbarOverlay = document.getElementById("navbar-overlay");
const navbarMobile = document.getElementById("navbar-mobile");

// Untuk menambahkan listener ketika button bars di click (open navbar)
document.getElementById("bars").addEventListener("click", function(e) {
    navbarOverlay.classList.add("active");
    navbarMobile.classList.add("active");
});

// Untuk menambahkan listener ketika button x-mark di click (close navbar)
document.getElementById("x-mark").addEventListener("click", function(e) {
    navbarOverlay.classList.remove("active");
    navbarMobile.classList.remove("active");
});









// SEAWRCH
document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value;
    const category = document.getElementById('search-category').value;
    if (query.length > 2) {
        searchItems(query, category);
    } else {
        document.getElementById('search-results').innerHTML = '';
    }
});

async function searchItems(query, category) {
    const url = `https://api.potterdb.com/v1/${category}?search=${query}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResults(data.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayResults(items) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (items && items.length > 0) {
        items.forEach((item) => {
            const li = document.createElement('li');
            li.className = 'search-result-item';
            li.textContent = item.attributes.title || item.attributes.name;
            resultsContainer.appendChild(li);
        });
    } else {
        resultsContainer.innerHTML = '<li class="search-result-item">No results found</li>';
    }
}