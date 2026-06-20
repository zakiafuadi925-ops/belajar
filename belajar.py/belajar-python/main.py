import random

while True:
    welcome_message = "WELCOME TO CUYPY GAMES!"
    Nyawa = 3
    cuypy_position = random.randint(1, 4)

    print("*******")
    print(f"** {welcome_message} **")
    print("*******")

    nama_user= input("masukkan nama kamu:")
    
    while Nyawa > 0:
      print(f"\nSisa nyawa kamu : {"nyawa"}")
      print("[1] [2] [3] [4]")

    pilihan_user = int(input("Menurut kamu di goa nomor berapa CUYPY berada? [1 /2 /3 /4]:"))

    if pilihan_user == cuypy_position:
         print(f"SELAMAT {nama_user} KAMU MENANG! posisi CUYPY ada di {cuypy_position} ")
         break
    else:
         Nyawa = 1
         print(f"CUYPY ada di goa nomor {cuypy_position} ")
    if Nyawa == 0:
        print(f"\n GAME OVER ! Nyawa kamu habis.")
             

    main_lagi = input("\nMau main lagi? (Y/N) ").lower()
    if main_lagi == "n":
        print("Terima kasih sudah bermain")

        break
         