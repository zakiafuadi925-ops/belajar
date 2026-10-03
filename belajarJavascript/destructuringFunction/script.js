// Destructuring

function penjumlahanPerkalian(a, b) {
  return [a + b, a * b];
}

let jumlah = penjumlahanPerkalian(2, 3)[0];
let kali2 = penjumlahanPerkalian(2, 3)[1];

// console.log(jumlah);
const [jumlah1, kali1] = penjumlahanPerkalian(2, 3);
console.log(jumlah1);
console.log(kali1);

function kalkulasi(a, b) {
  return [a + b, a - b, a * b, a / b];
}

const [tambah, kurang, kali, bagi] = kalkulasi(5, 5);
console.log(tambah);
console.log(kurang);
console.log(kali);
console.log(bagi);

function kalkulasiObj(a, b) {
  return {
    tambahObj: a + b,
    kurangObj: a - b,
    kaliObj: a * b,
    bagiObj: a / b,
  };
}

const { bagiObj, tambahObj, kaliObj, kurangObj } = kalkulasiObj(3, 4);

console.log(kurangObj);

// Destructure Function Arguments
const mhs1 = {
  nama: "Sandhika Galih",
  umur: 33,
  email: "sandikagalih@unpas.ac.id",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

// function cetakMhs(mhs) {
//   return `Halo, nama saya ${mhs1.nama}, dan saya berumur ${mhs1.umur} tahun.`;
// }

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, dan saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));
