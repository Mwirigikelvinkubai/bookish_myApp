const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'dist' folder (Vite's build output)
app.use(express.static(path.join(__dirname, 'dist')));

// Handle client-side routing by sending index.html for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});