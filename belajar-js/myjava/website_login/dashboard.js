// 1. Cek Autentikasi saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    const username = localStorage.getItem("username");

    if (!userLoggedIn) {
        // Jika tidak ada data login, arahkan ke login.html
        alert("Anda harus login terlebih dahulu!");
        window.location.href = "login.html";
    } else {
        // Jika ada, tampilkan nama user di dashboard
        document.getElementById("display-name").innerText = username;
    }
});

// 2. Fungsi Logout
function logout() {
    // Hapus data login dari localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    
    // Arahkan kembali ke login
    window.location.href = "login.html";
}

