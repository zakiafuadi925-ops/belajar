const mongoose = require("mongoose");

main().catch((err) => {
  console.log(err);
});

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wpu");
}

// Membuat Schema
// const Contact = mongoose.model("Contact", {
//   nama: {
//     type: String,
//     required: true,
//   },
//   nohp: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//   },
// });

// Menambah 1 data
// const contact1 = new Contact({
//   nama: "Doddy Ferdiansyah",
//   nohp: "08212345987",
//   email: "doddy@gmail.com",
// });

// Simpan ke collection
// contact1.save().then((contact) => console.log(contact));
