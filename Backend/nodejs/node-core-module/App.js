// Core Module
// File System
const fs = require("fs");

// Menuliskan string ke file secara synchronous

// try {
//   fs.writeFileSync("data/test.txt", "Hello World secara synchronous");
// } catch (err) {
//   console.log(err);
// }

// Menuliskan string ke file secara asynchronous

// fs.writeFile("data/test.txt", "Hello World secara asynchronous", (err) => {
//   console.log(err);
// });

// Membaca isi file secara synchronous

// const data = fs.readFileSync("data/test.txt", "utf8");
// console.log(data);

// Membaca isi file secara asynchronous

// fs.readFile("data/test.txt", "utf8", (err, data) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(data);
//   }
// });

// Readline

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Membuatt folder data jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// membuat file contacs.json jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf8");
}

// rl.question("Masukkan nama anda : ", (nama) => {
//   rl.question("Masukkan no HP anda: ", (noHP) => {
//     // rl.question("Masukkan email anda: ");
//     // console.log(`Terimakasih ${nama}, sudah menginputkan ${noHP}`);
//     const contact = { nama, noHP };
//     const file = fs.readFileSync("data/contacs.json", "utf8");
//     const contacts = JSON.parse(file);

//     contacts.push(contact);
//     fs.writeFileSync("data/contacs.json", JSON.stringify(contacts));

//     console.log("Terimakasoh sudah memasukkan data");
//     rl.close();
//   });
// });

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

// const pertanyaan2 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Masukkan noHP anda: ", (noHP) => {
//       resolve(noHP);
//     });
//   });
// };

const main = async () => {
  const nama = await tulisPertanyaan("Masukkan nama anda: ");
  const email = await tulisPertanyaan("Masukkan email anda: ");
  const noHP = await tulisPertanyaan("Masukkan noHP anda: ");

  const contact = { nama, email, noHP };
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(fileBuffer);

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log("Terimakasih sudah memasukkan data.");
  rl.close();
};

main();
