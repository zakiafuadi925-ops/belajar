// function init() {
//   let nama = "Sandhika";
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
// }
// init();

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(counter);

function buatPembatasAksi(batasMaksimal) {
  let jumlahAksi = 0; // Ini adalah variabel privat di dalam closure

  return function (namaUser) {
    if (jumlahAksi < batasMaksimal) {
      jumlahAksi++;
      console.log(`Aksi ke-${jumlahAksi} diterima untuk ${namaUser}.`);
      return true;
    } else {
      console.log(
        `GAGAL: ${namaUser} sudah melewati batas maksimal aksi (${batasMaksimal}x)!`,
      );
      return false;
    }
  };
}

// Membuat fungsi khusus dengan batas maksimal 3 kali aksi
let cobaTombolBayar = buatPembatasAksi(3);

cobaTombolBayar("Zack"); // Aksi ke-1 diterima.
cobaTombolBayar("Zack"); // Aksi ke-2 diterima.
cobaTombolBayar("Zack"); // Aksi ke-3 diterima.
cobaTombolBayar("Zack"); // GAGAL: Zack sudah melewati batas maksimal aksi (3x)!

function buatCatatan(kategori) {
  let catat = 0;

  return function (isiPesan) {
    catat++;
    console.log("pembelian komponen " + kategori + "ke- " + catat + isiPesan);
  };
}

let pesanBaru = buatCatatan("PC ");
pesanBaru(" Beli VGA RTX 5060");
pesanBaru(" Beli RAM DDR5 64GB");

console.log(pesanBaru);

function buatPencatatCatatan(namaKategori) {
  let nomorUrut = 0; // Ini state privat yang diingat oleh closure

  return function (isiPesan) {
    nomorUrut++; // Nomor urut bertambah otomatis setiap fungsi dipanggil
    console.log(`[${namaKategori}] Catatan ke-${nomorUrut}: ${isiPesan}`);
  };
}

// Cara menggunakannya:
let catatBelanja = buatPencatatCatatan("KEUANGAN");

catatBelanja("Beli RAM 16GB");
// Output: [KEUANGAN] Catatan ke-1: Beli RAM 16GB

catatBelanja("Beli SSD NVMe");
// Output: [KEUANGAN] Catatan ke-2: Beli SSD NVMe

catatBelanja("Beli Kopi Sachet");
// Output: [KEUANGAN] Catatan ke-3: Beli Kopi Sachet
console.log(catatBelanja);

// Soal latihan Bank account

function buatAkunBank(namaPemilik, saldoAwal) {
  let saldo = saldoAwal;
  return {
    setor(jumlahUang) {
      saldo += jumlahUang;
      return `Berhasil setor. Saldo sekarang: ${saldo}`;
    },
    tarik(jumlahUang) {
      if (jumlahUang > saldo) return "Saldo kurang, bos!";
      saldo -= jumlahUang;
      return `Berhasil tarik. Sisa saldo: ${saldo}`;
    },
    cekInfo() {
      return `nama: ${namaPemilik}, saldo: ${saldo}`;
    },
  };
}

let akunZack = buatAkunBank("Zack", 100000);
console.log(akunZack.setor(2000));
console.log(akunZack.tarik(20000));

console.log(akunZack.cekInfo());
