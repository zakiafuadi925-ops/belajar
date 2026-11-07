const yargs = require("yargs");
const { simpanContact } = require("./contacts");
// mengambil argument dari command line
// console.log(yargs.argv);
// yargs.command(
//   "add",
//   "Menambahkan contact baru",
//   () => {},
//   (argv) => console.log(argv.nama),
// );

yargs.command({
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
