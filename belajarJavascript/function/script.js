function jumlahVolumeDuaKubus(a, b) {
  var volume1 = a * a * a;
  var volume2 = b * b * b;
  var total = volume1 + volume2;
  return total;
}
console.log(jumlahVolumeDuaKubus(8, 3)); // Output: 539
console.log(jumlahVolumeDuaKubus(6, 3)); // Output: 152
alert(jumlahVolumeDuaKubus(5, 3));

function tambah(a, b) {
  return a + b;
}
function kalikan(a, b) {
  return a * b;
}
console.log(tambah(5, 10)); // Output: 15
alert(tambah(5, 10));
console.log(kalikan(5, 10)); // Output: 50
console.log(kalikan(tambah(5, 10), tambah(2, 3))); // Output: 150

function tambahAr() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
console.log(tambahAr(5, 10, 15, 20, 30)); // Output: 50
