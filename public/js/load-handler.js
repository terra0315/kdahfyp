// load-handler.js - Ensures the loading screen appears every time

// Function to check if we're on the index page and should redirect to loading
function checkAndRedirect() {
    // Check if we've already gone through the loading screen in this session
    const hasLoaded = sessionStorage.getItem('kdah_loaded');
    
    // If we've already loaded once in this session, don't redirect again
    if (hasLoaded === 'true') {
        return;
    }
    
    // Only redirect if we're on the index page directly
    if (window.location.pathname.endsWith('index.html') || 
        window.location.pathname.endsWith('/') || 
        window.location.pathname === '') {
        
        // Check for query param to prevent redirect loops
        const urlParams = new URLSearchParams(window.location.search);
        if (!urlParams.has('loaded')) {
            // Set a flag to indicate we're going to the loading page
            sessionStorage.setItem('redirecting_to_loading', 'true');
            // Redirect to loading page
            window.location.href = 'loading.html';
        } else {
            // We've returned from loading page with the param, set the loaded flag
            sessionStorage.setItem('kdah_loaded', 'true');
        }
    }
}

// Execute immediately when script loads
checkAndRedirect(); 