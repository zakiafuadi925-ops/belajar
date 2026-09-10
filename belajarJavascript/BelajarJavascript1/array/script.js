var hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
console.log(hari[5]);
console.log(hari.length);

var myArray = ["Budi", 20, true];
var myArray2 = ["Budi", 20, true, ["Senin", "Selasa", "Rabu"]];
console.log(myArray2[3][1]);
var myArray3 = [
  "Budi",
  20,
  true,
  ["Senin", "Selasa", "Rabu", ["Januari", "Februari"]],
];
console.log(myArray3[3][3][1]);

// Manupulation Array
// var arr = ["a", 1, true];
// arr[1] = 2;
// arr[2] = false;
// arr[3] = "budi";
// console.log(arr);

// menghapus isi array
// var arr = ["a", 1, true];
// arr[1] = undefined;
// console.log(arr);

// Menampilkan isi array
var arr = [
  "bruno",
  "ani",
  "budi",
  "susi",
  "joko",
  "bambang",
  "siti",
  "doni",
  "prabowo",
  "joko",
];
// for (var i = 0; i < arr.length; i++) {
//   console.log("Mahasiswa ke-" + (i + 1) + " adalah " + " : " + arr[i]);
// }

// Method array
// 1. Join
console.log(arr.join(" - ")); // menggabungkan isi array menjadi string

// 2. Push & pop
arr.push("andi");
console.log(arr); // menambahkan data baru di akhir array

arr.pop(); // menghapus data terakhir di array

// 3. Unshift & Shift
arr.unshift("andi"); // menambahkan data baru di awal array
console.log(arr);

arr.shift(); // menghapus data pertama di array
console.log(arr);

// 4. Splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
arr.splice(1, 2, "andi", "budi"); // menghapus data di index ke-2 sebanyak 1 data dan menambahkan data baru
console.log(arr.join(" - "));

// 5. Slice
// slice(indexAwal, indexAkhir)
var arr2 = arr.slice(1, 4); // mengambil data dari index ke-1 sampai index ke-3
console.log(arr2.join(" - "));

// 6. forEach
var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(var i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }
angka.forEach(function (e) {
  console.log(e);
});

arr.forEach(function (e, i) {
  console.log("Mahasiswa ke-" + (i + 1) + " adalah : " + e);
});

// 7. Map
var angka2 = angka.map(function (e) {
  return e * 2;
});
console.log(angka2.join(" - "));

// 8. Sort
var angka3 = [1, 5, 2, 4, 3, 10, 20, 22, 11, 12];
angka3.sort();
console.log(angka3.join(" - "));

angka3.sort(function (a, b) {
  return a - b;
});
console.log(angka3.join(" - "));

// 9. Filter
var angka4 = angka3.filter(function (e) {
  return e > 5;
});
console.log(angka4.join(" - "));

// 10. Find
var angka5 = angka3.find(function (e) {
  return e > 5;
});
console.log(angka5);
