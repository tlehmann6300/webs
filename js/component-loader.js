// Component Loader - Lädt Header und Footer dynamisch
(function() {
    'use strict';

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
                    target.innerHTML = html;
                    
                    // Event für geladene Komponente auslösen
                    const event = new CustomEvent('componentLoaded', {
                        detail: { componentId: targetId }
                    });
                    document.dispatchEvent(event);
                }
            })
            .catch(error => {
                console.error(`Fehler beim Laden der Komponente ${url}:`, error);
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
