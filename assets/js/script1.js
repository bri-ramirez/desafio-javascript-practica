const formulario = document.getElementById('formulario');

function limpiarErrores() {
  // retorna todos los elementos con clase errorMessage
  const errores = document.querySelectorAll('.errorMessage');

  // recorro el array de elementos devueltos
  errores.forEach((elemento) => {

    // limpio el contenido de cada elemento
    elemento.innerHTML = '';
  });
}

function validar(nombre, asunto, mensaje) {
  let pasamosLaValidacion = true;
  let patron = /[a-zA-Z]/gim;

  if (!patron.test(nombre)) {
    document.querySelector(".errorNombre").innerHTML = "El nombre es requerido."
    pasamosLaValidacion = false;
  }

  if (!patron.test(asunto)) {
    document.querySelector(".errorAsunto").innerHTML = "EL asunto es requerido."
    pasamosLaValidacion = false;
  }

  if (!patron.test(mensaje)) {
    document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido"
    pasamosLaValidacion = false;
  }

  return pasamosLaValidacion;
};

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  limpiarErrores();

  const nombre = document.getElementById('nombre').value;
  const asunto = document.getElementById('asunto').value;
  const mensaje = document.getElementById('mensaje').value;

  const formularioValido = validar(nombre, asunto, mensaje);

  if (formularioValido) {
    document.querySelector('.resultado').innerHTML = "Mensaje enviado con éxito !!!";
  }
});
