// main.js - Handles the redirection between loading screen and main application

// Check if the user is coming from the loading screen
function checkLoadingState() {
    // Get the 'loaded' flag from sessionStorage
    const hasLoaded = sessionStorage.getItem('kdah_loaded');
    
    // If we're on index.html and haven't gone through the loading screen yet
    if (window.location.pathname.includes('index.html') && !hasLoaded) {
        // Redirect to loading.html
        window.location.href = 'loading.html';
    }
}

// Set the loaded flag when redirecting from loading.html to index.html
function setLoadedState() {
    sessionStorage.setItem('kdah_loaded', 'true');
}

// Clear loaded state when the browser is closed (for sessionStorage this happens automatically)
// But we still need to handle page refresh cases
window.addEventListener('beforeunload', function() {
    // Keep loaded state during page refresh but clear it when needed
    // This is optional and can be adjusted based on your needs
    // sessionStorage.removeItem('kdah_loaded'); // Uncomment this to force loading screen on every refresh
});

// Run the check when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // If we're on the loading.html page, we don't need to check
    if (!window.location.pathname.includes('loading.html')) {
        checkLoadingState();
    }
}); 