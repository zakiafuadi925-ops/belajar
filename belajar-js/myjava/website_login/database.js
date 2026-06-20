const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./users.db');

// Buat tabel users dengan struktur yang lebih lengkap
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        email TEXT UNIQUE,         -- Email sebagai identitas unik utama
        password TEXT,              -- Akan menyimpan hash bcrypt
        google_id TEXT,             -- ID unik dari Google (opsional)
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP -- Mencatat kapan user mendaftar
    )`);
});

module.exports = db;