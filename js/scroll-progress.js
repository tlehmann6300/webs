/**
 * Scroll-Fortschrittsanzeige-Modul (Performance-optimiert)
 * 
 * Dieses Modul erstellt eine visuelle Fortschrittsanzeige am oberen Bildschirmrand,
 * die zeigt, wie weit der Benutzer durch die Seite gescrollt hat.
 * Die Fortschrittsleiste ist barrierefrei mit ARIA-Attributen implementiert.
 * 
 * Hauptfunktionen:
 * - Dynamische Erstellung der Fortschrittsleiste
 * - Echtzeit-Update beim Scrollen mit optimiertem Throttling
 * - ARIA-Unterstützung für Screenreader
 * - Responsive Berechnung für verschiedene Bildschirmgrößen
 * - Passive Event-Listener für bessere Performance
 * - RequestAnimationFrame für ruckelfreie Animationen
 * 
 * Performance-Optimierungen:
 * - Verwendet requestAnimationFrame für Frame-synchrone Updates
 * - Passive Event-Listener verhindern Scroll-Blocking
 * - Throttling verhindert überflüssige Berechnungen
 * - Optimierte DOM-Manipulation (nur bei Änderungen)
 * 
 * @module ScrollProgress
 */
(function() {
    // Aktiviert Strict-Modus für sichereren Code
    'use strict';
    
    /**
     * Initialisiert die Scroll-Fortschrittsanzeige
     * 
     * Erstellt die Fortschrittsleiste, fügt sie dem DOM hinzu
     * und richtet Event-Listener für Scroll- und Resize-Events ein.
     */
    function initScrollProgress() {
        /**
         * Erstellt das Fortschrittsleisten-Element
         * Dies ist ein div, das als visueller Indikator dient
         */
        const progressBar = document.createElement('div');
        
        // Füge CSS-Klasse für Styling hinzu
        progressBar.className = 'scroll-progress-bar';
        
        /**
         * ARIA-Attribute für Barrierefreiheit
         * Macht die Fortschrittsleiste für Screenreader zugänglich
         */
        progressBar.setAttribute('role', 'progressbar');  // Definiert Element als Fortschrittsanzeige
        progressBar.setAttribute('aria-label', 'Scroll progress');  // Beschreibender Text für Screenreader
        progressBar.setAttribute('aria-valuemin', '0');  // Minimaler Wert (0%)
        progressBar.setAttribute('aria-valuemax', '100');  // Maximaler Wert (100%)
        progressBar.setAttribute('aria-valuenow', '0');  // Aktueller Wert (wird dynamisch aktualisiert)
        
        /**
         * Füge Fortschrittsleiste als erstes Element im Body ein
         * Dies stellt sicher, dass sie über allen anderen Elementen liegt
         */
        document.body.insertBefore(progressBar, document.body.firstChild);
        
        /**
         * Letzte bekannte Scroll-Prozentzahl für Optimierung
         * Verhindert unnötige DOM-Updates bei gleichen Werten
         */
        let lastScrollPercentage = -1;
        
        /**
         * Aktualisiert die Fortschrittsleiste basierend auf Scroll-Position
         * 
         * Diese optimierte Funktion berechnet den Scroll-Fortschritt als Prozentsatz
         * und aktualisiert die Breite der Fortschrittsleiste nur bei Änderungen.
         */
        function updateProgress() {
            // Hole die Höhe des sichtbaren Viewports
            const windowHeight = window.innerHeight;
            
            // Hole die Gesamt-Dokumenthöhe (inkl. nicht sichtbarer Bereiche)
            const documentHeight = document.documentElement.scrollHeight;
            
            // Hole aktuelle Scroll-Position von oben (Cross-Browser-kompatibel)
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            
            /**
             * Berechne die scrollbare Höhe
             * Dies ist die Dokumenthöhe minus der Viewport-Höhe
             * Repräsentiert die maximale Scroll-Distanz
             */
            const scrollableHeight = documentHeight - windowHeight;
            
            // Initialisiere Scroll-Prozentsatz
            let scrollPercentage = 0;
            
            /**
             * Berechne Scroll-Prozentsatz
             * Nur wenn es scrollbaren Inhalt gibt (verhindert Division durch 0)
             */
            if (scrollableHeight > 0) {
                // Prozentsatz = (aktuelle Position / maximale Position) * 100
                scrollPercentage = (scrollTop / scrollableHeight) * 100;
            }
            
            /**
             * Begrenze den Prozentsatz auf den Bereich 0-100
             * Math.max stellt sicher: Minimum ist 0
             * Math.min stellt sicher: Maximum ist 100
             */
            scrollPercentage = Math.min(Math.max(scrollPercentage, 0), 100);
            
            /**
             * Runde auf ganze Zahl für optimale Performance
             * Browser rendert Prozentsätze ohnehin gerundet
             */
            scrollPercentage = Math.round(scrollPercentage);
            
            /**
             * Aktualisiere DOM nur wenn sich der Wert geändert hat
             * Dies reduziert unnötige Reflows und Repaints
             */
            if (scrollPercentage !== lastScrollPercentage) {
                lastScrollPercentage = scrollPercentage;
                
                /**
                 * Setze die Breite der Fortschrittsleiste
                 * Verwendet transform für GPU-beschleunigte Animation (optional)
                 * oder width für einfachere Implementation
                 */
                progressBar.style.width = scrollPercentage + '%';
                
                /**
                 * Update ARIA-Attribut für Screenreader
                 * Bereits als ganze Zahl gerundet
                 */
                progressBar.setAttribute('aria-valuenow', scrollPercentage);
            }
        }
        
        /**
         * Throttling-Variable für requestAnimationFrame
         * Verhindert mehrfache gleichzeitige Updates für optimale Performance
         */
        let ticking = false;
        
        /**
         * Throttled Scroll-Handler mit requestAnimationFrame
         * Stellt sicher, dass Updates nur einmal pro Frame erfolgen
         */
        function handleScroll() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateProgress();
                    ticking = false;
                });
                ticking = true;
            }
        }
        
        /**
         * Throttling-Variable für Resize-Events
         * Verhindert mehrfache gleichzeitige Updates bei Fenstergrößen-Änderungen
         */
        let resizeTicking = false;
        
        /**
         * Throttled Resize-Handler mit requestAnimationFrame
         * Stellt sicher, dass Updates nur einmal pro Frame erfolgen
         */
        function handleResize() {
            if (!resizeTicking) {
                requestAnimationFrame(() => {
                    updateProgress();
                    resizeTicking = false;
                });
                resizeTicking = true;
            }
        }
        
        /**
         * Event-Listener für Scroll-Events
         * passive: true verhindert Blocking für bessere Performance
         * Verwendet throttled Handler für optimierte Performance
         */
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        /**
         * Event-Listener für Resize-Events
         * Aktualisiert Fortschritt bei Fenstergrößen-Änderung
         * (z.B. beim Drehen eines Mobilgeräts)
         * Verwendet throttled Handler für optimierte Performance
         */
        window.addEventListener('resize', handleResize, { passive: true });
        
        // Initiale Berechnung beim Laden der Seite
        updateProgress();
    }
    
    /**
     * Initialisierung der Scroll-Fortschrittsanzeige
     * Prüft, ob das DOM bereits vollständig geladen ist
     */
    if (document.readyState === 'loading') {
        // DOM lädt noch - warte auf DOMContentLoaded-Event
        document.addEventListener('DOMContentLoaded', initScrollProgress);
    } else {
        // DOM ist bereits geladen - führe sofort aus
        initScrollProgress();
    }
})();