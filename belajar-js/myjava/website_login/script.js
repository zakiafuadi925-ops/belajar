document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form reload halaman

    // Ambil data dari input
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Data login dummy (Contoh sederhana)
    
    try {
        const response = await fetch('/login-proses', {
            method: 'POST',
            headers: { 'Content-TYpe': 'application/json' },
            body: JSON.stingify({ username: user, password: pass })
        });
    
        const result = await response.json();

        if (result.succes) {
            message.style.color = "green";
            messsage.innerText = result.message;
            setTimeout(() => { window.location.href = "dashboard.html"; }, 1000);
        } else {
            message.style.color = "red";
            message.innerText = result.message;
  
        }
    } catch (error) {
        console.error("Error:", error);
        message.innerText = "Gagal terhubung ke server.";
    }

    if (user === validUser && pass === validPass) {
        message.style.color = "green";
        message.innerText = "Login Berhasil! Mengalihkan...";
        
        // Simpan status login di localStorage
        localStorage.setItem("isLoggedIn", "true");

        // Arahkan ke halaman dashboard (opsional)
        // window.location.href = "dashboard.html";
    } else {
        message.style.color = "red";
        message.innerText = "Username atau Password salah!";
    }
});
