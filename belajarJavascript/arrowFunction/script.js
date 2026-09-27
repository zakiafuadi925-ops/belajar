// Function Expression
// const tampilNama = function (nama) {
//   return `Halo, ${nama}`;
// };
// console.log(tampilNama("Sandhika"));

// const tampilNama = (nama) => {
//   return `Halo, ${nama}`;
// };
// console.log(tampilNama("Sandhika"));

// // implisit return
// const tampilNamaImp = (nama) => `Halo, ${nama}`;
// console.log(tampilNama("Doddy"));

// let mahasiswa = ["Sandhika Galih", "Doddy Ferdiansyah", "Erik"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => ({
//   nama: nama,
//   jumlahHuruf: nama.length,
// }));
// console.table(jumlahHuruf);

// Konsep this pada arrow function
// Arrow function tidak memiliki konsep this

// Constructor
// const Mahasiswa = function () {
//   this.nama = "Sandhika";
//   this.umur = 33;
//   this.sayHello = function () {
//     console.log(
//       `Halo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun.`,
//     );
//   };
// };
// const sandhika = new Mahasiswa();

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  console.log(this);
  this.classList.toggle("size");
  setTimeout(() => {
    this.classList.toggle("caption");
  }, 600);
});
