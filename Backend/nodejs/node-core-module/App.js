const yargs = require("yargs");
const { simpanContact } = require("./contacts");
const contacts = require("./contacts");
// mengambil argument dari command line
// console.log(yargs.argv);
// yargs.command(
//   "add",
//   "Menambahkan contact baru",
//   () => {},
//   (argv) => console.log(argv.nama),
// );

yargs
  .command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
      nama: {
        describe: "Nama lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      noHP: {
        describe: "Nomor Handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      simpanContact(argv.nama, argv.email, argv.noHP);
      // const contact = {
      //   nama: argv.nama,
      //   email: argv.email,
      //   noHP: argv.noHP,
      // };
      // console.log(contact);
    },
  })
  .demandCommand();

// menampilkan daftar semua nama & no HP kontak
yargs.command({
  command: "list",
  describe: "Menampilkan semua nama & no HP",
  handler() {
    contacts.listContact();
  },
});

// Menampilkan detail sebuah kontak
yargs.command({
  command: "detail",
  describe: "Menampilkan detail sebuah kontak berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.detailContact(argv.nama);
  },
});

// menghapus contact berdasarkan nama
yargs.command({
  command: "delete",
  describe: "Menghapus sebuah kontak berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.deleteContact(argv.nama);
  },
});

yargs.parse();
// const contacts = require("./contacts");
// // object destructuring
// const { tulisPertanyaan, simpanContact } = require("./contacts");

// const main = async () => {
//   const nama = await tulisPertanyaan("Masukkan nama anda: ");
//   const email = await tulisPertanyaan("Masukkan email anda: ");
//   const noHP = await tulisPertanyaan("Masukkan noHP anda: ");

//   simpanContact(nama, email, noHP);
// };

// main();
