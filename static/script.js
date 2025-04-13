let requestCounter = 0; // To track each request

document.getElementById('searchButton').addEventListener('click', searchMovies);

function searchMovies() {
    const query = document.getElementById('searchInput').value;
    if (!query) {
        showAlert('Please enter a search query.', 'error');
        return;
    }

    const currentRequest = ++requestCounter;  // Increment request counter
    const searchButton = document.getElementById('searchButton');
    searchButton.disabled = true;  // Disable the button
    displayLoading();

    fetch(`/search?query=${query}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            searchButton.disabled = false;  // Re-enable the button
            hideLoading();
            // Only display if it's the latest request
            if (currentRequest === requestCounter) {
                displayResults(data);
            } else {
                console.log("Ignoring outdated response");
            }

        })
        .catch(error => {
            searchButton.disabled = false;  // Re-enable the button
            hideLoading();
            console.error('Error fetching data:', error);
            showAlert(`Error: ${error}`, 'error');
        });
}

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results. VERY IMPORTANT
    resultsDiv.classList.remove('initial'); // Remove initial state if it exists

    if (Array.isArray(results)) {
        if (results.length === 0) {
            showAlert("No movies found matching your criteria.", "info");
            return;
        }

        results.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');

            movieDiv.innerHTML = `
                <h3>${movie.Title} (${movie.Year})</h3>
                <img src="${movie.Poster}" alt="${movie.Title} Poster">
                <p>Type: ${movie.Type}</p>
            `;
            resultsDiv.appendChild(movieDiv);
        });
    } else {
        showAlert(results.error || 'No results found.', 'info');
    }
}

function displayLoading() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<p class="loading">Loading...</p>';
}

function hideLoading() {
    const loadingElement = document.querySelector('#results .loading');
    if (loadingElement) {
        loadingElement.remove();
    }
}

function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', type);
    alertDiv.textContent = message;

    const resultsDiv = document.getElementById('results');
    resultsDiv.insertBefore(alertDiv, resultsDiv.firstChild);

    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}