// Hgher order function
function ucapkanSalam(waktu) {
  return function (nama) {
    // callback function
    console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
  };
}
let selamatMalam = ucapkanSalam("Malam");
console.dir(selamatMalam("Sandhika"));

// Filter, Map, Reduce

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
// for
let newAngka = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka.push(angka[i]);
  }
}
console.log(newAngka);

// Menggunakan filter

// let newAngka1 = angka.filter(function (a) {
//   return a >= 3;
// });
let newAngka1 = angka.filter((a) => a >= 3);

console.log(newAngka1);

// Map
let angkaMap = angka.map((a) => a * 2);
console.log(angkaMap);

// Reduce (melakukan sesuatu terhadap seluruh isi array)
// jumlahkan seluruh elemen pada array
let angkaReduce = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
);
console.log(angkaReduce);

// Method chaining
// Cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka
  .filter((a) => a > 5) // 8,9,9
  .map((a) => a * 3) // 24,27,27
  .reduce((acc, cur) => acc + cur); // 78
console.log(hasil);
