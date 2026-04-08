// This function runs automatically on every page it is linked to
window.addEventListener('DOMContentLoaded', () => {
    // 1. Find the main content area
    const contentArea = document.querySelector('.content') || document.querySelector('main');

    if (contentArea) {
        // 2. Force the CSS styles for scrolling via JS
        contentArea.style.height = "100vh";
        contentArea.style.overflowY = "auto";
        contentArea.style.overflowX = "hidden";
        contentArea.style.paddingBottom = "50px"; // Extra space at the bottom
        
        console.log("LEP Terminal: Scrolling initialized.");
    } else {
        // If there's no .content class, make the whole body scrollable
        document.body.style.overflowY = "auto";
        document.body.style.height = "auto";
    }
});
