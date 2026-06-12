document.addEventListener("DOMContentLoaded", function () {
    const btnToggle = document.getElementById('dark-mode-toggle');

    // 1. Al cargar la página, revisamos si el usuario ya había activado el modo oscuro antes
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (btnToggle) btnToggle.innerText = "☀️";
    }

    // 2. Escuchamos el clic del botón para alternar y guardar la decisión
    if (btnToggle) {
        btnToggle.addEventListener('click', function () {
            document.body.classList.toggle('dark-theme');
            
            // Si después del click quedó en modo oscuro, lo guardamos en localStorage
            if (document.body.classList.contains('dark-theme')) {
                btnToggle.innerText = "☀️";
                localStorage.setItem('theme', 'dark');
            } else {
                btnToggle.innerText = "🌙";
                localStorage.setItem('theme', 'light');
            }
        });
    }
});