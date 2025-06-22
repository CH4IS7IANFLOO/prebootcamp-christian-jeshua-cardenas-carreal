const input = document.getElementById('tareaInput');
const boton = document.getElementById('agregarBtn');
const lista = document.getElementById('listaTareas');

let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
mostrarTareas();

boton.addEventListener('click', () => {
  const texto = input.value.trim();
  if (texto) {
    tareas.push(texto);
    input.value = '';
    guardar();
    mostrarTareas();
  } else {
    alert('Escribe una tarea');
  }
});

function mostrarTareas() {
  lista.innerHTML = '';
  tareas.forEach((tarea, i) => {
    const li = document.createElement('li');
    li.textContent = tarea;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.addEventListener('click', () => {
      tareas.splice(i, 1);
      guardar();
      mostrarTareas();
    });

    const btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
    btnEditar.addEventListener('click', () => {
      const nuevoTexto = prompt('Edita la tarea:', tarea);
      if (nuevoTexto !== null && nuevoTexto.trim() !== '') {
        tareas[i] = nuevoTexto.trim();
        guardar();
        mostrarTareas();
      }
    });

    li.appendChild(btnEditar);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

function guardar() {
  localStorage.setItem('tareas', JSON.stringify(tareas));
}
