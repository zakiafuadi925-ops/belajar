const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const dbName = "wpu";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    // pilih database
    const db = client.db(dbName);
    // console.log(`Terhubung ke database: ${db.databaseName}`);

    // Menambahkan 1 data ke collections mahasiswa
    // const result = await db.collection("mahasiswa").insertOne({
    //   nama: "Erik",
    //   email: "erik@gmail.com",
    // });

    // Menambahkan lebih dari satu data
    // const result = await db.collection("mahasiswa").insertMany([
    //   {
    //     nama: "Erik",
    //     email: "erik@yahoo.com",
    //   },
    //   {
    //     nama: "Avip",
    //     email: "avip@gmail.com",
    //   },
    // ]);

    // Menampilkan semua data yang ada didalam collections 'mahasiswa'
    // const mahasiswaList = await db
    //   .collection("mahasiswa")
    //   .find({ _id: new ObjectId("6b0122810189127f643e4a47") })
    //   .toArray();

    // console.log("Daftar mahasiswa:", mahasiswaList);

    // console.log("Berhasil menambahkan data:", result);

    // Mengubah data berdasarkan id
    // const updateMhs = await db.collection("mahasiswa").updateOne(
    //   {
    //     _id: new ObjectId("6b0122810189127f643e4a47"),
    //   },
    //   {
    //     $set: {
    //       email: "AvipSyaifullah@gmail.com",
    //     },
    //   },
    // );
    // console.log("Berhasil mengupdate data:", updateMhs);

    // Mengubah data lebih dari 1, berdasarkan kriteria
    // const updateMany = await db.collection("mahasiswa").updateMany(
    //   {
    //     nama: "Erik",
    //   },
    //   {
    //     $set: {
    //       nama: "Eriki",
    //     },
    //   },
    // );
    // console.log("berhasil mengubah beberapa data", updateMany);

    // menghapus data berdasarkan id
    // const deletemhs = await db.collection("mahasiswa").deleteOne({
    //   _id: new ObjectId("6b0122810189127f643e4a47"),
    // });
    // console.log("Berhasil menghapus data mhs", deletemhs);
  } catch (error) {
    console.log("Gagal mencari data:", error);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
