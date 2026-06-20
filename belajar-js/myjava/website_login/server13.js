const express = require('express');
const session = require('express-session');
const path = require('path');
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

// 2. ROUTES

// Halaman Utama (Login)

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', (req, res) => {
    res.redirect('/login');
});


// Proses Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Cari user di dalam array users
    const userFound = users.find(u => u.username === username && u.password === password);

    if (userFound) {
        console.log(`Login berhasil: ${username}`);
        
        req.session.isLoggedIn = true;
        req.session.username = username;
        
        // Redirect ke alamat URL /dashboard
        res.redirect('/dashboard');
        
    } else {
        res.status(401).send('Login Gagal! Username atau Password salah. <a href="/">Kembali</a>');
    }
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


app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/login'); // Kembali ke login setelah session dihapus
    });
});

app.get('/api/user', (req, res) => {
    if (req.session.isLoggedIn) {
        res.json({ username: req.session.username });
    } else {
        res.status(401).json({ error: "Belum login" });
    }
});

// 3. JALANKAN SERVER (Hanya satu server)
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
