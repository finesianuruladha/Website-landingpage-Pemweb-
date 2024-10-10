const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware untuk melayani file statis
app.use(express.static(path.join(__dirname, 'dist'))); // Melayani file di dalam folder 'dist'

// Route dasar
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html')); // Mengirimkan file index.html
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
