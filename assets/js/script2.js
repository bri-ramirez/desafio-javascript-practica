// seleccionamos todos los botones
const btns = document.querySelectorAll('button');

// seleccionamos la caja para posteriormente colorearla
const box = document.getElementById('caja');

// función para cambiar el color de la caja
const setColor = (color) => {
  box.style.backgroundColor = color;
}

// recorremos todos los botones 
btns.forEach(element => {
  // les agregamos a cada elemento un evento click
  element.addEventListener('click', () => {
    // obtenemos el color del botón y lo pasamos a la función
    const color = element.style.backgroundColor;
    setColor(color);
  });
});