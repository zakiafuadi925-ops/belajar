// Destructuring Variable

// Destructuring Array
const perkenalan = ["Halo", "nama", "saya", "Sandhika Galih"];
// const [salam, satu, dua, nama] = perkenalan;

// skipp items
const [salam, , , namar] = perkenalan;
console.log(namar);

// swap items
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a);
console.log(b);

// return value pada function

function coba() {
  return [1, 2];
}
const [c, d] = coba();
console.log(c);

// Rest parameter
const [e, ...values] = [1, 2, 3, 3, 4, 5, 6, 7, 8];
console.log(e);
console.log(values);

// Destructuring Object

const mhs = {
  nama: "Sandhika Galih",
  umur: 33,
};

const { nama, umur } = mhs;
console.log(nama);
console.log(umur);

// Asssignment tanpa deklarasi objek

// {{ namaA, umurA} = { namaA: 'Sandhika Galih', umurA: 33}};
// console.log(namaA);

// Assignment ke variable baru
const { nama: n, umur: u } = mhs;
console.log(n);

// Memberikan Default Value

const mhsD = {
  namaD: "Sandhika Galih",
  umurD: 33,
  email: "sandhikagalih@unpas.ac.id",
};

const { namaD, umurD, email = "email@default.com" } = mhsD;
// console.log(nama);
console.log(email);

// Memberikan Default Value + assignment ke variable baru

const mhsE = {
  namaE: "Sandhika Galih",
  umurE: 33,
  emailE: "sandhikagalih@unpas.ac.id",
};

const { namaE: nE, umurE: uE, emailE: eE = "email@default.com" } = mhsE;
// console.log(nama);
console.log(eE);

//Rest Parameter
const mhsED = {
  namaF: "Sandhika Galih",
  umurF: 33,
  emailF: "sandhikagalih@unpas.ac.id",
};

const { namaF, ...valuesD } = mhsED;
// console.log(nama);
console.log(namaD);

// Menga,bil field pada object, setelah dikirm sebagai parameter untuk function

const mhsEDF = {
  id: 123,
  namaFG: "Sandhika Galih",
  umurFGF: 33,
  emailFG: "sandhikagalih@unpas.ac.id",
};

function getIdMhs({ id }) {
  return id;
}
console.log(getIdMhs(mhsEDF));
