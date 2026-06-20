document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Mengirim data ke server menggunakan Fetch API
    try {
        const response = await fetch('/login-proses', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: user, password: pass })
        });

        const result = await response.json();

        if (result.success) {
            message.style.color = "green";
            message.innerText = result.message;
            // Pindahkan ke dashboard setelah 1 detik
            setTimeout(() => { window.location.href = "dashboard.html"; }, 1000);
        } else {
            message.style.color = "red";
            message.innerText = result.message;
        }
    } catch (error) {
        console.error("Error:", error);
        message.innerText = "Gagal terhubung ke server.";
    }
});
