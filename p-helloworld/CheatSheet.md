# Prüfungs-Cheatsheet: JavaScript, DOM & Webkomponenten

Dieses Cheatsheet fasst alle Themen der Probeprüfung zusammen, damit du alles in einer Datei hast.

---

## 1. JavaScript Grundlagen
- JavaScript wird **im Browser** ausgeführt, nicht im Betriebssystem.
- Mit JavaScript kann man programmieren → Variablen, Bedingungen, Schleifen.
- Inline-JavaScript (`onclick="..."`) ist möglich, aber unsauber → besser `addEventListener`.

---

## 2. JavaScript Einbinden & DOM Laden
```html
<!-- Beste Variante: DOM lädt zuerst -->
<script src="script.js" defer></script>

<!-- Früher: DOMContentLoaded Event -->
<script src="script.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", () => {
    // Code
  });
</script>

<!-- Funktioniert, aber unsauber -->
<body>
  ...
  <script src="script.js"></script>
</body>
```

---

## 3. DOM Selektoren
```js
// Einzelnes Element
document.querySelector(".rot");

// Alle Elemente
document.querySelectorAll(".rot");

// Per Klasse / Tag
document.getElementsByClassName("rot");
document.getElementsByTagName("li");

// Erstes Listenelement in jeder UL
document.querySelectorAll("ul li:first-child");
document.querySelectorAll("ul li:nth-child(1)");

// Alle li ohne Klasse
document.querySelectorAll("li:not([class])");
document.querySelectorAll("li:not(.rot):not(.gruen)");

// Alle li unter Sommer-Titel
document.querySelectorAll("#sommer + ul li");
document.getElementById("sommer").nextElementSibling.getElementsByTagName("li");

// Letzte UL
document.querySelector("ul:last-of-type").children;
const ul = document.getElementsByTagName("ul");
ul[ul.length - 1].children;
```

---

## 4. DOM Elemente verändern
```js
// Text ändern
const titel = document.getElementById("sommer");
titel.textContent = "Neuer Titel";

// CSS-Klasse hinzufügen
const gemuese = document.querySelectorAll("li");
for (let g of gemuese) {
  if (g.innerText === "Kürbis") {
    g.classList.add("orange");
  }
}

// Neues Element hinzufügen
const liste = document.querySelector("#fruehling + ul");
const spargel = document.createElement("li");
spargel.innerText = "Spargel";
liste.appendChild(spargel);

// Elemente entfernen
document.querySelectorAll(".rot").forEach(n => n.remove());
```

---

## 5. Verstecken vs Entfernen
| Befehl                                | Wirkung                                      |
|---------------------------------------|---------------------------------------------|
| `element.remove()`                     | Element komplett entfernt, nicht mehr im DOM |
| `element.style.display = "none"`       | Unsichtbar, Platz wird frei                  |
| `element.style.visibility = "hidden"`  | Unsichtbar, Platz bleibt reserviert           |

---

## 6. Bedingungen & Schleifen
```js
// Bedingungen
if (x > 10) {
  console.log("Größer als 10");
} else {
  console.log("Kleiner oder gleich 10");
}

// Schleifen
for (let i = 0; i < 5; i++) { ... }
for (let item of array) { ... } // für Arrays & NodeLists
```

---

## 7. Events
```js
// Event hinzufügen
button.addEventListener("click", () => {
  alert("Geklickt!");
});

// Typische Events:
click, blur, input, mouseover, mouseout, keydown, keyup
```

---

## 8. Modaler Dialog
- Blockiert die restliche Seite, bis Nutzer reagiert.
- Für **Bestätigungen, Warnungen, Eingaben**.
- Beispiele:
  - `alert("Hallo")` → einfach
  - Modale Fenster mit Bootstrap, Material UI, etc.

---

## 9. Typische UI-Komponenten
| Komponente     | Zweck                              |
|----------------|------------------------------------|
| Accordion      | Inhalte ein-/ausklappen            |
| Carousel       | Bilder-Slideshow                   |
| Modal          | Nutzer muss reagieren              |
| Slider         | Wert per Regler einstellen          |
| Progress Bar   | Fortschritt anzeigen                |

Vor- & Nachteile kennen: Benutzerfreundlich vs. Code-Komplexität.

---

## 10. Zusammenfassung aller wichtigen Befehle
| Zweck                   | Beispiel                                    |
|-------------------------|---------------------------------------------|
| Skript einbinden         | `<script src="script.js" defer></script>`    |
| Element per ID           | `document.getElementById("id")`              |
| Alle mit Klasse          | `document.querySelectorAll(".klasse")`       |
| Erstes Kindelement        | `document.querySelector("ul li:first-child")`|
| Letzte Liste             | `document.querySelector("ul:last-of-type")`  |
| Text ändern              | `element.textContent = "Neu"`                |
| CSS-Klasse hinzufügen    | `element.classList.add("klasse")`            |
| Neues Element            | `document.createElement("li")`               |
| Element hinzufügen        | `parent.appendChild(element)`                |
| Element entfernen         | `element.remove()`                          |
| Verstecken                | `element.style.display = "none"`             |
| Event hinzufügen          | `element.addEventListener("click", fn)`      |
