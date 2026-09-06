// var angka = parseInt(prompt("masukkan angka: "));

// if (angka === 1) {
//   alert("anda memasukkan angka 1");
// } else if (angka === 2) {
//   alert("anda memasukkan angka 2");
// } else if (angka === 3) {
//   alert("anda memasukkan angka 3");
// } else {
//   alert("angka yang anda masukkan salah!");
// }

// var angka = parseInt(prompt("Massukkan angka: "));

// switch (angka) {
//   case 1:
//     alert("anda memasukkan angka 1 ");
//     break;
//   case 2:
//     alert("anda memasukkan angka 2 ");
//     break;
//   case 3:
//     alert("anda memasukkan angka 3 ");
//     break;
//   default:
//     alert("angka yang anda masukkan salah! ");
// }

var item = prompt(
  "masukkan nama makanan / minuman: \n (cth: nasi, daging, susu, hamburger, softdrink)",
);

switch (item) {
  case "nasi":
  case "daging":
  case "susu":
    alert("makanan / minuman SEHAT!");
    break;
  //   case "daging":
  //     alert("makanan / minuman SEHAT!");
  //     break;
  //   case "susu":
  //     alert("makanan / minuman SEHAT!");
  //     break;
  case "hamburger":
    alert("makanan / minuman TIDAK SEHAT!");
    break;
  case "softdrink":
    alert("makanan / minuman TIDAK SEHAT!");
    break;
  default:
    alert("anda memasukkan nama makanan / minuman yang salah!");
}
