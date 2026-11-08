// Core Module
// File System
const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");
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

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

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

// const tulisPertanyaan = (pertanyaan) => {
//   return new Promise((resolve, reject) => {
//     rl.question(pertanyaan, (nama) => {
//       resolve(nama);
//     });
//   });
// };

// const pertanyaan2 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Masukkan noHP anda: ", (noHP) => {
//       resolve(noHP);
//     });
//   });
// };
const loadContact = () => {
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(fileBuffer);
  return contacts;
};

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  const contacts = loadContact();
  // cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(
      chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama lain!"),
    );
    return false;
  }

  // cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Masukkan format email yang sesuai!"));
      return false;
    }
  }

  // cek nomor HP
  if (!validator.isMobilePhone(noHP, "id-ID")) {
    console.log(chalk.red.inverse.bold("Nomor HP tidak valid!"));
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log(chalk.green.inverse.bold("Terimakasih sudah memasukkan data."));
  //   rl.close();
};

const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.cyan.inverse.bold("Daftar kontak : "));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.noHP}`);
  });
};

const detailContact = (nama) => {
  const contacts = loadContact();
  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase(),
  );
  if (!contact) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
    return false;
  } else {
    console.log(chalk.green.inverse.bold(contact.nama));
    console.log(chalk.blue.inverse.bold(contact.noHP));
    if (contact.email) {
      console.log(chalk.cyan.inverse.bold(contact.email));
    }
  }
};

const deleteContact = (nama) => {
  const contacts = loadContact();
  const newContacts = contacts.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase(),
  );

  if (contacts.length === newContacts.length) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
    return false;
  }

  fs.writeFileSync("data/contacts.json", JSON.stringify(newContacts));

  console.log(
    chalk.green.inverse.bold(`data contact ${nama} berhasil dihapus`),
  );
};

module.exports = { simpanContact, listContact, detailContact, deleteContact };
