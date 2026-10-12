// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
//   success: (movies) => console.log(movies),
// });

// ajax
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readystate === 4) {
//       console.log(JSON > parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };
// xhr.open("get", "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers");
// xhr.send();

// fetch
// const movies = fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// Promise
// Object yang merepresentasikan keberhasilan / kegagalan dari sebuah event asynchronous di masa yang akan datang. Promise memiliki 3 state, yaitu :
// 1. Pending : initial state, belum selesai / belum gagal
// 2. Fulfilled : operasi berhasil
// 3. Rejected : operasi gagal
// Callback (resolve / reject / finally)
// aksi (then / catch)

// contoh promise 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah ditepati!");
//   } else {
//     reject("ingkar janji...");
//   }
// });

// janji1
//   .then((response) => console.log("OK! " + response))
//   .catch((response) => console.log("NOT OK! " + response));

// contoh promise 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu!");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Tidak ditepati setelah beberapa waktu!");
//     }, 2000);
//   }
// });

// console.log("mulai");
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log("selesai menunggu!"))
//   .then((response) => console.log("OK! " + response))
//   .catch((response) => console.log("NOT OK! " + response));
// console.log("selesai");

// Promise.all

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        title: "Avengers: Endgame",
        year: 2019,
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Demak",
        temperature: 37,
        kondisi: "cerah",
      },
    ]);
  }, 500);
});

Promise.all([film, cuaca])
  // .then((response) => console.log(response));
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
