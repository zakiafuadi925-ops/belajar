// cara membuat object pada javascript
// 1. Object Literal
// Tidak efektif untuk object yang banyak
// let mahasiswa = {
//   nama: "Sandika",
//   energy: 10,
//   makan: (porsi) => {
//     this.energy = this.energy + porsi;
//     console.log("selamat makan");
//   },
// };

// 2. Function Declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = (porsi) => {
//     this.energi += porsi;
//     console.log("halo " + nama + " Selamat makan");
//   };

//   mahasiswa.main = (jam) => {
//     this.energi -= jam;
//     console.log(nama + " bermain selama " + jam);
//   };
//   return mahasiswa;
// }

// let sandika = Mahasiswa("Sandhika", 10);
// let doddy = Mahasiswa("Doddy", 19);

// 3. Constructor Function
// keyword new
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = (porsi) => {
//     this.energi += porsi;
//     console.log("halo " + nama + " Selamat makan");
//   };

//   this.main = (jam) => {
//     this.energi -= jam;
//     console.log(nama + " bermain selama " + jam);
//   };
// }

// let sandika = new Mahasiswa("sandika", 10);

// 4. Object.create()
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log("halo " + this.nama + " Selamat makan");
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(this.nama + " bermain selama " + jam);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let sandika = Mahasiswa("Sandhika", 10);
// let doddy = Mahasiswa("Doddy", 19);

// 5. PROTOTYPE

// function Mahasiswa(nama, energi) {
//   // let mahasiswa = Object.create(methodMahasiswa);
//   // let mahasiswa = {};\
//   // let this = Object.create(Mahasiswa.prototype) terjadi dibelakang layar
//   this.nama = nama;
//   this.energi = energi;

//   // return mahasiswa;
//   // return this;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return "Halo " + this.nama + ", selamat makan!";
// };
// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return "Halo " + this.nama + ", selamat bermain!";
// };
// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return "Halo " + this.nama + ", selamat tidur!";
// };

// let sandika = new Mahasiswa("sandika", 10);

/// Versi Class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return "Halo " + this.nama + ", selamat makan!";
  }
  main(jam) {
    this.energi -= jam;
    return "Halo " + this.nama + ", selamat bermain!";
  }
  tidur(jam) {
    this.energi += jam * 2;
    return "Halo " + this.nama + ", selamat tidur!";
  }
}
