const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const userRoutes = require('./routes/userRoutes');

// Import database configuration to establish MongoDB connection
require('./config/db');

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send(' Server is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Use user routes
app.use('/api/user', userRoutes);
