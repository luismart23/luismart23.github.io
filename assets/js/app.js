document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('updateProfileForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío del formulario de manera convencional

        // Obtén los valores del formulario
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        // Actualiza los datos en la lista de perfil
        document.getElementById('profileName').textContent = name;
        document.getElementById('profilePhone').textContent = phone;
        document.getElementById('profileEmail').textContent = email;

        // Cierra el modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('updateProfileModal'));
        modal.hide();

        // Opcional: Muestra una alerta de éxito
        alert('Perfil actualizado con éxito');
    });
});
