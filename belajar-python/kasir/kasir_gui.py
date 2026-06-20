import tkinter as tk
from tkinter import ttk, messagebox
import datetime
import random

root = tk.Tk()
root.title("POS Kasir Restoran")
root.geometry("900x600")
root.configure(bg="#ecf0f1")

# =====================
# JAM
# =====================

label_jam = tk.Label(root,font=("Arial",10),bg="#ecf0f1")
label_jam.pack(anchor="ne",padx=10,pady=5)

def update_jam():
    sekarang = datetime.datetime.now().strftime("%d-%m-%Y %H:%M:%S")
    label_jam.config(text=sekarang)
    root.after(1000, update_jam)

update_jam()

# =====================
# TITLE
# =====================

tk.Label(
    root,
    text="RESTO NUREH SEDERHANA",
    font=("Arial",22,"bold"),
    bg="#ecf0f1",
    fg="#2c3e50"
).pack()

no_transaksi = random.randint(1000,9999)

tk.Label(
    root,
    text=f"Transaksi #{no_transaksi}",
    font=("Arial",11),
    bg="#ecf0f1"
).pack()

# =====================
# DATA MENU
# =====================

menu = {
1:("Nasi Goreng",15000),
2:("Nasi Seafood",20000),
3:("Ayam Bakar",20000),
4:("Ayam Penyet",25000),
5:("Ayam Geprek",25000),
6:("Teh Manis",5000),
7:("Jeruk Segar",7000),
8:("Lemon Tea",7000)
}

total = 0

# =====================
# FRAME UTAMA
# =====================

frame_main = tk.Frame(root,bg="#ecf0f1")
frame_main.pack(pady=10)

frame_menu = tk.Frame(frame_main)
frame_menu.grid(row=0,column=0,padx=20)

frame_transaksi = tk.Frame(frame_main)
frame_transaksi.grid(row=0,column=1)

# =====================
# MENU
# =====================

tk.Label(frame_menu,text="DAFTAR MENU",font=("Arial",12,"bold")).pack()

for k,v in menu.items():
    tk.Label(
        frame_menu,
        text=f"{k}. {v[0]} - Rp{v[1]}",
        anchor="w"
    ).pack(fill="x")

# =====================
# INPUT
# =====================

tk.Label(frame_menu,text="Kode Menu").pack(pady=5)
entry_kode = tk.Entry(frame_menu,width=20)
entry_kode.pack()

tk.Label(frame_menu,text="Jumlah").pack(pady=5)
entry_jumlah = tk.Entry(frame_menu,width=20)
entry_jumlah.pack()

# =====================
# TABEL TRANSAKSI
# =====================

columns=("Menu","Qty","Harga","Subtotal")

tree = ttk.Treeview(
    frame_transaksi,
    columns=columns,
    show="headings",
    height=15
)

for col in columns:
    tree.heading(col,text=col)

tree.pack()

# =====================
# TAMBAH BARANG
# =====================

def tambah_barang():

    global total

    try:
        kode = int(entry_kode.get())
        jumlah = int(entry_jumlah.get())
    except:
        messagebox.showerror("Error","Input salah")
        return

    if kode not in menu:
        messagebox.showwarning("Error","Menu tidak ada")
        return

    nama,harga = menu[kode]
    subtotal = harga * jumlah

    tree.insert("",tk.END,values=(nama,jumlah,harga,subtotal))

    total += subtotal
    label_total.config(text=f"Total : Rp{total}")

    entry_kode.delete(0,tk.END)
    entry_jumlah.delete(0,tk.END)

# =====================
# HAPUS ITEM
# =====================

def hapus_item():

    global total

    selected = tree.selection()

    if not selected:
        return

    item = tree.item(selected)

    subtotal = int(item["values"][3])

    total -= subtotal

    tree.delete(selected)

    label_total.config(text=f"Total : Rp{total}")

# =====================
# RESET
# =====================

def reset():

    global total

    for i in tree.get_children():
        tree.delete(i)

    total = 0
    label_total.config(text="Total : Rp0")

# =====================
# BAYAR
# =====================

def bayar():

    if total == 0:
        messagebox.showwarning("Info","Belum ada transaksi")
        return

    window = tk.Toplevel(root)
    window.title("Pembayaran")
    window.geometry("300x250")

    tk.Label(window,text=f"Total : Rp{total}",font=("Arial",14)).pack(pady=10)

    tk.Label(window,text="Uang Bayar").pack()

    entry_uang = tk.Entry(window)
    entry_uang.pack()

    def proses():

        try:
            uang = int(entry_uang.get())
        except:
            messagebox.showerror("Error","Masukkan uang")
            return

        if uang < total:
            messagebox.showwarning("Error","Uang kurang")
        else:

            kembalian = uang - total

            messagebox.showinfo(
                "Transaksi Berhasil",
                f"Kembalian : Rp{kembalian}"
            )

            window.destroy()
            reset()

    tk.Button(
        window,
        text="Proses",
        command=proses,
        bg="#27ae60",
        fg="white"
    ).pack(pady=10)

# =====================
# BUTTON
# =====================

frame_button = tk.Frame(root,bg="#ecf0f1")
frame_button.pack(pady=10)

tk.Button(
    frame_button,
    text="Tambah",
    command=tambah_barang,
    bg="#3498db",
    fg="white",
    width=12
).grid(row=0,column=0,padx=5)

tk.Button(
    frame_button,
    text="Hapus Item",
    command=hapus_item,
    bg="#e67e22",
    fg="white",
    width=12
).grid(row=0,column=1,padx=5)

tk.Button(
    frame_button,
    text="Reset",
    command=reset,
    bg="#e74c3c",
    fg="white",
    width=12
).grid(row=0,column=2,padx=5)

tk.Button(
    frame_button,
    text="Bayar",
    command=bayar,
    bg="#27ae60",
    fg="white",
    width=12
).grid(row=0,column=3,padx=5)

# =====================
# TOTAL
# =====================

label_total = tk.Label(
    root,
    text="Total : Rp0",
    font=("Arial",18,"bold"),
    fg="green",
    bg="#ecf0f1"
)

label_total.pack(pady=10)

root.bind("<Return>",lambda e: tambah_barang())

root.mainloop()
