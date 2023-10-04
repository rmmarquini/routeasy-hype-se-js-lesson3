// Atribua o elemento HTML correto para as variáveis abaixo
const buttonElem = 
const inputElem = 

buttonElem.addEventListener('click', () => {
  const oldText = inputElem.value;

  if (oldText === 'ON') {
    inputElem.classList.remove('on')
    inputElem.classList.add('off')
  }

  if (oldText === 'OFF') {
    inputElem.classList.remove('off')
    inputElem.classList.add('on')
  }

  return inputElem.value = oldText === "ON" ? "OFF" : "ON";
});