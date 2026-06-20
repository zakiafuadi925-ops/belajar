import sqlite3
from datetime import datetime
import customtkinter as ctk
import sqlite3
from datetime import datetime
from tkinter import messagebox, ttk

# Konfigurasi Tema
ctk.set_appearance_mode("dark")
ctk.set_default_color_theme("blue")

class AppKeuangan(ctk.CTk):
    def __init__(self):
        super().__init__()

        self.title("Catatan Keuangan Modern")
        self.geometry("800x600")

        self.inisialisasi_db()
        
        # Layout Utama
        self.grid_columnconfigure(1, weight=1)
        self.grid_rowconfigure(0, weight=1)

        # --- SIDEBAR (Input Data) ---
        self.sidebar = ctk.CTkFrame(self, width=250, corner_radius=0)
        self.sidebar.grid(row=0, column=0, sticky="nsew", padx=10, pady=10)
        
        ctk.CTkLabel(self.sidebar, text="TAMBAH DATA", font=ctk.CTkFont(size=20, weight="bold")).pack(pady=20)
        
        self.ent_tgl = ctk.CTkEntry(self.sidebar, placeholder_text="Tanggal (YYYY-MM-DD)")
        self.ent_tgl.pack(pady=10, padx=20, fill="x")
        
        self.ent_kat = ctk.CTkEntry(self.sidebar, placeholder_text="Kategori (Makan/Bensin)")
        self.ent_kat.pack(pady=10, padx=20, fill="x")
        
        self.ent_nom = ctk.CTkEntry(self.sidebar, placeholder_text="Jumlah (Angka)")
        self.ent_nom.pack(pady=10, padx=20, fill="x")
        
        self.ent_ket = ctk.CTkEntry(self.sidebar, placeholder_text="Keterangan")
        self.ent_ket.pack(pady=10, padx=20, fill="x")

        btn_simpan = ctk.CTkButton(self.sidebar, text="Simpan Catatan", command=self.simpan_data)
        btn_simpan.pack(pady=20, padx=20, fill="x")

        # --- MAIN AREA (Dashboard & Table) ---
        self.main_frame = ctk.CTkFrame(self)
        self.main_frame.grid(row=0, column=1, sticky="nsew", padx=10, pady=10)

        # Kartu Saldo
        self.card_saldo = ctk.CTkFrame(self.main_frame, fg_color="#1f538d", height=100)
        self.card_saldo.pack(pady=20, padx=20, fill="x")
        
        self.lbl_saldo_title = ctk.CTkLabel(self.card_saldo, text="TOTAL PENGELUARAN", font=ctk.CTkFont(size=14))
        self.lbl_saldo_title.pack(pady=(10, 0))
        
        self.lbl_saldo_value = ctk.CTkLabel(self.card_saldo, text="Rp 0", font=ctk.CTkFont(size=32, weight="bold"))
        self.lbl_saldo_value.pack(pady=(0, 10))

        # Tabel (Menggunakan Standard Treeview untuk data)
        self.style = ttk.Style()
        self.style.theme_use("default")
        self.style.configure("Treeview", background="#2b2b2b", foreground="white", fieldbackground="#2b2b2b", borderwidth=0)

        self.tree = ttk.Treeview(self.main_frame, columns=("Tgl", "Kat", "Nom", "Ket"), show='headings')
        self.tree.heading("Tgl", text="Tanggal")
        self.tree.heading("Kat", text="Kategori")
        self.tree.heading("Nom", text="Jumlah")
        self.tree.heading("Ket", text="Keterangan")
        self.tree.pack(expand=True, fill="both", padx=20, pady=10)

        self.refresh_tampilan()

    def inisialisasi_db(self):
        conn = sqlite3.connect('keuangan_v2.db')
        conn.execute('''CREATE TABLE IF NOT EXISTS pengeluaran 
                     (id INTEGER PRIMARY KEY AUTOINCREMENT, tgl TEXT, kat TEXT, nom REAL, ket TEXT)''')
        conn.close()

    def simpan_data(self):
        tgl = self.ent_tgl.get() or datetime.now().strftime("%Y-%m-%d")
        kat = self.ent_kat.get()
        nom = self.ent_nom.get()
        ket = self.ent_ket.get()

        if not nom.isdigit():
            messagebox.showerror("Error", "Jumlah harus angka!")
            return

        conn = sqlite3.connect('keuangan_v2.db')
        conn.execute("INSERT INTO pengeluaran (tgl, kat, nom, ket) VALUES (?,?,?,?)", (tgl, kat, float(nom), ket))
        conn.commit()
        conn.close()

        # Reset Form
        self.ent_kat.delete(0, 'end'); self.ent_nom.delete(0, 'end'); self.ent_ket.delete(0, 'end')
        self.refresh_tampilan()

    def refresh_tampilan(self):
        # Clear Table
        for item in self.tree.get_children():
            self.tree.delete(item)
            
        # Load Data
        conn = sqlite3.connect('keuangan_v2.db')
        cursor = conn.cursor()
        cursor.execute("SELECT tgl, kat, nom, ket FROM pengeluaran ORDER BY tgl DESC")
        rows = cursor.fetchall()
        
        total = 0
        for row in rows:
            self.tree.insert("", "end", values=(row[0], row[1], f"Rp {row[2]:,.0f}", row[3]))
            total += row[2]
            
        conn.close()
        self.lbl_saldo_value.configure(text=f"Rp {total:,.0f}")

