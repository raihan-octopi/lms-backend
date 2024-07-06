require('dotenv').config(); // Load dotenv to read .env file

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

// Access environment variables
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Root route
app.get('/', (req, res) => {
  res.send(`Hello World! Environment: ${NODE_ENV}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${NODE_ENV} mode`);
});
