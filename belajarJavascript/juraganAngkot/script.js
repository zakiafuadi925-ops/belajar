// var penumpang = ["Sandhika", undefined, "Doddy", "Jin"];
// var tambahPenumpang = function (namaPenumpang, penumpang) {
//   // Jika angkot kosong, maka penumpang masuk ke dalam angkot
//   if (penumpang.length == 0) {
//     // tambah penumpang di awal array
//     penumpang.push(namaPenumpang);
//     // kembalikan isi array & keluar dari function
//     return penumpang;
//   }
//   // Cek duplikasi
//   // telusuri seluruh kursi dari awal
//   for (var i = 0; i < penumpang.length; i++) {
//     if (penumpang[i] == namaPenumpang) {
//       // jika sudah ada nama yang sama

//       // tampilkan pesan kesalahannya
//       console.log(namaPenumpang + " penumpang sudah ada didalam angkot.");
//       return penumpang; // langsung keluar jika ketemu nama yang sama
//     }
//   }
//   // Jika tidak ada duplikat, cari kursi kosong
//   for (var i = 0; i < penumpang.length; i++) {
//     if (penumpang[i] == undefined) {
//       // tambah penumpang di kursi tersebut
//       penumpang[i] = namaPenumpang;

//       // kembalikan isi array & keluar dari function
//       return penumpang;
//     }
//   }
//   penumpang.push(namaPenumpang);
//   return penumpang;
// };

// //       } else if (i == penumpang.length - 1) {
// //         penumpang.push(namaPenumpang);
// //         return penumpang;
// //       } else {
// //         // kembalikan usu array & keluar dari function
// //         return penumpang;
// //         //jika ada kursi kosong
// //       }
// //     }
// //     //   } else {
// //     //     // tambah penumpang di ahir array
// //     //     penumpang.push(namaPenumpang);
// //     //     // kembalikan isi array & keluar dari function
// //     //     return penumpang;
// //     //   }
// //   }
// // };
// // tambahPenumpang("Jin", penumpang);
// console.log(penumpang);
var penumpang = ["Sandhika", undefined, "Doddy", "Jin"];

var tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  }

  // 1. DAHULUKAN CEK DUPLIKASI (telusuri seluruh array dulu)
  for (var i = 0; i < penumpang.length; i++) {
    if (penumpang[i] == namaPenumpang) {
      console.log(namaPenumpang + " sudah ada di dalam angkot.");
      return penumpang; // Langsung keluar jika ketemu nama yang sama
    }
  }

  // 2. JIKA TIDAK ADA DUPLIKAT, CARI KURSI KOSONG
  for (var i = 0; i < penumpang.length; i++) {
    if (penumpang[i] == undefined) {
      penumpang[i] = namaPenumpang;
      return penumpang; // Langsung keluar setelah mengisi kursi kosong
    }
  }

  // 3. JIKA TIDAK ADA KURSI KOSONG, DUDUK DI PALING BELAKANG
  penumpang.push(namaPenumpang);
  return penumpang;
};

tambahPenumpang("Jin", penumpang);
console.log(penumpang);

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    // Jika angkot kosong tampilkan pesan Angkot sedang kosong
    console.log("Angkot sedang kosong!");
    // kembalikan array keluar fungsi
    return penumpang;
  }
  for (var i = 0; i < penumpang.length; i++) {
    // Jika penumpang[i] sama dengan nama penumpang
    if (penumpang[i] == namaPenumpang) {
      // Maka kursi penumpang[i] akan dikosongkan menjadi undefined
      penumpang[i] = undefined;
      // kembalikan array penumpang
      return penumpang;
    }
  }
  // jika tidak ada namaPenumpang yang sama tampilkan pesan
  console.log(namaPenumpang + " tidak ada didalam angkot!");
  // kembalikan array penumpang
  return penumpang;
};
