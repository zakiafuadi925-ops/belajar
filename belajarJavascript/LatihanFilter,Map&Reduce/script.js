// ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));
console.log(videos);

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  // ambil durasi masing2 video
  .map((item) => item.dataset.duration)

  // ubah durasi menjadi float, ubah menit jadi detik
  .map((waktu) => {
    // 10:30 -> [10, 30]
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);

// ubah format jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
const jmlVideo = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN"),
).length;
const pJmlVideo = document.querySelector(".jumlah-video");
pJmlVideo.textContent = `${jmlVideo} Video.`;

console.log(jsLanjut);
console.log(jmlVideo);
console.log(jam);
console.log(menit);
console.log(detik);
console.log(`<div class="kotak">
    <h1>Test</h1>
    </div>`);
