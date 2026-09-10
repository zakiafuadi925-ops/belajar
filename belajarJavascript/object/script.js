// membuat object
// object literal
var gpu = {
  nvidia: {
    tipe: "RTX 5060",
    vram: "8GB",
  },
  amd: {
    tipe: "RX7800XT",
    vram: "16GB",
  },
  intel: {
    tipe: "arc b580",
    vram: "12GB",
  },
};

var mhs = {
  nama: "Jokobi",
  nomorId: "000001",
  jurusan: "Tehnik Kayu(Mokuton)",
  elemen: "Mokuton",
};

// function declaration
function mhsBaru(nama, nomorId, jurusan, elemen) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nomorId = nomorId;
  mhs.jurusan = jurusan;
  mhs.elemen = elemen;
  return mhs;
}
var mhs2 = mhsBaru("Pria Sawit", "000002", " Tehnik Nyawit", "Sawit no Jutsu");

// cunstructur
function Shinobi(nama, nomorId, jurusan, elemen) {
  this.nama = nama;
  this.nomorId = nomorId;
  this.jurusan = jurusan;
  this.elemen = elemen;
}
// wajib menggunakan new
var ninja = new Shinobi("fufufafa", "000003", "Plenger", "kaskus");

// Belajar menggunakan this
// konsep this

// cara 1 - function declaration
function halo1() {
  console.log("halo1");
}
halo1();

// cara 2 - object literal
var obj = { a: 10, nama: "Bobob" };
obj.halo2 = function () {
  console.log("halo2");
};
obj.halo2();
// this mengembalikan object yang bersangkutan

// cara 3 - constructur
function Halo3() {
  console.log(this);
  console.log("halo3");
}
new Halo3();
var obj1 = new Halo3();
// this mengembalikan object yang baru dibuat
