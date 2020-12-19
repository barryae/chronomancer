const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
app.use(express.static(path.join(__dirname, 'src')));

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});