document.addEventListener('DOMContentLoaded', () => {
    // Código JavaScript para tu sitio web aquí

    // Ejemplo: Muestra un mensaje en la consola cuando se carga el contenido
    console.log('El contenido del DOM está completamente cargado y parseado.');

    // Ejemplo: Manejar el envío del formulario de contacto
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Aquí podrías manejar el envío del formulario, como una solicitud fetch a un servidor o a Formspree
            console.log(`Nombre: ${name}, Correo: ${email}, Mensaje: ${message}`);
        });
    }
});
