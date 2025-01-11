function handleLogin(event) {
    event.preventDefault(); 
    
    // Ambil nilai input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validasi username dan password
    if (username === 'admin' && password === 'admin1234321') {
        // Tampilkan pop-up
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
        
        // Pindah halaman setelah 2 detik
        setTimeout(() => {
            window.location.href = "../html/mainAdmin.html";
        }, 2000);
    } else {
        alert('Username atau Password salah!');
    }
}
