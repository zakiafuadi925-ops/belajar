var jmlAngkot = 10;
var angkotBeroprasi = 6;
var noAngkot = 1;
var angkotLembur = 8;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroprasi && noAngkot !== 5) {
    console.log("Angkot No. " + noAngkot + " beroprasi dengan baik. ");
  } else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
    console.log("Angkot No. " + noAngkot + " sedang lembur. ");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroprasi.");
  }
}
