const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join('C:\\Users\\zidar\\OneDrive - Technical University of Cluj-Napoca\\Desktop\\Anul III,sem 2\\TD\\Proiect\\IndexDB\\src')));

app.get('/', (req, res) => {
  res.sendFile(path.join('C:\\Users\\zidar\\OneDrive - Technical University of Cluj-Napoca\\Desktop\\Anul III,sem 2\\TD\\Proiect\\IndexDB\\src', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
