const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Statische Dateien servieren
app.use(express.static(__dirname));

// Route für die Hauptseite
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route für mehr-info.html
app.get('/mehr-info', (req, res) => {
    res.sendFile(path.join(__dirname, 'mehr-info.html'));
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
}); 