// 1. HTML Fragments
const mhs = {
  nama: "Sandhika Galih",
  umur: 33,
  nrp: "043040023",
  email: "sandhikagalih!unpas.ac.id",
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);
// document.body.innerHTML = el;

// 2. Looping

const mhsLp = [
  {
    nama: "Sandhika Galih",
    email: "sandhikagalih@unpas.ac.id",
  },
  {
    nama: "Doddy Ferdiansyah",
    email: "doddy@unpas.ac.id",
  },
  {
    nama: "Erik",
    email: "erik@unpas.ac.id",
  },
];

const elLoop = `<div class="mhsLp">
    ${mhsLp
      .map(
        (m) => `<ul>
        <li>${m.nama}</li>
        <li>${m.email}</li>
    </ul>`,
      )
      .join("")}

</div>`;

// document.body.innerHTML = elLoop;

// 3. Conditionals
// Ternary

const lagu = {
  judul: "Tetap Dalam Jiwa",
  penyanyi: "Isyana Sarasvati",
};

const elCon = `<div class="lagu">
    <ul>
        <li>${lagu.penyanyi}</li>
        <li>${lagu.judul} ${lagu.feat ? `(feat, ${lagu.feat})` : ""}</li>
    </ul>
</div>`;

// document.body.innerHTML = elCon;

// 4. Nested
// HTML Fragments bersarang

const mhsNes = {
  nama: "Sandhika Galih",
  semester: 5,
  mataKuliah: [
    "Rekayasa Web",
    "analisis dan Perancangan Sistem Informasi",
    "Pemrograman Sistem Interaktif",
    "Perancangan sistem berorientasi Object",
  ],
};

function cetakMataKuliah(matakuliah) {
  return `
    <ol>
        ${matakuliah.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>`;
}

const elNes = `<div class="mhsNes">
    <h2>${mhsNes.nama}</h2>
    <span class="semester">${mhsNes.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhsNes.mataKuliah)}
</div>`;

// Memasukkan semua elemen sekaligus dalam satu pemanggilan
// document.body.innerHTML = `${el}${elCon}${elLoop}${elNes}`;

// Yagged Templates

const nama = "Sandhika Galih";
const umur = 33;
const email = "sandikagalih@unpas.ac.id";

function coba(strings, ...values) {
  //   let result = "";
  //   strings.forEach((str, i) => {
  //     result += `${str}${values[i] || ""}`;
  //   });
  //   return result;

  return strings.reduce(
    (result, str, i) => `${result}${str}${values[i] || ""}`,
    "",
  );
}

const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
console.log(str);

// Highlight

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${values[i] || ""}</span>`,
    "",
  );
}

const strH = highlight`Halo, nama saya ${nama}, saya ${umur} tahun. Dan email saya adalah ${email}`;

document.body.innerHTML = strH;
