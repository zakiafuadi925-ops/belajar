var jmlAngkot = 10;
var angkotBeroprasi = 8;
var noAngkot = 1;

while (noAngkot <= angkotBeroprasi) {
  if (noAngkot <= angkotBeroprasi) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
  }
  noAngkot++; // Tambahkan baris ini untuk meningkatkan noAngkot
}
for (noAngkot = angkotBeroprasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log("Angkot No. " + noAngkot + " sedang tidak beroprasi. ");
}
