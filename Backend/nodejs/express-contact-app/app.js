const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact } = require("./utils/contacts");

const app = express();
const port = 3003;

// gunakan ejs
app.set("view engine", "ejs");

// Third-party middleware
app.use(expressLayouts);

// Built-in middleware
app.use(express.static("public"));

// application level middleware
app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

app.get("/", (req, res) => {
  // res.sendFile("./index.html", { root: __dirname });
  const mahasiswa = [
    {
      nama: "Sandhika Galih",
      email: "sandhika@gmail.com",
    },
    {
      nama: "Erik",
      email: "erik@gmail.com",
    },
    {
      nama: "Doddy",
      email: "doddy@gmail.com",
    },
  ];
  res.render("index", {
    nama: "Sandhika Galih",
    title: "Halaman Home",
    mahasiswa,
    layout: "layouts/main-layout",
  });
});
app.get("/about", (req, res) => {
  // res.sendFile("./about.html", { root: __dirname });
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});
app.get("/contact", (req, res) => {
  const contacts = loadContact();

  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
    contacts,
  });
});

// halaman form tambah data contact
app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "Form tambah Data Contact",
    layout: "layouts/main-layout",
  });
});

// proses data contact
app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("data berhasil dikirim!");
});

// halaman detail contact
app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);

  res.render("detail", {
    layout: "layouts/main-layout",
    title: "Halaman Detail Contact",
    contact,
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http"//localhost:${port}`);
});
