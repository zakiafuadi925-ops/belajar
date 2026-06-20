from datetime import datetime

def garis(char="-"):
    print(char * 50)

def rupiah(angka):
    return f"Rp{angka:,.0f}".replace(",", ".")

def tengah(teks):
    print(teks.center(50))

def kanan_kiri(kiri, kanan):
    print(f"{kiri:<30}{kanan:>20}")

menu = {
    1: ("Nasi Goreng Ayam", 15000),
    2: ("Nasi Goreng Seafood", 20000),
    3: ("Nasi Goreng Kebuli", 20000),
    4: ("Nasi Goreng Spesial", 20000),
    5: ("Nasi Ayam Bakar Sambal Ijo", 20000),
    6: ("Nasi Ayam Penyet Sambal Terasi", 20000),
    7: ("Nasi Ayam Penyet Spesial Jumbo", 25000),
    8: ("Teh Manis", 5000),
    9: ("Jeruk Segar", 7000),
    10: ("Lemon Tea", 7000),
}


garis()
print("=== LOGIN KASIR ===")

username_benar = "nureh"
username = input("Username : ")

if username != username_benar:
    print("Username salah!")
    exit()

print("\nLogin berhasil!")
print("Selamat Datang di RESTORAN SEDERHANA")


keranjang = []
total_belanja = 0

while True:

    garis()
    print("DAFTAR MENU")
    garis()

    for k, v in menu.items():
        print(f"{k}. {v[0]:35} {rupiah(v[1])}")

    print("0. Bayar & Cetak Struk")

    pilihan = input("\nPilih menu : ")

    if pilihan == "0":
        break

    if not pilihan.isdigit():
        print("Masukkan angka!")
        continue

    pilih = int(pilihan)

    if pilih not in menu:
        print("Menu tidak tersedia!")
        continue

    try:
        jumlah = int(input("Jumlah beli : "))
    except ValueError:
        print("Jumlah harus angka!")
        continue

    nama_item, harga_item = menu[pilih]
    subtotal = jumlah * harga_item

    total_belanja += subtotal

    keranjang.append((nama_item, jumlah, subtotal))

    print("Item ditambahkan ke keranjang.")


diskon = total_belanja * 0.05 if total_belanja > 100000 else 0
ppn = total_belanja * 0.10
total_akhir = total_belanja - diskon + ppn

print()
garis()
print("Total yang harus dibayar :", rupiah(total_akhir))


print("\nMetode Pembayaran:")
print("1. Tunai")
print("2. QRIS")

metode = input("Pilih metode (1/2): ")

if metode == "1":

    while True:
        try:
            bayar = int(input("Masukkan uang dibayar: "))
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


sekarang = datetime.now()
format_waktu = sekarang.strftime("%d-%m-%Y %H:%M:%S")

no_transaksi = sekarang.strftime("%Y%m%d%H%M%S")

print()
garis()
tengah("NUREH RESTO")
tengah("Jl. Contoh No.123")
tengah("Telp: 081234567890")
garis()

print(f"{'No Transaksi':<12}: {no_transaksi}")
print(f"{'Kasir':<12}: {username}")
print(f"{'Tanggal':<12}: {format_waktu}")

garis()

for nama, jumlah, subtotal in keranjang:
    kiri = f"{nama} x{jumlah}"
    kanan_kiri(kiri, rupiah(subtotal))

garis()

kanan_kiri("Subtotal", rupiah(total_belanja))
kanan_kiri("Diskon", rupiah(diskon))
kanan_kiri("PPN 10%", rupiah(ppn))
kanan_kiri("Total", rupiah(total_akhir))
kanan_kiri("Bayar", rupiah(bayar))
kanan_kiri("Kembalian", rupiah(kembalian))

garis()
tengah("Terima Kasih")
tengah("Selamat Datang Kembali")
garis()


nama_file = f"struk_{no_transaksi}.txt"

with open(nama_file, "w") as file:

    file.write("=== STRUK BELANJA ===\n")
    file.write(f"No Transaksi : {no_transaksi}\n")
    file.write(f"Kasir        : {username}\n")
    file.write(f"Tanggal      : {format_waktu}\n\n")

    for nama, jumlah, subtotal in keranjang:
        file.write(f"{nama} x{jumlah} = {rupiah(subtotal)}\n")

    file.write("\n")
    file.write(f"Subtotal : {rupiah(total_belanja)}\n")
    file.write(f"Diskon   : {rupiah(diskon)}\n")
    file.write(f"PPN 10%  : {rupiah(ppn)}\n")
    file.write(f"Total    : {rupiah(total_akhir)}\n")
    file.write(f"Bayar    : {rupiah(bayar)}\n")
    file.write(f"Kembali  : {rupiah(kembalian)}\n")

print(f"\nStruk tersimpan sebagai: {nama_file}")










































