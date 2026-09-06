console.log("Selamat datang di permainan suit jawa");
prompt("masukkan nama anda: ");
var tanya = true;
while (tanya) {
  // menangkap pilihan player
  var p = prompt("pilih: gajah, semut atau orang");

  // menangkap pilihan computer
  // membangkitkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  // console.log(comp);

  var hasil = "";
  // menentukan rules
  if (p == comp) {
    hasil = "SERI!";
  } else if (p == "gajah") {
    hasil = comp == "orang" ? "MENANG!" : "KALAH!";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "KALAH!" : "MENANG!";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "KALAH!" : "MENANG!";
  } else {
    hasil = " memasukkan pilihan yang salah!";
  }
  //   if (comp == "orang") {
  //     hasil = "MENANG!";
  //   } else {
  //     hasil = "KALAH!";
  //   }
  // } else if (p == "orang") {
  //   if (comp == "gajah") {
  //     hasil = "KALAH!";
  //   } else {
  //     hasil = "MENANG!";
  //   }
  // } else if (p == "semut") {
  //   if (comp == "orang") {
  //     hasil = "KALAH!";
  //   } else {
  //     hasil = "MENANG!";
  //   }
  // } else {
  //   hasil = " memasukkan pilihan yang salah!";
  // }

  // tampilkan hasilnya
  alert(
    "Anda memilih: " +
      p +
      " dan komputer memilih: " +
      comp +
      "\nMaka hasilnya: Anda " +
      hasil,
  );
  tanya = confirm("lagi?");
}

alert("terima kasih sudah bermain");
