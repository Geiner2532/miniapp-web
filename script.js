// Funciones JavaScript para la aplicación
function mostrarMensajeBienvenida() {
    alert('¡Bienvenido a Sabor Casero! Próximamente podrás ver nuestro menú completo aquí.');
    console.log('Usuario hizo clic en Ver Menú - ' + new Date().toLocaleString());
}

function enviarFormulario(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    
    // Simulación de envío de formulario
    alert(`¡Gracias ${nombre}! Hemos recibido tu reserva. Te contactaremos al correo: ${email}`);
    
    // Limpiar formulario
    event.target.reset();
    
    console.log('Formulario enviado por:', nombre, email);
}
