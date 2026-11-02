// let mahasiswa = {
//   nama: "Sandhika Galih",
//   nrp: "123456789",
//   email: "sandhikagalih@gmail.com",
// };
// console.log(JSON.stringify(mahasiswa));

// Ajax
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     let mahasiswa = JSON.parse(this.responseText);
//     console.log(mahasiswa);
//   }
// };
// xhr.open("GET", "coba.json", true);
// xhr.send();

// Jquery
$.getJSON("coba.json", function (data) {
  console.log(data);
});
