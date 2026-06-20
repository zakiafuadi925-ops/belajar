Menu = {
 "Friend Chicken" : 15000,
 "Burger Queen" : 10000,
 "French Fries" : 10000,
 "Kebab Terbagas" : 15000,
 "Jasmine Tea" : 5000,
 "Es Teler" : 10000,
 "Es Doger" : 10000,
}

print("==================== DAFTAR MENU ======================")
for i in Menu:
    print("Daftar Menu : ", i,"\t Harga :", Menu[i]")
print("Pembelian diatas Rp100000 mendapatkan diskon 15%")
print("===================================================")

beli = input("Pilihan Menu : ")
jumlah = int(input("Jumlah Pesenan : ")

bayar = jumlah * Menu[beli]
if bayar > 100000: 
  Diskon = bayar*15/100
  Total = bayar - Diskon
else:
  Total = bayar

print("============== Struk Pembayaran ==============")
print("Menu yang dipesan :", beli)
print("Jumlah Pesanan :", jumlah)
print("Total Bayar :", total)






