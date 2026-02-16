/**
 * Navbar-Scroll-Effekt
 * 
 * Dieses einfache Skript fügt der Navigationsleiste einen visuellen Effekt hinzu,
 * wenn der Benutzer scrollt. Wenn die Seite mehr als 50 Pixel nach unten gescrollt
 * wird, erhält die Navbar die 'scrolled'-Klasse, die z.B. einen Schatten oder
 * veränderten Hintergrund aktivieren kann.
 * 
 * @module NavbarScroll
 */

// Holt das Navbar-Element aus dem DOM
const navbar = document.querySelector('.navbar');

/**
 * Event-Listener für das Scroll-Event des Fensters
 * 
 * Wird bei jedem Scroll-Event ausgelöst und prüft die vertikale
 * Scroll-Position. Bei mehr als 50 Pixeln wird die 'scrolled'-Klasse
 * hinzugefügt, ansonsten entfernt.
 * 
 * HINWEIS: Diese Funktion ist eine Backup-Implementierung.
 * Die Haupt-Implementierung mit Throttling und RequestAnimationFrame
 * befindet sich in main.js. Dieser Code wird nur ausgeführt, wenn
 * main.js nicht geladen ist.
 */
if (!document.querySelector('[data-navbar-scroll-loaded]')) {
    // Füge Marker hinzu, um Duplikate zu vermeiden
    document.documentElement.setAttribute('data-navbar-scroll-loaded', 'true');
    
    /**
     * Throttle-Funktion zur Performance-Optimierung
     * Verhindert zu häufige Ausführung des Scroll-Handlers
     */
    let scrollTimeout;
    const handleScroll = () => {
        if (scrollTimeout) return;
        scrollTimeout = setTimeout(() => {
            requestAnimationFrame(() => {
                // Prüfe, ob die Seite mehr als 50 Pixel nach unten gescrollt ist
                if (window.pageYOffset > 50) {
                    // Füge 'scrolled'-Klasse hinzu für visuellen Effekt
                    navbar.classList.add('scrolled');
                } else {
                    // Entferne 'scrolled'-Klasse, wenn oben auf der Seite
                    navbar.classList.remove('scrolled');
                }
                scrollTimeout = null;
            });
        }, 100);
    };
    
    // Verwende passive event listener für bessere Performance
    window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Sprach-Element-Verwaltung
 * 
 * Verwaltet die Sprachauswahl-Optionen in der Navbar.
 * Ermöglicht das Umschalten der Sprache durch Klick auf Flaggen.
 */

// Holt alle Sprach-Auswahl-Elemente (Flaggen)
const langItems = document.querySelectorAll(".lang-item");
// Holt das Element, das die aktuell aktive Flagge anzeigt
const activeFlag = document.getElementById("activeFlag");

/**
 * Fügt Klick-Event-Listener zu jedem Sprach-Element hinzu
 * 
 * Wenn auf eine Flagge geklickt wird:
 * 1. Wird das Standard-Link-Verhalten verhindert
 * 2. Wird die vorherige Auswahl deaktiviert
 * 3. Wird die neue Auswahl als aktiv markiert
 * 4. Wird die Flagge im Haupt-Button aktualisiert
 * 5. Wird der Sprachwechsel in die Konsole geloggt
 */
langItems.forEach(item => {
    item.addEventListener("click", function(e) {
        // Verhindere Standard-Link-Verhalten
        e.preventDefault();
        
        // Entferne 'aria-current' von allen Sprach-Elementen
        langItems.forEach(i => i.removeAttribute("aria-current"));
        
        // Setze 'aria-current' auf das geklickte Element (für Barrierefreiheit)
        this.setAttribute("aria-current", "true");
        
        // Aktualisiere die Flaggen-Quelle mit der neuen Sprach-Flagge
        activeFlag.src = this.dataset.flag;
        
        // Logge Sprachwechsel für Debugging
        console.log("Sprache gewechselt zu: " + this.dataset.lang);
    });
});