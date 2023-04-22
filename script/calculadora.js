let resultado = document.getElementById("resultado");

function agregarNumero(numero) {
  resultado.value += numero;
}

function agregarDecimal() {
  if (!resultado.value.includes(".")) {
    resultado.value += ".";
  }
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

function borrar() {
  resultado.value = "";
}