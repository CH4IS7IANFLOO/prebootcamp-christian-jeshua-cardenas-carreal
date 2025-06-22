const boton = document.getElementById('saludarBtn');
const input = document.getElementById('nombreInput');
const contenedor = document.getElementById('saludoContenedor');

boton.addEventListener('click', function() {
  const nombre = input.value.trim(); 

  if (nombre) {
    contenedor.textContent = `Hola, ${nombre}`;
  } else {
    contenedor.textContent = 'Por favor, escribe un nombre.';
  }
});
