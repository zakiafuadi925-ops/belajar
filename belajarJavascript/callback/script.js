// Callback
// Synchronous Callback

// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("Masukkan Nama: ");
//   callback(nama);
// }
// tampilkanPesan((nama) => alert(`Halo, ${nama}`));

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
  {
    nama: "Erik",
    nrp: "104040001",
    email: "erik@gmail.com",
    jurusan: "Tehnik Industri",
    idDosenWali: 2,
  },
];

console.log("Mulai");
mhs.forEach((m) => {
  for (let i = 0; i < 10000000; i++) {
    date = new Date();
  }
  console.log(m.nama);
});
console.log("Selesai");

// Asynchronous Callback
function getDataMahasiswa(url, success, error) {
  // simulasi request ajax
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };

  xhr.open("get", url);
  xhr.send();
}

// getDataMahasiswa(
//   "data/mahasiswa.json",
//   (results) => {
//     console.log(JSON.parse(results));
//   },
//   () => {},
// );

// console.log("mulai");
// getDataMahasiswa(
//   "data/mahasiswa.json",
//   (results) => {
//     const mhs = JSON.parse(results);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {},
// );
// console.log("selesai");

// JQUERY
console.log("mulai");
$.ajax({
  url: "data/mahasiswa.json",
  success: (results) => {
    results.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");
