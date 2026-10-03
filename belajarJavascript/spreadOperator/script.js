// spread operator
// memecah iterables menjadi single element

// Menggabungkan 2 Array
const dosen = ["Ade", "Hendra", "Wanda"];
const mhs = ["Sandhika", "Doddy", "Erik"];
// const orang = mhs.concat(dosen);
const orang = [...mhs, "Aji", ...dosen];

console.log(orang);

// mengcopy array
const mhs1 = [...mhs];
mhs1[0] = "Fajar";
console.log(mhs);
console.log(mhs1);

const liMhs = document.querySelectorAll("li");

// const mhsLi = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhsLi.push(liMhs[i].textContent);
// }

const mhsLi = [...liMhs].map((m) => m.textContent);

console.log(mhsLi);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
console.log(huruf);
nama.innerHTML = huruf;
