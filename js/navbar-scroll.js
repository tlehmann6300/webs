/**
 * Navbar-Scroll-Effekt (Optimiert mit IntersectionObserver)
 * 
 * Dieses optimierte Skript fügt der Navigationsleiste einen visuellen Effekt hinzu,
 * wenn der Benutzer scrollt. Verwendet einen IntersectionObserver anstelle von
 * Scroll-Event-Listenern für bessere Performance und ruckelfreies Scrollen.
 * 
 * Wenn die Seite mehr als 50 Pixel nach unten gescrollt wird, erhält die Navbar
 * die 'scrolled'-Klasse, die z.B. einen Schatten oder veränderten Hintergrund
 * aktivieren kann.
 * 
 * @module NavbarScroll
 */

// Holt das Navbar-Element aus dem DOM
const navbar = document.querySelector('.navbar');

/**
 * IntersectionObserver-basierte Implementierung
 * 
 * Verwendet einen unsichtbaren "Sentinel"-Element am Anfang der Seite (50px hoch).
 * Wenn dieses Element aus dem Viewport verschwindet (nicht mehr sichtbar), wird
 * die 'scrolled'-Klasse zur Navbar hinzugefügt. Dies ist performanter als
 * Scroll-Event-Listener, da der Browser die Berechnungen optimieren kann.
 */
if (!document.querySelector('[data-navbar-scroll-loaded]')) {
    // Füge Marker hinzu, um Duplikate zu vermeiden
    document.documentElement.setAttribute('data-navbar-scroll-loaded', 'true');
    
    /**
     * Erstelle ein Sentinel-Element
     * Dieses unsichtbare Element dient als Trigger für den IntersectionObserver
     * Es ist 50px hoch und wird am Anfang der Seite platziert
     */
    const sentinel = document.createElement('div');
    sentinel.id = 'navbar-scroll-sentinel';
    sentinel.style.position = 'absolute';
    sentinel.style.top = '0';
    sentinel.style.left = '0';
    sentinel.style.width = '100%';
    sentinel.style.height = '50px';
    sentinel.style.pointerEvents = 'none';
    sentinel.style.visibility = 'hidden';
    
    // Füge Sentinel am Anfang des Body ein
    document.body.insertBefore(sentinel, document.body.firstChild);
    
    /**
     * IntersectionObserver-Callback
     * Wird aufgerufen, wenn das Sentinel-Element in den/aus dem Viewport scrollt
     */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Sentinel ist sichtbar = Seite ist oben
                navbar.classList.remove('scrolled');
            } else {
                // Sentinel ist nicht sichtbar = Seite ist nach unten gescrollt
                navbar.classList.add('scrolled');
            }
        });
    }, {
        // threshold: 0 bedeutet, dass der Observer triggert,
        // sobald auch nur 1px des Elements sichtbar/unsichtbar wird
        threshold: 0,
        // rootMargin erlaubt uns, den Trigger-Bereich zu erweitern
        // Hier verwenden wir 0px für exaktes Verhalten
        rootMargin: '0px'
    });
    
    // Starte Beobachtung des Sentinel-Elements
    observer.observe(sentinel);
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