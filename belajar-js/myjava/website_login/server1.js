const express = require('express');
const bcrypt = require('bcrypt');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware agar server bisa membaca data JSON yang dikirim browser
app.use(express.json());
app.use(express.static(__dirname));

// Simulasi Database User
const users = [
    { username: "nureh", password: "password123" },
    { username: "hacker", password: "insyaf2026" }
];

// Endpoint khusus untuk memproses login
app.post('/login-proses', (req, res) => {
    const { username, password } = req.body;

    // Mencari user di "database"
    const userFound = users.find(u => u.username === username && u.password === password);

    if (userFound) {
        res.json({ success: true, message: "Login Berhasil!" });
    } else {
        res.status(401).json({ success: false, message: "Username/Password Salah!" });
    }
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
