// Inicialización de AOS (animaciones al hacer scroll)
AOS.init({
    once: true,       // anima una sola vez
    duration: 700,    // duración por defecto
    easing: 'ease-out'
});

// Validación básica del formulario (OWASP-friendly)
// - Evita enviar si hay campos inválidos
// - Valida formato de email usando el propio input[type=email]
// - No usa eval(), ni almacena datos sensibles
(function () {
    const form = document.getElementById('contactForm');
    const loader = document.getElementById('formLoader');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // HTML5 Constraint Validation API
        if (!form.checkValidity()) {
            // Marca campos inválidos para feedback visual de Bootstrap
            form.classList.add('was-validated');
            return;
        }

        // Simulación de envío (no datos sensibles)
        loader.classList.remove('d-none');

        // Pequeño retardo para simular solicitud segura
        setTimeout(() => {
            loader.classList.add('d-none');
            // Limpia y notifica de forma accesible
            form.reset();
            form.classList.remove('was-validated');
            alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.'); // Uso simple, sin información privada
        }, 1200);
    });
})();
