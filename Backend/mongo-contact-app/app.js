const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const { body, validationResult, check } = require("express-validator");
const methodOverride = require("method-override");

const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

require("./utils/db");
const Contact = require("./model/contact");

const app = express();
const port = 3001;

// Setup method
app.use(methodOverride("_method"));

// Setup EJS & Middleware
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// konfigurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  }),
);
app.use(flash());

// Halaman Home
app.get("/", (req, res) => {
  const mahasiswa = [
    { nama: "Sandhika Galih", email: "sandhika@gmail.com" },
    { nama: "Erik", email: "erik@gmail.com" },
    { nama: "Doddy", email: "doddy@gmail.com" },
  ];

  res.render("index", {
    nama: "Sandhika Galih",
    title: "Halaman Home",
    mahasiswa,
    layout: "layouts/main-layout",
  });
});

// Halaman About
app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});

// Halaman Contact
app.get("/contact", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.render("contact", {
      layout: "layouts/main-layout",
      title: "Halaman Contact",
      contacts,
      msg: req.flash("msg"),
    });
  } catch (error) {
    console.error("Gagal mengambil data contact:", error);
    res.status(500).send("Terjadi kesalahan saat mengambil data contact.");
  }
});

// halaman form tambah data contact
app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "Form tambah Data Contact",
    layout: "layouts/main-layout",
  });
});

// Proses Tambah Data Contact
app.post(
  "/contact",
  [
    body("nama").custom(async (value) => {
      const duplikat = await Contact.findOne({ nama: value });
      if (duplikat) {
        throw new Error("Nama kontak sudah digunakan!");
      }
      return true;
    }),
    check("email", "Email tidak valid!")
      .optional({ checkFalsy: true })
      .isEmail(),
    check("nohp", "No HP tidak valid!").isMobilePhone("id-ID"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("add-contact", {
        title: "Form Tambah Data Contact",
        layout: "layouts/main-layout",
        errors: errors.array(),
        oldInput: req.body,
      });
    }

    try {
      await Contact.create({
        nama: req.body.nama,
        nohp: req.body.nohp,
        email: req.body.email,
      });

      req.flash("msg", "Data contact berhasil ditambahkan!");
      res.redirect("/contact");
    } catch (error) {
      console.error("Gagal menambahkan contact:", error);
      res.status(500).send("Terjadi kesalahan saat menyimpan data contact.");
    }
  },
);

// Proses delete contact
// app.get("/contact/delete/:nama", async (req, res) => {
//   try {
//     const contact = await Contact.findOne({ nama: req.params.nama });

//     // Jika contact tidak ada
//     if (!contact) {
//       return res.status(404).send("<h1>404</h1>");
//     }

//     await Contact.deleteOne({ _id: contact._id });
//     req.flash("msg", "Data contact berhasil dihapus!");
//     res.redirect("/contact");
//   } catch (error) {
//     console.error("Gagal menghapus contact:", error);
//     res.status(500).send("Terjadi kesalahan saat menghapus data contact.");
//   }
// });

app.delete("/contact", async (req, res) => {
  try {
    const result = await Contact.deleteOne({ nama: req.body.nama });

    if (result.deletedCount === 0) {
      req.flash("msg", "Data Contact tidak ditemukan!");
      return res.redirect("/contact");
    }

    req.flash("msg", "Data Contact berhasil terhapus!");
    res.redirect("/contact");
  } catch (error) {
    console.error("Gagal menghapus contact:", error);
    res.status(500).send("Terjadi kesalahan saat menghapus data contact.");
  }
});

// halaman form ubah data contact
app.get("/contact/edit/:nama", async (req, res) => {
  const contact = await Contact.findOne({ nama: req.params.nama });
  res.render("edit-contact", {
    title: "Form ubah Data Contact",
    layout: "layouts/main-layout",
    contact,
  });
});

// Proses ubah data
app.put(
  "/contact",
  [
    body("nama").custom(async (value, { req }) => {
      const duplikat = await Contact.findOne({ nama: value });
      if (value !== req.body.oldNama && duplikat) {
        throw new Error("Nama kontak sudah digunakan!");
      }
      return true;
    }),
    check("email", "Email tidak valid!").isEmail(),
    check("nohp", "No HP tidak valid!").isMobilePhone("id-ID"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("edit-contact", {
        title: "Form Ubah Data Contact",
        layout: "layouts/main-layout",
        errors: errors.array(),
        contact: req.body,
      });
    }

    try {
      const result = await Contact.updateOne(
        { _id: req.body._id },
        {
          $set: {
            nama: req.body.nama,
            email: req.body.email,
            nohp: req.body.nohp,
          },
        },
      );

      if (result.matchedCount === 0) {
        req.flash("msg", "Data contact tidak ditemukan!");
        return res.redirect("/contact");
      }

      req.flash("msg", "Data contact berhasil diubah!");
      res.redirect("/contact");
    } catch (error) {
      console.error("Gagal mengubah data contact:", error);
      res.status(500).send("Terjadi kesalahan saat mengubah data contact.");
    }
  },
);

// halaman detail contact
app.get("/contact/:nama", async (req, res) => {
  // const contact = findContact(req.params.nama);
  const contact = await Contact.findOne({ nama: req.params.nama });

  res.render("detail", {
    layout: "layouts/main-layout",
    title: "Halaman Detail Contact",
    contact,
  });
});

app.listen(port, () => {
  console.log(`Mongo Contact App | Listening at http://localhost:${port}`);
});
