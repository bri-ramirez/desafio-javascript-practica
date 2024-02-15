// obtenemos el elemento por su id
const btnSumar = document.getElementById('btn-sumar');
const btnRestar = document.getElementById('btn-restar');

// creamos una función que sume dos valores
const sumar = () => {
  // obtenemos los valores de los inputs
  let valor1 = document.getElementById('valor1').value;
  let valor2 = document.getElementById('valor2').value;

  // retornamos la suma de los valores
  return parseInt(valor1) + parseInt(valor2);
}

// creamos una función que reste dos valores
const restar = () => {
  // obtenemos los valores de los inputs
  let valor1 = document.getElementById('valor1').value;
  let valor2 = document.getElementById('valor2').value;

  // retornamos la resta de los valores
  return parseInt(valor1) - parseInt(valor2);
}

// agregamos un evento al botón para que ejecute la función sumar
btnSumar.addEventListener('click', () => {

  // obtenemos el resultado de la suma
  let resultado = sumar();

  // cambiamos el contenido del elemento
  document.querySelector('.resultado').innerHTML = resultado;
});

// agregamos un evento al botón para que ejecute la función restar
btnRestar.addEventListener('click', () => {

  // obtenemos el resultado de la resta
  let resultado = restar();

  // si el resultado es negativo, lo cambiamos a 0
  if(resultado < 0) {
    resultado = 0;
  }

  // cambiamos el contenido del elemento
  document.querySelector('.resultado').innerHTML = resultado;
});