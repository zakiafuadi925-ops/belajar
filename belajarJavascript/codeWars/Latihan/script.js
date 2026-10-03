function findMissingLetter(array) {
  // Lakukan perulangan dari indeks pertama sampai sebelum
  for (let i = 0; i < array.length - 1; i++) {
    // ambil kode ascii dari huruf saat ini
    let kodeSaatIni = array[i].charCodeAt(0);
    // ambil kode ascii dari huruf berikutnya
    let kodeBerikutnya = array[i + 1].charCodeAt(0);

    // periksa apakah kode ascii huruf berikutnya > kode ascii huruf saat ini
    if (kodeBerikutnya - kodeSaatIni > 1) {
      // jika ya artinya ada urutan yang loncat atau hilang: maka huruf yang hilang adalah huruf yang nilai asciinya = (koded ascii huruf saat ini + 1).
      return String.fromCharCode(kodeSaatIni + 1);
      // ubah kode ascii tersebut kembali menjadi karakter/huruf (misal: String.fromCharCode).
    }
  }

  // kembalikan huruf tersebut dan hentikan fungsinya
  return " ";
}

let kode = findMissingLetter(["a", "b", "d", "e"]);
console.log(kode);
