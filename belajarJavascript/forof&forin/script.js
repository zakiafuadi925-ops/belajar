// for..of
// const mhs = ["Sandhika", "Doddy", "Erik"];

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

// String
const nama = "Sandhika";
// for (const n of nama) {
//   console.log(n);
// }

const mhs = ["Sandhika", "Doddy", "Erik"];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

for (const [i, m] of mhs.entries()) {
  console.log(`${m} adalah mahasiswa ke-${i + 1}`);
}

// Nodelist
const liNama = document.querySelectorAll(".nama");

liNama.forEach((n) => console.log(n.textContent));

// Arguments

function jumlahAngka() {
  // return arguments.reduce((a, i) => a + i);
  // arguments.forEach(a=> jumlah += a);
  let jumlah = 0;
  for (a of arguments) {
    jumlah += a;
  }
  return jumlah;
}

console.log(jumlahAngka(1, 2, 3, 4, 5));

// for..in

const mhsIn = {
  nama: "Sandhika",
  umur: 33,
  email: "sandhikagalih@unpas.ac.id",
};

for (m in mhsIn) {
  console.log(mhs[m]);
}
