from datetime import datetime

# =========================
# FUNGSI BANTU
# =========================

def garis():
    print("-" * 50)

def rupiah(angka):
    return f"Rp{angka:,.0f}".replace(",", ".")

def tengah(teks):
    print(teks.center(50))

def kanan_kiri(kiri, kanan):
    print(f"{kiri:<30}{kanan:>20}")


# =========================
# DATA PRODUK
# =========================

produk = {
    1: ("Kaos Polos", 50000),
    2: ("Kemeja Pria", 120000),
    3: ("Kemeja Wanita", 110000),
    4: ("Jaket Hoodie", 180000),
    5: ("Celana Jeans", 150000),
    6: ("Sweater", 140000),
}

ukuran_list = ["S", "M", "L", "XL"]

# =========================
# LOGIN
# =========================

garis()
print("=== LOGIN KASIR TOKO BAJU ===")

username_benar = "admin"
username = input("Username : ")

if username != username_benar:
    print("Login gagal!")
    exit()

print("\nLogin berhasil!")
print("Selamat datang di TOKO BAJU MODERN")

# =========================
# TRANSAKSI
# =========================

keranjang = []
total_belanja = 0

while True:

    garis()
    print("DAFTAR PRODUK")
    garis()

    for k, v in produk.items():
        print(f"{k}. {v[0]:25} {rupiah(v[1])}")

    print("0. Bayar")

    pilihan = input("\nPilih produk : ")

    if pilihan == "0":
        break

    if not pilihan.isdigit():
        print("Masukkan angka!")
        continue

    pilih = int(pilihan)

    if pilih not in produk:
        print("Produk tidak tersedia!")
        continue

    nama_produk, harga_produk = produk[pilih]

    # pilih ukuran
    print("\nUkuran tersedia:", ", ".join(ukuran_list))
    ukuran = input("Pilih ukuran : ").upper()

    if ukuran not in ukuran_list:
        print("Ukuran tidak tersedia!")
        continue

    try:
        jumlah = int(input("Jumlah beli : "))
    except ValueError:
        print("Jumlah harus angka!")
        continue

    subtotal = jumlah * harga_produk
    total_belanja += subtotal

    keranjang.append((nama_produk, ukuran, jumlah, subtotal))

    print("Produk ditambahkan ke keranjang!")

# =========================
# PERHITUNGAN
# =========================

diskon = total_belanja * 0.10 if total_belanja > 300000 else 0
total_akhir = total_belanja - diskon

print()
garis()
print("Total yang harus dibayar:", rupiah(total_akhir))

# =========================
# PEMBAYARAN
# =========================

print("\nMetode Pembayaran")
print("1. Tunai")
print("2. QRIS")

metode = input("Pilih metode (1/2): ")

if metode == "1":

    while True:
        try:
            bayar = int(input("Masukkan uang: "))
            if bayar < total_akhir:
                print("Uang kurang!")
                continue
            break
        except ValueError:
            print("Harus angka!")

    kembalian = bayar - total_akhir

elif metode == "2":

    print("Pembayaran QRIS berhasil!")
    bayar = total_akhir
    kembalian = 0

else:
    print("Metode tidak tersedia!")
    exit()

# =========================
# CETAK STRUK
# =========================

sekarang = datetime.now()
tanggal = sekarang.strftime("%d-%m-%Y %H:%M:%S")
no_transaksi = sekarang.strftime("%Y%m%d%H%M%S")

print()
garis()
tengah("TOKO BAJU MODERN")
tengah("Jl. Fashion No.123")
tengah("Telp: 08123456789")
garis()

print(f"No Transaksi : {no_transaksi}")
print(f"Kasir        : {username}")
print(f"Tanggal      : {tanggal}")

garis()

for nama, ukuran, jumlah, subtotal in keranjang:
    kiri = f"{nama}({ukuran}) x{jumlah}"
    kanan_kiri(kiri, rupiah(subtotal))

garis()

kanan_kiri("Subtotal", rupiah(total_belanja))
kanan_kiri("Diskon", rupiah(diskon))
kanan_kiri("Total", rupiah(total_akhir))
kanan_kiri("Bayar", rupiah(bayar))
kanan_kiri("Kembalian", rupiah(kembalian))

garis()
tengah("Terima Kasih")
tengah("Selamat Berbelanja")
garis()

# =========================
# SIMPAN STRUK
# =========================

nama_file = f"struk_{no_transaksi}.txt"

with open(nama_file, "w") as file:

    file.write("=== STRUK TOKO BAJU ===\n")
    file.write(f"No Transaksi : {no_transaksi}\n")
    file.write(f"Kasir        : {username}\n")
    file.write(f"Tanggal      : {tanggal}\n\n")

    for nama, ukuran, jumlah, subtotal in keranjang:
        file.write(f"{nama}({ukuran}) x{jumlah} = {rupiah(subtotal)}\n")

    file.write("\n")
    file.write(f"Subtotal : {rupiah(total_belanja)}\n")
    file.write(f"Diskon   : {rupiah(diskon)}\n")
    file.write(f"Total    : {rupiah(total_akhir)}\n")
    file.write(f"Bayar    : {rupiah(bayar)}\n")
    file.write(f"Kembali  : {rupiah(kembalian)}\n")

print(f"\nStruk tersimpan: {nama_file}")