// Load reusable components
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
        const html = await response.text();
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = html;
            // Execute any scripts in the loaded component
            const scripts = element.querySelectorAll('script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                if (script.src) {
                    newScript.src = script.src;
                } else {
                    newScript.textContent = script.textContent;
                }
                document.body.appendChild(newScript);
            });
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Load header and footer on page load
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header-container', '/components/header.html');
    loadComponent('footer-container', '/components/footer.html');
});
