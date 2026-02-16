
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    const TRIGGER_BOTTOM_RATIO = 0.85;
    const ACTIVE_THRESHOLD_RATIO = 0.45;
    const FOCUS_DISTANCE_THRESHOLD = 300;
    const timelineContainer = document.getElementById('timelineRefNew');
    const progressLine = document.getElementById('lineProgressNew');
    const timelineItemsNew = document.querySelectorAll('.timeline-item-new');
    
    if (!timelineContainer || !progressLine) return;
    
    /**
     * RequestAnimationFrame Throttling-Variable
     * Verhindert mehrfache gleichzeitige Updates für optimale Performance
     */
    let ticking = false;
    
    /**
     * Letzte bekannte Scroll-Position für Optimierung
     * Verhindert unnötige Berechnungen bei gleicher Position
     */
    let lastScrollY = -1;
    
    /**
     * Aktualisiert die Timeline-Anzeige basierend auf Scroll-Position
     * Optimiert mit RequestAnimationFrame und Throttling
     */
    function updateTimeline() {
        // Prüfe ob sich Scroll-Position geändert hat (Optimierung)
        const currentScrollY = window.scrollY;
        if (currentScrollY === lastScrollY) {
            ticking = false;
            return;
        }
        lastScrollY = currentScrollY;
        
        const triggerBottom = window.innerHeight * TRIGGER_BOTTOM_RATIO;
        const containerRect = timelineContainer.getBoundingClientRect();
        const containerTop = containerRect.top + window.scrollY;
        const containerHeight = timelineContainer.offsetHeight;
        const viewportCenter = window.scrollY + (window.innerHeight / 2);
        
        let scrollPercent = ((viewportCenter - containerTop) / containerHeight) * 100;
        scrollPercent = Math.max(0, Math.min(100, scrollPercent));
        progressLine.style.height = `${scrollPercent}%`;
        
        let minDistance = window.innerHeight;
        let closestItem = null;
        
        timelineItemsNew.forEach(item => {
            const itemRect = item.getBoundingClientRect();
            const itemCenter = itemRect.top + (itemRect.height / 2);
            const screenCenter = window.innerHeight / 2;
            const distance = Math.abs(screenCenter - itemCenter);
            
            // Füge 'visible' Klasse nur einmal hinzu (verhindert Flickern)
            if (itemRect.top < triggerBottom && !item.classList.contains('visible')) {
                item.classList.add('visible');
            }
            
            if (itemRect.top < (window.innerHeight * ACTIVE_THRESHOLD_RATIO)) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
            
            if (distance < minDistance && distance < FOCUS_DISTANCE_THRESHOLD) {
                minDistance = distance;
                closestItem = item;
            }
        });
        
        timelineItemsNew.forEach(item => item.classList.remove('active-focus'));
        if (closestItem) {
            closestItem.classList.add('active-focus');
        }
        
        ticking = false;
    }
    
    /**
     * Optimierter Scroll-Handler
     * Verwendet RequestAnimationFrame für Frame-synchrone Updates
     * Passive Event-Listener für bessere Performance
     */
    window.addEventListener('scroll', () => {
        if (!ticking) {
            ticking = true;
            window.requestAnimationFrame(updateTimeline);
        }
    }, { passive: true });
    
    // Initiale Berechnung beim Laden der Seite
    updateTimeline();
});
