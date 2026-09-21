const tombol = document.querySelector(".tombol");
tombol.addEventListener("click", function () {
  document.body.classList.toggle("merah");
});

const tRandom = document.createElement("button");
const teksT = document.createTextNode("Random");
tRandom.appendChild(teksT);
tRandom.setAttribute("type", "button");

tombol.after(tRandom);
tRandom.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

const sMerah = document.querySelector("input[name=sMerah");
const sHijau = document.querySelector("input[name=sHijau");
const sBiru = document.querySelector("input[name=sBiru");

sMerah.addEventListener("input", function () {
  //   console.log(sMerah.value);
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});
sHijau.addEventListener("input", function () {
  //   console.log(sMerah.value);
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});
sBiru.addEventListener("input", function () {
  //   console.log(sMerah.value);
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

document.body.addEventListener("mousemove", function (event) {
  // posisi mouse
  //   event.clientX;
  // ukuran browser
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerWidth) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + ", " + yPos + ", 100";
});
