// function findMissingLetter(array) {
//   // Lakukan perulangan dari indeks pertama sampai sebelum
//   for (let i = 0; i < array.length - 1; i++) {
//     // ambil kode ascii dari huruf saat ini
//     let kodeSaatIni = array[i].charCodeAt(0);
//     // ambil kode ascii dari huruf berikutnya
//     let kodeBerikutnya = array[i + 1].charCodeAt(0);

//     // periksa apakah kode ascii huruf berikutnya > kode ascii huruf saat ini
//     if (kodeBerikutnya - kodeSaatIni > 1) {
//       // jika ya artinya ada urutan yang loncat atau hilang: maka huruf yang hilang adalah huruf yang nilai asciinya = (koded ascii huruf saat ini + 1).
//       return String.fromCharCode(kodeSaatIni + 1);
//       // ubah kode ascii tersebut kembali menjadi karakter/huruf (misal: String.fromCharCode).
//     }
//   }

//   // kembalikan huruf tersebut dan hentikan fungsinya
//   return " ";
// }

// let kode = findMissingLetter(["a", "b", "d", "e"]);
// console.log(kode);

// alienLanguage("My name is John") should return "My NAMe Is JOHn"
// alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
// alienLanguage("Hello World") should return "HELLo WORLd"

function alienLanguage(str) {
  //coding here...
  // pisahkan dulu string menggunakan split
  let words = str.split(" ");
  // pecah string menjadi array of words menggunakan split
  // let word = words.split(" ");

  // buat string menjadi huruf capital kecuali satu huruf terahir menggunakan looping for
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].toUpperCase().slice(0, -1) + words[i].slice(-1).toLowerCase();
  }
  // gabungkan kembali array of words menjadi string
  return words.join(" ");
}
console.log(alienLanguage("My name is John"));
