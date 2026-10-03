// Rest Parameter
// Rest Parameter adalah fitur pada JavaScript yang memungkinkan kita untuk menangkap sejumlah argumen yang tidak terbatas dalam sebuah fungsi dan menggabungkannya menjadi sebuah array. Ini sangat berguna ketika kita ingin membuat fungsi yang dapat menerima jumlah argumen yang bervariasi.

function myFunc(a, b, ...params) {
  console.log(a);
  console.log(b);
  console.log(params);
}
myFunc(1, 2, "Sandhika", true, "Developer");

function jumlahkan(...angka) {
  //   let total = 0;
  //   for (const a of angka) {
  //     total += a;
  //   }
  //   return total;
  return angka.reduce((a, b) => a + b);
}

console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
const kelompok1 = ["Sandhika", "Doddy", "Erik", "Fajar", "Hendra"];
// const ketua = kelompok1[0];
const [ketua, wakil, ...anggota] = kelompok1;

console.log(ketua);
console.log(wakil);
console.log(anggota);

// object destructuring
const team = {
  pm: "Sandhika",
  frontEnd1: "Doddy",
  frontEnd2: "Erik",
  backEnd: "Fajar",
  ux: "Hendra",
  devOps: "Ferry",
};

const { pm, ...myTeam } = team;
console.log(pm);
console.log(myTeam);
