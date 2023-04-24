let resultado = document.getElementById("resultado");

function agregarNumero(numero) {
  resultado.value += numero;
}

function agregarDecimal() {
  resultado.value += "."; 
}

function operacion(operador) {
  resultado.value += operador;
}

function calcular() {
  try {
    resultado.value = eval(resultado.value);
  } catch (error) {
    resultado.value = "Error";
    
  }
}

function borrarTodo() {
  resultado.value = "";
}

function borrar() {
  let valorActual = resultado.value;
  if (valorActual.length > 0) {
    valorActual = valorActual.slice(0, -1);
    resultado.value = valorActual;
  }
}