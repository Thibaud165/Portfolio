const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static(__dirname));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});