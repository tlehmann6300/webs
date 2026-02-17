// Component Loader - Lädt Header und Footer dynamisch
(function() {
    'use strict';

    // Track loaded components
    let loadedComponents = new Set();
    const requiredComponents = ['header-container', 'footer-container'];

    // Check if all components are loaded and add 'loaded' class to body
    function checkAllComponentsLoaded() {
        if (requiredComponents.every(id => loadedComponents.has(id))) {
            document.body.classList.add('loaded');
        }
    }

    // Funktion zum Laden von HTML-Komponenten
    function loadComponent(url, targetId) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                const target = document.getElementById(targetId);
                if (target) {
                    // Use DOMParser for safer HTML parsing
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    
                    // Clear target and append parsed content
                    target.innerHTML = '';
                    Array.from(doc.body.childNodes).forEach(node => {
                        target.appendChild(node.cloneNode(true));
                    });
                    
                    // Mark component as loaded
                    loadedComponents.add(targetId);
                    
                    // Event für geladene Komponente auslösen
                    const event = new CustomEvent('componentLoaded', {
                        detail: { componentId: targetId }
                    });
                    document.dispatchEvent(event);
                    
                    // Check if all components are now loaded
                    checkAllComponentsLoaded();
                }
            })
            .catch(error => {
                console.error(`Error loading component ${url}:`, error);
                // Even on error, mark as "loaded" to prevent infinite waiting
                loadedComponents.add(targetId);
                checkAllComponentsLoaded();
            });
    }

    // Header und Footer laden, sobald DOM bereit ist
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            loadComponent('components/header.html', 'header-container');
            loadComponent('components/footer.html', 'footer-container');
        });
    } else {
        // DOM ist bereits geladen
        loadComponent('components/header.html', 'header-container');
        loadComponent('components/footer.html', 'footer-container');
    }
})();
