// const container = document.querySelectorAll(".container");

// container.addEventListener("click", function (e) {
//   if (e.target.classList.contains("close")) {
//     e.target.closest(".card").remove();
//   }
// });

// DOM Traversal
// const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//   e.target.closest(".card").remove();
//     e.target.parentElement.style.display = "none";
//   });
//   close[i].parentElement.style.display = "none";
// }

// close.forEach((element) => {
//   element.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// const nama = document.querySelector(".nama");
// console.log(nama.nextElementSibling);
// console.log(nama.previousElementSibling.previousElementSibling);
// console.log(nama.parentElement);

// const cards = document.querySelectorAll(".card");

// cards.forEach((card) => {
//   card.addEventListener("click", (e) => {
//     alert("ok");
//   });
// });

const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  if (e.target.clasName == ".close") {
    e.target.parentElement.style.display = "none";
    // e.preventDefault();
    console.log(e);
  }
  console.log(e);
});
