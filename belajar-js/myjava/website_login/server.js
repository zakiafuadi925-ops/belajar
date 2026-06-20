const express = require('express');
const session = require('express-session');
const path = require('path');
const db = require('./database');
const bcrypt = require('bcrypt');
const saltRounds = 10; // Standar keamanan

const { body, validationResult } = require('express-validator');

const registerValidation = [
    body('username')
        .trim()
        .isLength({ min: 3 }).withMessage('Nama terlalu pendek')
        .custom(value => {
            const blacklist = ['jancuk', 'anjing', 'admin','user', 'users']; // Tambahkan kata yang dilarang
            if (blacklist.includes(value.toLowerCase())) {
                throw new Error('Username tidak diperbolehkan');
            }
            return true;
        }),
    body('email')
        .isEmail().withMessage('Format email tidak valid')
        .normalizeEmail(),
    body('password')
        .isLength({ min: 8 }).withMessage('Password minimal 8 karakter')
];

const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 menit
    max: 5, // Maksimal 5 kali percobaan login per IP
    message: "Terlalu banyak percobaan login, silakan coba lagi setelah 15 menit."
});

const app = express();
const PORT = 3000;

// 1. MIDDLEWARE
app.use(express.urlencoded({ extended: true })); // Untuk membaca data form
app.use(express.json()); // Untuk membaca data JSON
app.use(express.static('public')); // Folder untuk CSS/JS

app.use(session({
    secret: 'kunci-rahasia-anda', // Gunakan string acak untuk keamanan
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 * 30 } // Session berlaku selama 30 menit
}));

// Database user sederhana
const users = [
    { username: "nureh", password: "password123" },
    { username: "hacker", password: "insyaf2026" },
    { username: "admin", password: "123" }
];


// 1. Halaman Register
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

// 2. Proses Register (Simpan ke SQLite)
app.post('/register', registerValidation, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send(errors.array()[0].msg);
    }

    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        // Masukkan username, email, dan password
        db.run(`INSERT INTO users (username, email, password) VALUES (?, ?, ?)`, 
        [username, email, hashedPassword], (err) => {
            if (err) {
                return res.send("Email atau Username sudah terdaftar!");
            }
            res.send("Registrasi Berhasil! <a href='/login'>Login Sekarang</a>");
        });
    } catch (e) {
        res.status(500).send("Kesalahan server");
    }
});



// 2. ROUTES

// Halaman Utama (Login)

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', (req, res) => {
    res.redirect('/login');
});

// Proses Login
app.post('/login', loginLimiter, (req, res) => {
    const { username, password } = req.body;

    db.get(`SELECT * FROM users WHERE username = ?`, [username], async (err, user) => {
        if (err) return res.status(500).send("Terjadi kesalahan sistem.");

        // Tambahkan delay sedikit (opsional) untuk mencegah timing attack
        const match = user ? await bcrypt.compare(password, user.password) : false;

        if (match) {
            req.session.isLoggedIn = true;
            req.session.username = user.username;
            res.redirect('/dashboard');
        } else {
            // PESAN ERROR AMBIGU: Jangan beri tahu bagian mana yang salah
            res.send("Username atau password salah. <a href='/login'>Kembali</a>");
        }
    });
});

// 4. Proteksi Halaman Dashboard
app.get('/dashboard', (req, res) => {
    // Cek apakah user sudah punya "gelang" session
    if (req.session.isLoggedIn) {
        res.sendFile(path.join(__dirname, 'dashboard.html'));
    } else {
        // Jika belum login, tendang balik ke halaman login
        res.send('Akses ditolak! Silakan <a href="/">login</a> terlebih dahulu.');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/login'); // Kembali ke login setelah session dihapus
    });
});

app.get('/api/user', (req, res) => {
    if (req.session.isLoggedIn && req.session.username) {
        res.json({ username: req.session.username });
    } else {
        // Jika diakses tanpa login, berikan status 401 (Unauthorized)
        res.status(401).json({ error: "Sesi tidak valid" });
    }
});

// 3. JALANKAN SERVER (Hanya satu server)
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});