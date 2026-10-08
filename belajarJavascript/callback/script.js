// Callback
// Synchronous Callback

// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

function tampilkanPesan(callback) {
  const nama = prompt("Masukkan Nama: ");
  callback(nama);
}
tampilkanPesan((nama) => alert(`Halo, ${nama}`));

const mhs = [
  {
    nama: "Sandhika Galih",
    nrp: "0403040023",
    email: "sandhikagalih@unpas.ac.id",
    jurusan: "Tehnik Informatika",
    idDosenWali: 1,
  },
  {
    nama: "Doddy Ferdiansyah",
    nrp: "133040123",
    email: "doddy@gmail.com",
    jurusan: "Tehnik Informatika",
    idDosenWali: 2,
  },
];
