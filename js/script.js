// Inicializa el carrito de compras
let carrito = [];

// Agrega un evento a los botones "Agregar al Carrito"
document.querySelectorAll('.agregarCarrito').forEach(button => {
    button.addEventListener('click', (event) => {
        const producto = event.target.parentElement;
        const nombre = producto.getAttribute('data-nombre');
        const precio = producto.getAttribute('data-precio');

        carrito.push({ nombre, precio });
        actualizarCarrito();
    });
});

// Actualiza la lista del carrito
function actualizarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML = '';

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);
    });
}

// Maneja el envío del formulario de contacto
document.getElementById('formContacto').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Mensaje enviado. ¡Gracias por contactarnos!');
    event.target.reset();
});