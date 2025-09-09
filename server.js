const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur lancé et visible depuis Internet !`);
});
