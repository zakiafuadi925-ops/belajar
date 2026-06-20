const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const PORT = 3000;

// --- 1. MIDDLEWARE ---
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// PENTING: Jika index.html ada di root, jangan gunakan express.static('.') 
// karena bisa membingungkan rute Express. Gunakan folder khusus jika ada (misal: 'public')
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'nureh-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 * 30 }
}));

const users = [
    { username: "nureh", password: "password123" },
    { username: "admin", password: "123" }
];

// --- 2. ROUTES ---

// A. Root URL: Otomatis ke Login
app.get('/', (req, res) => {
    res.redirect('/login');
});

// B. Halaman Login (Sekarang mengarah ke index.html)
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// C. API Data User untuk Dashboard
app.get('/api/user', (req, res) => {
    if (req.session.isLoggedIn) {
        res.json({ username: req.session.username });
    } else {
        res.status(401).json({ error: "Unauthorized" });
    }
});

// D. Halaman Dashboard
app.get('/dashboard', (req, res) => {
    if (req.session.isLoggedIn) {
        res.sendFile(path.join(__dirname, 'dashboard.html'));
    } else {
        res.redirect('/login');
    }
});

// E. Proses POST Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const userFound = users.find(u => u.username === username && u.password === password);

    if (userFound) {
        req.session.isLoggedIn = true;
        req.session.username = username;
        res.redirect('/dashboard');
    } else {
        res.send('Login Gagal! Username/Password salah. <a href="/login">Kembali</a>');
    }
});

// F. Logout
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

// --- 3. JALANKAN SERVER ---
app.listen(PORT, () => {
    console.log(`==========================================`);
    console.log(`Server aktif di http://localhost:${PORT}`);
    console.log(`Buka Login di  http://localhost:${PORT}/login`);
    console.log(`==========================================`);
});