if __name__ == "__main__":
    app = AppKeuangan()
    app.mainloop()


# 1. Inisialisasi Database
def inisialisasi_db():
    conn = sqlite3.connect('keuangan.db')
    cursor = conn.cursor()
    # Membuat tabel jika belum ada
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS pengeluaran (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            tanggal TEXT,
            kategori TEXT,
            jumlah REAL,
            keterangan TEXT
        )
    ''')
    conn.commit()
    conn.close()
# MODIFIKASI: Menambahkan parameter tanggal
def tambah_pengeluaran(tanggal, kategori, jumlah, keterangan):
    conn = sqlite3.connect('keuangan.db')
    cursor = conn.cursor()
    
    # Jika user tidak mengisi tanggal, gunakan tanggal hari ini
    if tanggal.strip() == "":
        tanggal = datetime.now().strftime("%Y-%m-%d")
        
    cursor.execute('''
        INSERT INTO pengeluaran (tanggal, kategori, jumlah, keterangan)
        VALUES (?, ?, ?, ?)
    ''', (tanggal, kategori, jumlah, keterangan))
    conn.commit()
    conn.close()
    print(f"\n✅ Catatan untuk tanggal {tanggal} berhasil disimpan!")

def tampilkan_semua():
    conn = sqlite3.connect('keuangan.db')
    cursor = conn.cursor()
    # MODIFIKASI: Urutkan berdasarkan tanggal terbaru
    cursor.execute('SELECT * FROM pengeluaran ORDER BY tanggal DESC')
    rows = cursor.fetchall()
    
    print("\n" + "="*75)
    print(f"{'ID':<3} | {'Tanggal':<12} | {'Kategori':<15} | {'Jumlah':<10} | {'Ket'}")
    print("-" * 75)
    for row in rows:
        print(f"{row[0]:<3} | {row[1]:<12} | {row[2]:<15} | {row[3]:<10} | {row[4]}")
    print("="*75)
    conn.close()

# --- Program Utama ---
inisialisasi_db()

while True:
    print("\n=== MENU UTAMA ===")
    print("1. Tambah Pengeluaran")
    print("2. Lihat Riwayat")
    print("3. Keluar")
    
    pilihan = input("Pilih menu (1/2/3): ")
    
    if pilihan == '1':
        print("\n--- Input Data ---")
        print("Format tanggal: YYYY-MM-DD (Contoh: 2023-12-31)")
        tgl = input("Tanggal (Kosongkan jika hari ini): ")
        kat = input("Kategori: ")
        try:
            nom = float(input("Jumlah uang: "))
            ket = input("Keterangan: ")
            tambah_pengeluaran(tgl, kat, nom, ket)
        except ValueError:
            print("❌ Error: Jumlah uang harus berupa angka!")
            
    elif pilihan == '2':
        tampilkan_semua()
    elif pilihan == '3':
        break

# 2. Fungsi Menambah Data
def tambah_pengeluaran(kategori, jumlah, keterangan):
    conn = sqlite3.connect('keuangan.db')
    cursor = conn.cursor()
    tanggal = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    cursor.execute('''
        INSERT INTO pengeluaran (tanggal, kategori, jumlah, keterangan)
        VALUES (?, ?, ?, ?)
    ''', (tanggal, kategori, jumlah, keterangan))
    conn.commit()
    conn.close()
    print("\n✅ Catatan berhasil disimpan!")

# 3. Fungsi Melihat Data
def tampilkan_semua():
    conn = sqlite3.connect('keuangan.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM pengeluaran')
    rows = cursor.fetchall()
    
    print("\n--- RIWAYAT PENGELUARAN ---")
    print(f"{'ID':<3} | {'Tanggal':<20} | {'Kategori':<15} | {'Jumlah':<10} | {'Ket'}")
    print("-" * 70)
    for row in rows:
        print(f"{row[0]:<3} | {row[1]:<20} | {row[2]:<15} | {row[3]:<10} | {row[4]}")
    conn.close()

# --- Program Utama ---
inisialisasi_db()

while True:
    print("\n=== APLIKASI KEUANGAN SIMPEL ===")
    print("1. Tambah Pengeluaran")
    print("2. Lihat Riwayat")
    print("3. Keluar")
    
    pilihan = input("Pilih menu (1/2/3): ")
    
    if pilihan == '1':
        kat = input("Kategori (makanan/transport/dll): ")
        nom = float(input("Jumlah uang: "))
        ket = input("Keterangan: ")
        tambah_pengeluaran(kat, nom, ket)
    elif pilihan == '2':
        tampilkan_semua()
    elif pilihan == '3':
        print("Sampai jumpa!")
        break
    else:
        print("Pilihan tidak valid.")