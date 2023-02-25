const text = "Bienvenido"; // El texto que se desea escribir
const typingDelay = 150; // El tiempo de retraso entre cada letra (en milisegundos)
const textElement = document.querySelector('#welcome');

let i = 0;
function type() {
  if (i < text.length) {
    textElement.textContent += text.charAt(i);
    i++;
    setTimeout(type, typingDelay);
  }
}

type();
