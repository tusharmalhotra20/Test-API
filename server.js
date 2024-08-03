const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle the request from the frontend
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend! My name is Tushar Malhotra.' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
