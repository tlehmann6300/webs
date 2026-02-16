# IBC Furtwangen Website

> Offizielle Website des Institut für Business Consulting e.V. – Studentische Unternehmensberatung der Hochschule Furtwangen

[![Website](https://img.shields.io/website?url=https://business-consulting.de)](https://business-consulting.de)
[![License](https://img.shields.io/badge/license-Proprietary-red.svg)](LICENSE)

## 📋 Inhaltsverzeichnis

- [Über das Projekt](#über-das-projekt)
- [Features](#features)
- [Technologie-Stack](#technologie-stack)
- [Projektstruktur](#projektstruktur)
- [Installation & Setup](#installation--setup)
- [Entwicklung](#entwicklung)
- [Design System](#design-system)
- [Internationalisierung (i18n)](#internationalisierung-i18n)
- [Backend & API](#backend--api)
- [Sicherheit](#sicherheit)
- [Deployment](#deployment)
- [Wartung](#wartung)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

---

## 🎯 Über das Projekt

Die Website des **Institut für Business Consulting e.V.** (IBC) ist die digitale Präsenz der studentischen Unternehmensberatung der Hochschule Furtwangen. Gegründet 1998, bietet IBC professionelle IT-, Web- und Digitalisierungsberatung durch engagierte Studierende.

### Hauptziele der Website

- **Informationsportal** für Studierende und Unternehmen
- **Kontaktformular** für Beratungsanfragen
- **Mehrsprachige Unterstützung** (Deutsch, Englisch, Französisch)
- **Moderne, barrierefreie Benutzererfahrung**
- **Responsive Design** für alle Geräte

### Live-Website

🌐 [https://business-consulting.de](https://business-consulting.de)

---

## ✨ Features

### Frontend-Features

- ✅ **Responsive Design** – Optimiert für Desktop, Tablet und Mobile
- ✅ **Mehrsprachigkeit** – Deutsch, Englisch, Französisch (i18n Framework)
- ✅ **Dynamischer Content** – JavaScript-basierte Inhalts-Verwaltung
- ✅ **Barrierefreiheit** – WCAG-konforme Implementierung
- ✅ **Cookie-Consent-Management** – DSGVO-konform
- ✅ **Google Analytics Integration** – Mit Opt-in Consent
- ✅ **Custom Error Pages** – 403, 404, 500
- ✅ **Smooth Animations** – Fade-in Effekte und Übergänge
- ✅ **Interactive Components** – Flip Cards, Modals, Forms
- ✅ **SEO-Optimiert** – Meta Tags, Schema.org, Sitemap

### Backend-Features

- ✅ **Contact Form** – Mit E-Mail-Versand via SMTP
- ✅ **reCAPTCHA Integration** – Bot-Schutz
- ✅ **CSRF Protection** – Token-basierte Validierung
- ✅ **Rate Limiting** – Schutz vor Spam und Abuse
- ✅ **PHPMailer** – Zuverlässiger E-Mail-Versand
- ✅ **HubSpot CRM Integration** – Automatische Lead-Erfassung
- ✅ **Environment Variables** – Sichere Konfiguration via .env
- ✅ **Uptime Monitoring** – Health-Check Endpoint

### Sicherheitsfeatures

- 🔒 HTTPS Enforcement
- 🔒 Content Security Policy (CSP)
- 🔒 XSS Protection
- 🔒 Clickjacking Protection
- 🔒 MIME-Type Sniffing Prevention
- 🔒 Input Sanitization
- 🔒 File Upload Validation
- 🔒 SQL Injection Prevention (via prepared statements)

---

## 🛠 Technologie-Stack

### Frontend

| Technologie | Version | Verwendung |
|------------|---------|------------|
| **HTML5** | - | Semantische Markup-Struktur |
| **CSS3** | - | Styling, Responsive Design, Animations |
| **JavaScript (ES6+)** | - | Interaktivität, DOM-Manipulation |
| **Bootstrap** | 5.3.2 | UI Framework, Grid System |
| **Font Awesome** | 6.5.1 | Icon Library |
| **Google Fonts** | - | Custom Typography |

### Backend

| Technologie | Version | Verwendung |
|------------|---------|------------|
| **PHP** | ≥7.4 | Server-seitiges Scripting |
| **PHPMailer** | ^6.9 | E-Mail-Versand via SMTP |
| **Dotenv** | ^5.6 | Environment Variables Management |
| **Composer** | - | PHP Dependency Management |

### Tools & Services

- **Apache Web Server** – mit mod_rewrite, mod_headers, mod_expires
- **Google reCAPTCHA v3** – Bot-Schutz
- **Google Analytics** – Web-Analytics
- **HubSpot CRM** – Lead-Management (optional)
- **Git** – Version Control

### Development

- **npm** – Package Management
- **Composer** – PHP Package Management
- **Visual Studio Code** – Empfohlene IDE

---

## 📁 Projektstruktur

```
web/
├── Website/                    # Hauptverzeichnis der Website
│   ├── assets/                # Statische Assets
│   │   ├── data/             # JSON-Daten (Translations, etc.)
│   │   │   └── translations/ # i18n Translation Files
│   │   ├── icons/            # SVG Icons
│   │   ├── img/              # Bilder und Grafiken
│   │   │   ├── flags/        # Länder-Flaggen
│   │   │   ├── team/         # Team-Fotos
│   │   │   ├── alumnis/      # Alumni-Fotos
│   │   │   └── competencies/ # Kompetenz-Icons
│   │   └── vendor/           # Third-party Libraries
│   │       ├── bootstrap/    # Bootstrap Framework
│   │       └── fontawesome/  # Font Awesome Icons
│   │
│   ├── css/                   # Stylesheets
│   │   ├── style.css         # Globale Styles
│   │   ├── fonts.css         # Font Definitions
│   │   ├── index.css         # Homepage Styles
│   │   ├── kontakt.css       # Kontakt-Seite Styles
│   │   └── ...               # Weitere Seiten-spezifische Styles
│   │
│   ├── js/                    # JavaScript Modules
│   │   ├── language-switcher.js    # i18n Sprachumschaltung
│   │   ├── contact-form.js         # Kontaktformular-Logik
│   │   ├── content-loader.js       # Dynamisches Content Loading
│   │   ├── cookie-consent.js       # Cookie-Banner
│   │   ├── board-loader.js         # Team-Board dynamisch laden
│   │   ├── event-loader.js         # Event-Daten laden
│   │   ├── fade-in-animation.js    # Scroll-Animationen
│   │   ├── footer-utils.js         # Footer-Funktionen
│   │   └── ...                     # Weitere JS-Module
│   │
│   ├── docs/                  # Dokumentation
│   │   ├── i18n-framework.md # i18n Framework Docs
│   │   └── ...
│   │
│   ├── fonts/                 # Custom Web Fonts
│   │
│   ├── phpmailer/            # PHPMailer Library (Composer)
│   │
│   ├── private/              # Private Konfigurationen
│   │   ├── config/           # Environment Variables (.env)
│   │   └── secrets.php       # Geheime Konstanten
│   │
│   ├── testing/              # Test-Dateien und Prototypen
│   │
│   ├── vendor/               # Composer Dependencies
│   │
│   ├── kuerzel/              # Shortlinks/Redirects
│   │
│   ├── .htaccess             # Apache-Konfiguration
│   ├── composer.json         # PHP Dependencies
│   ├── package.json          # Node.js Dependencies
│   ├── config.php            # JS-Config-Generator
│   ├── translate.php         # PHP i18n System
│   ├── get_csrf.php          # CSRF-Token-Generator
│   ├── send_mail.php         # Kontaktformular-Backend
│   ├── uptime_check.php      # Health-Check Endpoint
│   │
│   ├── index.html            # Homepage
│   ├── kontakt.html          # Kontakt-Seite
│   ├── ueber-uns.html        # Über Uns Seite
│   ├── fuer-studierende.html # Für Studierende
│   ├── fuer-unternehmen.html # Für Unternehmen
│   ├── referenzen.html       # Referenzen
│   ├── unser-netzwerk.html   # Netzwerk
│   ├── impressum.html        # Impressum
│   ├── datenschutzerklaerung.html  # Datenschutz
│   ├── cookie-richtlinie-eu.html   # Cookie-Richtlinie
│   ├── 403.html              # Forbidden Error Page
│   ├── 404.html              # Not Found Error Page
│   ├── 500.html              # Internal Server Error Page
│   └── maintenance.html      # Maintenance Mode Page
│
└── README.md                 # Diese Datei
```

---

## 🚀 Installation & Setup

### Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass folgende Software installiert ist:

- **PHP** ≥ 7.4 mit folgenden Extensions:
  - `openssl`
  - `mbstring`
  - `json`
  - `curl`
- **Composer** (PHP Package Manager)
- **npm** oder **yarn** (Node.js Package Manager)
- **Apache Web Server** mit:
  - `mod_rewrite`
  - `mod_headers`
  - `mod_expires`
  - `mod_mime`
- **Git**

### Schritt 1: Repository klonen

```bash
git clone https://github.com/reportlehm/web.git
cd web/Website
```

### Schritt 2: PHP-Dependencies installieren

```bash
composer install
```

Dies installiert:
- PHPMailer
- Dotenv für Environment Variables

### Schritt 3: Frontend-Dependencies installieren

```bash
npm install
```

Dies installiert:
- Bootstrap
- Font Awesome

### Schritt 4: Environment Variables konfigurieren

Erstellen Sie eine `.env`-Datei im `private/config/` Verzeichnis:

```bash
mkdir -p private/config
touch private/config/.env
```

Fügen Sie folgende Variablen hinzu:

```env
# SMTP-Konfiguration für E-Mail-Versand
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USERNAME=your-email@example.com
SMTP_PASSWORD=your-smtp-password
SMTP_FROM_EMAIL=noreply@business-consulting.de
SMTP_FROM_NAME="IBC Furtwangen"
SMTP_TO_EMAIL=vorstand@business-consulting.de

# Google reCAPTCHA
RECAPTCHA_SITE_KEY=your-recaptcha-site-key
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key

# Google Analytics
GA_MEASUREMENT_ID=G-XXXXXXXXXX

# HubSpot CRM (Optional)
HUBSPOT_ACCESS_TOKEN=your-hubspot-token
HUBSPOT_PORTAL_ID=your-portal-id

# CSRF Secret Key (generiere ein zufälliges Token)
CSRF_SECRET_KEY=your-random-secret-key-here

# Weitere Konfigurationen
CONTACT_FORM_RATE_LIMIT=5
CONTACT_FORM_MAX_FILE_SIZE=5242880
```

**⚠️ Sicherheitshinweis:** Fügen Sie `.env` zur `.gitignore` hinzu und committen Sie diese Datei NIE!

### Schritt 5: Dateiberechtigungen setzen

```bash
# Private Verzeichnisse schützen
chmod 700 private/
chmod 600 private/config/.env

# Schreibrechte für temporäre Dateien (falls benötigt)
chmod 755 assets/
```

### Schritt 6: Apache Virtual Host konfigurieren

Beispiel Virtual Host Konfiguration:

```apache
<VirtualHost *:80>
    ServerName business-consulting.de
    ServerAlias www.business-consulting.de
    
    DocumentRoot /var/www/html/web/Website
    
    <Directory /var/www/html/web/Website>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    # Redirect to HTTPS
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
    
    ErrorLog ${APACHE_LOG_DIR}/business-consulting-error.log
    CustomLog ${APACHE_LOG_DIR}/business-consulting-access.log combined
</VirtualHost>

<VirtualHost *:443>
    ServerName business-consulting.de
    ServerAlias www.business-consulting.de
    
    DocumentRoot /var/www/html/web/Website
    
    SSLEngine on
    SSLCertificateFile /path/to/certificate.crt
    SSLCertificateKeyFile /path/to/private.key
    SSLCertificateChainFile /path/to/chain.crt
    
    <Directory /var/www/html/web/Website>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    ErrorLog ${APACHE_LOG_DIR}/business-consulting-ssl-error.log
    CustomLog ${APACHE_LOG_DIR}/business-consulting-ssl-access.log combined
</VirtualHost>
```

### Schritt 7: Apache neu starten

```bash
sudo systemctl restart apache2
```

### Schritt 8: Testen der Installation

Öffnen Sie die Website in Ihrem Browser:

```
http://localhost
# oder
https://business-consulting.de
```

**Checklist für erfolgreiche Installation:**

- [ ] Homepage lädt ohne Fehler
- [ ] CSS und JavaScript werden korrekt geladen
- [ ] Bilder werden angezeigt
- [ ] Sprachumschaltung funktioniert
- [ ] Kontaktformular zeigt sich korrekt
- [ ] CSRF-Token wird generiert
- [ ] Cookie-Banner erscheint

---

## 💻 Entwicklung

### Entwicklungsworkflow

1. **Branch erstellen** für neue Features oder Bugfixes
   ```bash
   git checkout -b feature/neue-funktion
   ```

2. **Änderungen durchführen** und testen

3. **Code committen**
   ```bash
   git add .
   git commit -m "Beschreibung der Änderungen"
   ```

4. **Pull Request erstellen** für Code Review

### Code-Konventionen

#### HTML

- Verwende **semantisches HTML5** (header, nav, main, section, article, footer)
- **Barrierefreiheit beachten**: ARIA-Labels, alt-Attribute, Landmark Roles
- **Indentation**: 4 Spaces
- **Sprache**: HTML-Attribute in Englisch, Content in Deutsch

#### CSS

- **BEM-ähnliche Namenskonvention** für Klassen
- **Mobile-First-Ansatz** für Responsive Design
- **Verwende CSS Custom Properties** (CSS Variables) wo möglich
- **Indentation**: 4 Spaces
- **Kommentare** für komplexe Layouts

Beispiel:

```css
/* Hero Section Styles */
.hero-section {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    padding: 4rem 2rem;
}

.hero-section__title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
}

@media (min-width: 768px) {
    .hero-section {
        padding: 6rem 4rem;
    }
}
```

#### JavaScript

- **ES6+ Features** verwenden (const, let, arrow functions, modules)
- **Modulare Struktur**: Jede Funktionalität in eigener Datei
- **Aussagekräftige Variablen-/Funktionsnamen**
- **Kommentare** für komplexe Logik
- **Error Handling** implementieren

Beispiel:

```javascript
/**
 * Lädt dynamische Inhalte von einem JSON-Endpoint
 * @param {string} endpoint - API Endpoint URL
 * @returns {Promise<Object>} Die geladenen Daten
 */
async function loadContent(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fehler beim Laden der Daten:', error);
        return null;
    }
}
```

#### PHP

- **PSR-12 Coding Standard** befolgen
- **Type Hints** verwenden (PHP 7.4+)
- **Prepared Statements** für Datenbank-Queries
- **Error Logging** statt echo/var_dump
- **Input Validation** und **Output Escaping**
- **Kommentare** im PHPDoc-Format

Beispiel:

```php
<?php
/**
 * Validiert eine E-Mail-Adresse
 * 
 * @param string $email Die zu validierende E-Mail
 * @return bool True wenn gültig, sonst False
 */
function validateEmail(string $email): bool {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Sendet eine E-Mail mit PHPMailer
 * 
 * @param string $to Empfänger-Adresse
 * @param string $subject Betreff
 * @param string $body Nachrichteninhalt
 * @return bool True bei Erfolg, False bei Fehler
 */
function sendEmail(string $to, string $subject, string $body): bool {
    try {
        // PHPMailer-Konfiguration...
        return $mail->send();
    } catch (Exception $e) {
        error_log("E-Mail-Fehler: " . $e->getMessage());
        return false;
    }
}
```

### Debugging

#### Browser DevTools

- **Console**: JavaScript-Fehler und Logs
- **Network**: API-Requests und Responses
- **Elements**: DOM-Struktur und CSS
- **Application**: Cookies, Local Storage, Session Storage

#### PHP Debugging

Logs befinden sich standardmäßig in:
- Apache Error Log: `/var/log/apache2/error.log`
- PHP Error Log: `/var/log/php/error.log` oder wie in `php.ini` konfiguriert

```bash
# Logs in Echtzeit anzeigen
tail -f /var/log/apache2/error.log
```

#### Häufige Debug-Punkte

1. **E-Mail wird nicht versendet?**
   - SMTP-Credentials in `.env` prüfen
   - PHPMailer Debug-Level erhöhen: `$mail->SMTPDebug = 2;`
   - Error Logs prüfen

2. **JavaScript-Fehler?**
   - Browser Console öffnen (F12)
   - Auf Pfadfehler bei Ressourcen achten

3. **CSS wird nicht geladen?**
   - Cache leeren (Ctrl+Shift+R)
   - Pfade in HTML prüfen
   - Browser DevTools Network Tab

---

## 🎨 Design System

### Farben

Die Website verwendet ein konsistentes Farbschema:

```css
:root {
    /* Primary Colors */
    --primary-color: #003366;      /* Dunkelblau */
    --primary-light: #0055AA;      /* Hellblau */
    --primary-dark: #002244;       /* Sehr Dunkelblau */
    
    /* Secondary Colors */
    --secondary-color: #FF6600;    /* Orange */
    --secondary-light: #FF8833;    /* Hell-Orange */
    --secondary-dark: #CC5200;     /* Dunkel-Orange */
    
    /* Neutral Colors */
    --white: #FFFFFF;
    --black: #000000;
    --gray-100: #F8F9FA;
    --gray-200: #E9ECEF;
    --gray-300: #DEE2E6;
    --gray-400: #CED4DA;
    --gray-500: #ADB5BD;
    --gray-600: #6C757D;
    --gray-700: #495057;
    --gray-800: #343A40;
    --gray-900: #212529;
    
    /* Semantic Colors */
    --success: #28A745;
    --warning: #FFC107;
    --danger: #DC3545;
    --info: #17A2B8;
    
    /* Background */
    --bg-light: #F5F5F5;
    --bg-dark: #1A1A1A;
}
```

### Typografie

```css
:root {
    /* Font Families */
    --font-primary: 'Roboto', sans-serif;
    --font-secondary: 'Open Sans', sans-serif;
    --font-heading: 'Montserrat', sans-serif;
    
    /* Font Sizes */
    --fs-xs: 0.75rem;    /* 12px */
    --fs-sm: 0.875rem;   /* 14px */
    --fs-base: 1rem;     /* 16px */
    --fs-lg: 1.125rem;   /* 18px */
    --fs-xl: 1.25rem;    /* 20px */
    --fs-2xl: 1.5rem;    /* 24px */
    --fs-3xl: 1.875rem;  /* 30px */
    --fs-4xl: 2.25rem;   /* 36px */
    --fs-5xl: 3rem;      /* 48px */
    
    /* Line Heights */
    --lh-tight: 1.25;
    --lh-normal: 1.5;
    --lh-relaxed: 1.75;
}
```

### Spacing

Konsistente Abstände basierend auf einem 8px-Grid:

```css
:root {
    --space-1: 0.25rem;  /* 4px */
    --space-2: 0.5rem;   /* 8px */
    --space-3: 0.75rem;  /* 12px */
    --space-4: 1rem;     /* 16px */
    --space-5: 1.25rem;  /* 20px */
    --space-6: 1.5rem;   /* 24px */
    --space-8: 2rem;     /* 32px */
    --space-10: 2.5rem;  /* 40px */
    --space-12: 3rem;    /* 48px */
    --space-16: 4rem;    /* 64px */
}
```

### Responsive Breakpoints

```css
/* Mobile First Approach */
$breakpoint-sm: 576px;   /* Small devices (landscape phones) */
$breakpoint-md: 768px;   /* Medium devices (tablets) */
$breakpoint-lg: 992px;   /* Large devices (desktops) */
$breakpoint-xl: 1200px;  /* Extra large devices (large desktops) */
$breakpoint-xxl: 1400px; /* Extra extra large devices */
```

### UI-Komponenten

#### Buttons

```css
.btn-primary {
    background-color: var(--primary-color);
    color: var(--white);
    padding: var(--space-3) var(--space-6);
    border-radius: 4px;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    background-color: var(--primary-light);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
```

#### Cards

```css
.card {
    background: var(--white);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: var(--space-6);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
```

#### Forms

```css
.form-control {
    width: 100%;
    padding: var(--space-3) var(--space-4);
    border: 1px solid var(--gray-300);
    border-radius: 4px;
    font-size: var(--fs-base);
    transition: border-color 0.3s ease;
}

.form-control:focus {
    border-color: var(--primary-color);
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 51, 102, 0.1);
}
```

### Animationen

```css
/* Fade In Animation */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 0.6s ease-out;
}

/* Smooth Transitions */
.smooth-transition {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 🌍 Internationalisierung (i18n)

Die Website unterstützt drei Sprachen: **Deutsch (DE)**, **Englisch (EN)** und **Französisch (FR)**.

### Architektur

Das i18n-System besteht aus zwei Hauptkomponenten:

1. **PHP Translation System** (`translate.php`)
2. **JavaScript Translation System** (`js/language-switcher.js`)

Beide nutzen eine zentrale Übersetzungsdatei:
```
assets/data/translations/translations.json
```

### PHP-Übersetzungen

#### Verwendung

```php
require_once 'translate.php';

// Einfache Übersetzung
echo translate('php-error-generic');

// Mit Parametern
echo translate('php-error-rate-limit-minutes', ['minutes' => 5]);

// Kurz-Alias
echo t('php-error-generic');

// Sprache erzwingen
echo translate('php-error-generic', [], 'en');
```

#### Spracherkennung

Automatische Erkennung in dieser Reihenfolge:
1. URL-Parameter (`?lang=en`)
2. Cookie (`language`)
3. Browser Accept-Language Header
4. Standard: Deutsch (DE)

### JavaScript-Übersetzungen

#### HTML-Attribute

```html
<!-- Text-Content übersetzen -->
<span data-i18n="nav-for-students">Für Studierende</span>

<!-- Aria-Label übersetzen -->
<button data-i18n-aria="lang-toggle-label" aria-label="Sprache wechseln">
    Toggle Language
</button>

<!-- Placeholder übersetzen -->
<input data-i18n-placeholder="contact-form-name-placeholder" 
       placeholder="Max Mustermann">
```

#### Sprachumschaltung

Der Language-Switcher ist in der Navigation integriert und speichert die Auswahl im Cookie.

### Neue Übersetzungen hinzufügen

1. Öffne `assets/data/translations/translations.json`
2. Füge neuen Schlüssel mit allen Sprachen hinzu:

```json
{
  "your-new-key": {
    "de": "Deutscher Text",
    "en": "English text",
    "fr": "Texte français"
  }
}
```

3. Verwende den Schlüssel:
   - **PHP**: `translate('your-new-key')`
   - **HTML**: `<span data-i18n="your-new-key">Default</span>`

### Best Practices

- ✅ **Semantische Schlüssel** verwenden: `contact-form-submit-button`
- ✅ **Hierarchische Struktur**: `page-section-element`
- ✅ **PHP-Prefixes**: Alle PHP-Keys beginnen mit `php-`
- ✅ **Alle drei Sprachen** pflegen
- ✅ **Parameter-Substitution** für dynamische Inhalte

📖 **Ausführliche Dokumentation**: [docs/i18n-framework.md](Website/docs/i18n-framework.md)

---

## 🔧 Backend & API

### Kontaktformular-API

**Endpoint**: `send_mail.php`

**Methode**: `POST`

**Content-Type**: `multipart/form-data`

#### Request-Parameter

| Parameter | Typ | Erforderlich | Beschreibung |
|-----------|-----|-------------|--------------|
| `name` | string | Ja | Name des Absenders |
| `email` | string | Ja | E-Mail-Adresse |
| `message` | string | Ja | Nachrichtentext |
| `company` | string | Nein | Firmenname |
| `phone` | string | Nein | Telefonnummer |
| `topic` | string | Nein | Betreff/Thema |
| `file` | file | Nein | Datei-Anhang (max 5MB) |
| `csrf_token` | string | Ja | CSRF-Token |
| `recaptcha_token` | string | Ja | reCAPTCHA Token |

#### Response

**Erfolg** (200 OK):
```json
{
    "message": "Ihre Nachricht wurde erfolgreich versendet."
}
```

**Fehler** (400/500):
```json
{
    "message": "Fehlerbeschreibung in der gewählten Sprache"
}
```

#### Sicherheitsfeatures

- ✅ **CSRF-Token-Validierung**
- ✅ **reCAPTCHA v3 Verification**
- ✅ **Rate Limiting** (5 Anfragen pro IP/30min)
- ✅ **E-Mail-Validierung**
- ✅ **File Upload Validation** (Typ, Größe)
- ✅ **Input Sanitization**

### CSRF-Token API

**Endpoint**: `get_csrf.php`

**Methode**: `GET`

**Response**:
```json
{
    "csrf_token": "generated-token-here"
}
```

Tokens sind 1 Stunde gültig.

### Health-Check Endpoint

**Endpoint**: `uptime_check.php`

**Methode**: `GET`

**Response**:
```json
{
    "status": "ok",
    "timestamp": 1234567890
}
```

Nützlich für Uptime-Monitoring-Services.

### E-Mail-Konfiguration

E-Mails werden via SMTP mit **PHPMailer** versendet. Konfiguration in `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM_EMAIL=noreply@business-consulting.de
SMTP_FROM_NAME=IBC Furtwangen
SMTP_TO_EMAIL=vorstand@business-consulting.de
```

**Unterstützte SMTP-Provider:**
- Gmail (mit App-Passwort)
- Outlook/Office365
- SendGrid
- Mailgun
- Eigene SMTP-Server

### HubSpot CRM Integration

Optional kann das Kontaktformular Leads automatisch an HubSpot übertragen.

**Konfiguration in `.env`:**
```env
HUBSPOT_ACCESS_TOKEN=your-hubspot-token
HUBSPOT_PORTAL_ID=your-portal-id
```

Das System erstellt automatisch:
- Kontakt in HubSpot
- Deal (Opportunity)
- Notiz mit Nachrichteninhalt

---

## 🔐 Sicherheit

### Implementierte Sicherheitsmaßnahmen

#### 1. HTTPS Enforcement

Alle HTTP-Anfragen werden automatisch auf HTTPS umgeleitet (`.htaccess`).

#### 2. Content Security Policy (CSP)

```apache
Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google.com;"
```

#### 3. Security Headers

```apache
# XSS Protection
Header set X-XSS-Protection "1; mode=block"

# Clickjacking Protection
Header set X-Frame-Options "SAMEORIGIN"

# MIME-Type Sniffing Prevention
Header set X-Content-Type-Options "nosniff"

# Referrer Policy
Header set Referrer-Policy "strict-origin-when-cross-origin"
```

#### 4. CSRF Protection

Alle Formulare sind mit CSRF-Tokens geschützt:

```javascript
// Token holen
const response = await fetch('get_csrf.php');
const data = await response.json();
const csrfToken = data.csrf_token;

// Token im Formular verwenden
formData.append('csrf_token', csrfToken);
```

#### 5. Rate Limiting

Schutz vor Spam und Brute-Force:
- **5 Anfragen pro IP** in 30 Minuten
- Session-basiertes Tracking
- Automatische Sperrung bei Überschreitung

#### 6. Input Validation & Sanitization

```php
// E-Mail-Validierung
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Fehler
}

// HTML-Escaping
$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');

// File Upload Validation
$allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
$maxFileSize = 5 * 1024 * 1024; // 5MB
```

#### 7. reCAPTCHA v3

Bot-Schutz für alle Formulare:

```javascript
grecaptcha.ready(function() {
    grecaptcha.execute('YOUR_SITE_KEY', {action: 'submit'})
        .then(function(token) {
            // Token an Backend senden
        });
});
```

#### 8. Sichere Konfiguration

- `.env`-Dateien außerhalb des Webroots oder mit `.htaccess` geschützt
- Keine sensiblen Daten in Git
- `display_errors = Off` in Produktion
- Minimale Berechtigungen für Dateien

### Sicherheits-Checklist für Deployment

- [ ] SSL/TLS-Zertifikat installiert und aktuell
- [ ] `.env`-Datei mit korrekten Berechtigungen (600)
- [ ] `display_errors` in `php.ini` deaktiviert
- [ ] Error Logging aktiviert
- [ ] Firewall konfiguriert (nur Port 80/443 offen)
- [ ] Apache/PHP auf aktuelle Versionen aktualisiert
- [ ] Backup-System eingerichtet
- [ ] Monitoring-System aktiv
- [ ] Rate Limiting getestet
- [ ] CSRF-Protection funktioniert
- [ ] reCAPTCHA konfiguriert und aktiv

### Sicherheits-Updates

- **PHP**: Regelmäßig auf neue Versionen aktualisieren
- **Composer Dependencies**: `composer update` monatlich ausführen
- **npm Dependencies**: `npm audit fix` regelmäßig ausführen
- **Apache**: Sicherheitsupdates des OS installieren

### Verantwortungsbewusste Offenlegung

Sicherheitslücken bitte melden an: **vorstand@business-consulting.de**

**Bitte nicht:**
- Sicherheitslücken öffentlich posten
- Produktionssystem für Tests nutzen
- DoS-Angriffe durchführen

---

## 🚀 Deployment

### Manuelles Deployment

#### 1. Produktionsserver vorbereiten

```bash
# SSH-Verbindung zum Server
ssh user@business-consulting.de

# Ins Webroot-Verzeichnis wechseln
cd /var/www/html/

# Falls nicht vorhanden, Verzeichnis erstellen
sudo mkdir -p /var/www/html/web
sudo chown -R $USER:$USER /var/www/html/web
```

#### 2. Repository klonen oder pullen

```bash
# Erstmaliges Deployment
git clone https://github.com/reportlehm/web.git
cd web/Website

# Update bei bestehendem Deployment
cd /var/www/html/web
git pull origin main
```

#### 3. Dependencies installieren

```bash
# PHP Dependencies
composer install --no-dev --optimize-autoloader

# Frontend Dependencies
npm ci --production
```

#### 4. Konfiguration

```bash
# .env-Datei erstellen
cp private/config/.env.example private/config/.env
nano private/config/.env
# Produktionswerte eintragen

# Berechtigungen setzen
chmod 700 private/
chmod 600 private/config/.env
```

#### 5. Cache leeren

```bash
# Opcache leeren (falls aktiviert)
sudo systemctl restart php7.4-fpm

# Apache Cache leeren
sudo systemctl restart apache2
```

#### 6. Verifizierung

- [ ] Website ist erreichbar
- [ ] Keine JavaScript-Fehler in Console
- [ ] Kontaktformular funktioniert
- [ ] Sprachen wechseln funktioniert
- [ ] SSL-Zertifikat gültig

### Automatisiertes Deployment (CI/CD)

#### Mit GitHub Actions

Erstelle `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Setup PHP
      uses: shivammathur/setup-php@v2
      with:
        php-version: '7.4'
    
    - name: Install Composer dependencies
      run: composer install --no-dev --optimize-autoloader
      working-directory: ./Website
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install npm dependencies
      run: npm ci --production
      working-directory: ./Website
    
    - name: Deploy to server
      uses: appleboy/scp-action@master
      with:
        host: ${{ secrets.SERVER_HOST }}
        username: ${{ secrets.SERVER_USER }}
        key: ${{ secrets.SSH_PRIVATE_KEY }}
        source: "Website/"
        target: "/var/www/html/web/"
    
    - name: Restart services
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.SERVER_HOST }}
        username: ${{ secrets.SERVER_USER }}
        key: ${{ secrets.SSH_PRIVATE_KEY }}
        script: |
          sudo systemctl restart apache2
          sudo systemctl restart php7.4-fpm
```

#### Deployment-Secrets konfigurieren

In GitHub Repository Settings → Secrets:
- `SERVER_HOST`: Server-IP oder Domain
- `SERVER_USER`: SSH-Benutzername
- `SSH_PRIVATE_KEY`: SSH Private Key

### Rollback-Prozedur

Bei Problemen nach Deployment:

```bash
# Letzten funktionierenden Commit identifizieren
git log --oneline -10

# Zurücksetzen
git reset --hard <commit-hash>
git push -f origin main

# Oder: Vorherigen Branch wiederherstellen
git checkout previous-stable
```

### Backup-Strategie

#### Dateien sichern

```bash
# Automatisches Backup-Script (täglich via Cron)
#!/bin/bash
BACKUP_DIR="/backups/website"
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf $BACKUP_DIR/website_$DATE.tar.gz /var/www/html/web/
# Alte Backups löschen (älter als 30 Tage)
find $BACKUP_DIR -name "website_*.tar.gz" -mtime +30 -delete
```

#### Datenbank sichern (falls verwendet)

```bash
mysqldump -u username -p database_name > backup_$DATE.sql
```

#### Crontab-Eintrag

```bash
# Täglich um 2:00 Uhr
0 2 * * * /usr/local/bin/backup-website.sh
```

---

## 🔧 Wartung

### Regelmäßige Wartungsaufgaben

#### Täglich

- [ ] Error Logs überprüfen
- [ ] Uptime-Monitoring prüfen
- [ ] Kontaktformular testen

#### Wöchentlich

- [ ] Server-Ressourcen prüfen (CPU, RAM, Disk)
- [ ] Backups verifizieren
- [ ] SSL-Zertifikat-Ablauf prüfen

#### Monatlich

- [ ] Dependencies aktualisieren (`composer update`, `npm update`)
- [ ] Sicherheitsupdates installieren
- [ ] Lighthouse-Audit durchführen
- [ ] SEO-Rankings prüfen
- [ ] Analytics auswerten

#### Jährlich

- [ ] SSL-Zertifikat erneuern
- [ ] Domain-Registrierung erneuern
- [ ] Vollständiger Security-Audit
- [ ] Performance-Optimierung
- [ ] Design-Refresh evaluieren

### Monitoring

#### Server-Monitoring

```bash
# Disk Space
df -h

# Memory Usage
free -m

# Apache Status
sudo systemctl status apache2

# PHP-FPM Status
sudo systemctl status php7.4-fpm

# Aktive Prozesse
top
```

#### Log-Analyse

```bash
# Apache Error Log
sudo tail -f /var/log/apache2/error.log

# PHP Error Log
sudo tail -f /var/log/php/error.log

# Suche nach spezifischen Fehlern
grep "Fatal error" /var/log/apache2/error.log

# Zugriffe zählen
awk '{print $1}' /var/log/apache2/access.log | sort | uniq -c | sort -rn | head -10
```

#### Uptime-Monitoring Services

Empfohlene externe Services:
- **UptimeRobot** (kostenlos, 50 Monitore)
- **Pingdom**
- **StatusCake**

Endpoint für Monitoring: `https://business-consulting.de/uptime_check.php`

### Performance-Optimierung

#### 1. Bild-Optimierung

Alle Bilder sollten:
- Im **WebP-Format** vorliegen
- **Komprimiert** sein (Tools: ImageOptim, Squoosh)
- **Responsive** geladen werden (`srcset`)

```html
<picture>
    <source srcset="image-small.webp" media="(max-width: 576px)">
    <source srcset="image-medium.webp" media="(max-width: 992px)">
    <img src="image-large.webp" alt="Description" loading="lazy">
</picture>
```

#### 2. CSS/JS Minification

```bash
# CSS minifizieren
npm install -g clean-css-cli
cleancss -o style.min.css style.css

# JS minifizieren
npm install -g terser
terser input.js -o output.min.js
```

#### 3. Caching optimieren

`.htaccess` bereits konfiguriert mit:
- **Browser-Caching**: 1 Jahr für Bilder, 1 Monat für CSS/JS
- **GZIP-Komprimierung**: Für Text-basierte Dateien

#### 4. Lazy Loading

```html
<!-- Bilder -->
<img src="image.jpg" loading="lazy" alt="Description">

<!-- Iframes -->
<iframe src="video.html" loading="lazy"></iframe>
```

#### 5. Code-Splitting

JavaScript modular laden:

```html
<script src="js/core.js" defer></script>
<script src="js/contact-form.js" defer></script>
```

### Datenbank-Wartung (falls relevant)

```sql
-- Tabellen optimieren
OPTIMIZE TABLE table_name;

-- Index neu aufbauen
ANALYZE TABLE table_name;

-- Speicherplatz prüfen
SELECT table_name, 
       ROUND(((data_length + index_length) / 1024 / 1024), 2) AS "Size (MB)"
FROM information_schema.TABLES 
WHERE table_schema = "database_name";
```

---

## 🧪 Testing

### Manuelle Tests

#### Funktionstest-Checklist

**Homepage:**
- [ ] Alle Sektionen laden korrekt
- [ ] Hero-Animation funktioniert
- [ ] Navigation ist sticky
- [ ] Footer-Links funktionieren
- [ ] Sprachumschaltung funktioniert

**Kontaktformular:**
- [ ] Formularfelder validieren korrekt
- [ ] CSRF-Token wird geladen
- [ ] reCAPTCHA funktioniert
- [ ] E-Mail wird versendet
- [ ] Bestätigungs-E-Mail kommt an
- [ ] Fehlerbehandlung funktioniert
- [ ] Rate Limiting greift nach 5 Anfragen

**Responsive Design:**
- [ ] Mobile (320px - 576px)
- [ ] Tablet (577px - 992px)
- [ ] Desktop (993px+)
- [ ] Navigation-Toggle auf Mobile
- [ ] Touch-Interaktionen funktionieren

**Browser-Kompatibilität:**
- [ ] Chrome (aktuell)
- [ ] Firefox (aktuell)
- [ ] Safari (aktuell)
- [ ] Edge (aktuell)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Automatisierte Tests

#### Lighthouse Audit

```bash
# Lighthouse installieren
npm install -g @lhci/cli

# Test durchführen
lhci autorun --collect.url=https://business-consulting.de
```

**Zielwerte:**
- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

#### Link-Checker

```bash
# Broken Links finden
npm install -g broken-link-checker
blc https://business-consulting.de -ro
```

#### HTML-Validierung

```bash
# W3C Validator
curl -H "Content-Type: text/html; charset=utf-8" \
     --data-binary @index.html \
     https://validator.w3.org/nu/?out=gnu
```

#### PHP-Syntax-Check

```bash
# Alle PHP-Dateien prüfen
find . -name "*.php" -exec php -l {} \;
```

### Security Testing

#### OWASP ZAP Scan

```bash
# Docker-basierter Security Scan
docker run -t owasp/zap2docker-stable zap-baseline.py \
    -t https://business-consulting.de
```

#### SSL/TLS Test

Online-Tools:
- [SSL Labs](https://www.ssllabs.com/ssltest/)
- Zielwert: A oder A+

#### Security Headers Check

```bash
curl -I https://business-consulting.de
```

Prüfe auf:
- `Strict-Transport-Security`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Content-Security-Policy`

### Performance Testing

#### PageSpeed Insights

🔗 [PageSpeed Insights](https://pagespeed.web.dev/)

Gib URL ein und prüfe:
- Mobile Performance
- Desktop Performance
- Core Web Vitals

#### WebPageTest

🔗 [WebPageTest.org](https://www.webpagetest.org/)

Teste aus verschiedenen Locations und Verbindungsgeschwindigkeiten.

### Accessibility Testing

#### Automated Tools

```bash
# Pa11y installieren
npm install -g pa11y

# Test durchführen
pa11y https://business-consulting.de
```

#### Manual Testing

- [ ] Keyboard-Navigation (Tab, Enter, Escape)
- [ ] Screen Reader (NVDA, JAWS, VoiceOver)
- [ ] Farbkontrast (WCAG AA mindestens)
- [ ] Focus-Indicator sichtbar
- [ ] Alt-Texte für Bilder
- [ ] ARIA-Labels korrekt

---

## 🐛 Troubleshooting

### Häufige Probleme und Lösungen

#### Problem: Website lädt nicht

**Mögliche Ursachen:**
1. Apache läuft nicht
2. Falsche Pfade in Virtual Host
3. Berechtigungsprobleme

**Lösung:**
```bash
# Apache-Status prüfen
sudo systemctl status apache2

# Apache neu starten
sudo systemctl restart apache2

# Error Log prüfen
sudo tail -f /var/log/apache2/error.log

# Berechtigungen prüfen
ls -la /var/www/html/web/Website/
```

#### Problem: CSS/JS werden nicht geladen

**Mögliche Ursachen:**
1. Falsche Pfade in HTML
2. `.htaccess` blockiert Zugriff
3. Browser-Cache

**Lösung:**
```bash
# Cache leeren
Ctrl + Shift + R (Hard Reload)

# Pfade in Browser DevTools Network Tab prüfen
# Falls 404: Pfade in HTML korrigieren

# .htaccess Syntax prüfen
apache2ctl configtest
```

#### Problem: Kontaktformular sendet keine E-Mails

**Mögliche Ursachen:**
1. Falsche SMTP-Credentials
2. Port 587 blockiert
3. PHPMailer-Fehler

**Lösung:**
```bash
# Error Logs prüfen
tail -f /var/log/apache2/error.log | grep PHPMailer

# SMTP-Verbindung testen
telnet smtp.gmail.com 587

# Debug-Mode in send_mail.php aktivieren
$mail->SMTPDebug = 2;
```

Häufigste Fixes:
- Gmail: App-Passwort verwenden statt normalem Passwort
- Firewall: Port 587 freigeben
- `.env`: SMTP_* Variablen korrekt setzen

#### Problem: CSRF-Token ungültig

**Mögliche Ursachen:**
1. Session läuft ab
2. Token wird nicht korrekt übertragen
3. Cookie-Blockierung

**Lösung:**
```javascript
// Token vor jedem Submit neu holen
async function refreshCSRFToken() {
    const response = await fetch('get_csrf.php');
    const data = await response.json();
    return data.csrf_token;
}
```

#### Problem: reCAPTCHA funktioniert nicht

**Mögliche Ursachen:**
1. Falsche Site Key
2. Domain nicht in reCAPTCHA registriert
3. JavaScript-Fehler

**Lösung:**
```bash
# Browser Console öffnen und prüfen
# Fehler wie "Invalid site key" → .env RECAPTCHA_SITE_KEY prüfen

# In Google reCAPTCHA Admin:
# Domain zur Liste der erlaubten Domains hinzufügen
```

#### Problem: Übersetzungen werden nicht angezeigt

**Mögliche Ursachen:**
1. `translations.json` nicht erreichbar
2. JSON-Syntax-Fehler
3. JavaScript-Fehler

**Lösung:**
```bash
# JSON validieren
cat assets/data/translations/translations.json | python -m json.tool

# Pfad in Browser direkt aufrufen
https://business-consulting.de/assets/data/translations/translations.json

# Browser Console prüfen
# Falls 404: Pfad korrigieren
# Falls Syntax Error: JSON fixen
```

#### Problem: Rate Limiting blockiert legitime Anfragen

**Mögliche Ursachen:**
1. Mehrere Benutzer hinter gleicher IP (NAT)
2. Limit zu niedrig

**Lösung:**
```php
// In .env Limit erhöhen
CONTACT_FORM_RATE_LIMIT=10

// Oder in send_mail.php IP-Whitelist hinzufügen
$whitelistedIPs = ['192.168.1.1', '10.0.0.1'];
if (in_array($clientIP, $whitelistedIPs)) {
    // Rate Limit umgehen
}
```

#### Problem: PHP-Fehler werden nicht geloggt

**Lösung:**
```bash
# php.ini prüfen
sudo nano /etc/php/7.4/apache2/php.ini

# Sicherstellen:
display_errors = Off
log_errors = On
error_log = /var/log/php/error.log

# Apache neu starten
sudo systemctl restart apache2
```

#### Problem: Hohe Serverload

**Mögliche Ursachen:**
1. Zu viele Anfragen
2. Ineffiziente Scripts
3. DDoS-Angriff

**Lösung:**
```bash
# Aktive Verbindungen prüfen
netstat -an | grep :80 | wc -l

# Top Prozesse anzeigen
top

# Apache Verbindungen limitieren
# In Apache-Config:
MaxClients 150
MaxRequestsPerChild 3000

# Fail2Ban installieren (DDoS-Schutz)
sudo apt install fail2ban
```

### Debug-Modus aktivieren

Nur in **Entwicklungsumgebung**:

**PHP:**
```php
// Am Anfang von send_mail.php
ini_set('display_errors', 1);
error_reporting(E_ALL);
```

**JavaScript:**
```javascript
// Console Logging aktivieren
const DEBUG = true;
if (DEBUG) console.log('Debug info:', data);
```

**Apache:**
```apache
# In Virtual Host
LogLevel debug
```

### Support & Hilfe

1. **Dokumentation prüfen**: Diese README und [i18n-framework.md](Website/docs/i18n-framework.md)
2. **Error Logs analysieren**: `/var/log/apache2/` und Browser Console
3. **GitHub Issues**: [Issues erstellen](https://github.com/reportlehm/web/issues)
4. **E-Mail**: vorstand@business-consulting.de

---

## 🤝 Contributing

Wir freuen uns über Beiträge zur Verbesserung der Website!

### Wie kann ich beitragen?

1. **Fork** das Repository
2. **Branch** erstellen (`git checkout -b feature/amazing-feature`)
3. **Änderungen committen** (`git commit -m 'Add amazing feature'`)
4. **Push** zum Branch (`git push origin feature/amazing-feature`)
5. **Pull Request** erstellen

### Contribution Guidelines

#### Code-Qualität

- ✅ **Code-Konventionen** befolgen (siehe [Entwicklung](#entwicklung))
- ✅ **Kommentare** für komplexe Logik
- ✅ **Semantic Commits**: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`
- ✅ **Tests durchführen** vor dem Commit

#### Pull Request Checklist

- [ ] Code folgt den Projekt-Konventionen
- [ ] Funktionalität wurde getestet
- [ ] Keine Console-Errors
- [ ] Responsive Design geprüft
- [ ] Browser-Kompatibilität getestet
- [ ] Dokumentation aktualisiert (falls nötig)
- [ ] Keine sensiblen Daten im Code

#### Branch-Naming

- `feature/beschreibung` – Neue Features
- `fix/beschreibung` – Bugfixes
- `docs/beschreibung` – Dokumentation
- `refactor/beschreibung` – Code-Refactoring
- `style/beschreibung` – Styling-Änderungen

#### Commit-Messages

```
<typ>: <kurze beschreibung>

<detaillierte beschreibung>

<issue-referenz>
```

Beispiel:
```
feat: Mehrsprachige Navigation hinzugefügt

- Language Switcher in Navbar integriert
- Cookie-basierte Sprachspeicherung
- Unterstützung für DE, EN, FR

Closes #123
```

### Was kann beigetragen werden?

- 🐛 **Bugfixes**
- ✨ **Neue Features**
- 📝 **Dokumentation**
- 🎨 **Design-Verbesserungen**
- ♿ **Accessibility-Verbesserungen**
- 🌍 **Übersetzungen**
- 🔒 **Sicherheits-Verbesserungen**
- ⚡ **Performance-Optimierungen**

---

## 📜 Lizenz

© 2024 Institut für Business Consulting e.V. Alle Rechte vorbehalten.

Dieses Projekt ist proprietär. Die Nutzung, Vervielfältigung oder Verbreitung des Codes bedarf der ausdrücklichen Genehmigung durch IBC Furtwangen.

---

## 📞 Kontakt

**Institut für Business Consulting e.V.**

- 🌐 Website: [https://business-consulting.de](https://business-consulting.de)
- 📧 E-Mail: [vorstand@business-consulting.de](mailto:vorstand@business-consulting.de)
- 📍 Adresse: Robert-Gerwig-Platz 1, 78120 Furtwangen im Schwarzwald
- 📱 Social Media:
  - [Facebook](https://www.facebook.com/IBC.Furtwangen/)
  - [Instagram](https://www.instagram.com/ibc_e.v/)
  - [LinkedIn](https://www.linkedin.com/company/institut-f%C3%BCr-business-consulting-e-v/)

---

## 🙏 Danksagungen

- **Hochschule Furtwangen** für die Unterstützung
- Alle **Studierenden und Alumni**, die zur Website beigetragen haben
- Open-Source-Community für die verwendeten Libraries

---

## 📚 Weitere Ressourcen

### Interne Dokumentation

- [i18n Framework Dokumentation](Website/docs/i18n-framework.md)

### Externe Links

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [PHPMailer Documentation](https://github.com/PHPMailer/PHPMailer)
- [Google reCAPTCHA](https://www.google.com/recaptcha/about/)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Letzte Aktualisierung**: Januar 2024  
**Version**: 2.0  
**Maintainer**: IBC Furtwangen Vorstand
