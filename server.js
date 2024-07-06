// app.js or index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB


const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error', err));

// Routes
app.get('/', (req, res) =>{
    res.send('LMS server is running running on the port 5000' );
});
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
