// Defina corretamente o elemento HTML esperado no seletor abaixo
const buttonElem = 

buttonElem.addEventListener('click', () => {
  const oldText = buttonElem.innerText

  if (oldText === 'ON') {
    buttonElem.classList.remove('on')
    buttonElem.classList.add('off')
  }

  if (oldText === 'OFF') {
    buttonElem.classList.remove('off')
    buttonElem.classList.add('on')
  }

  return (button.innerText = oldText === 'ON' ? 'OFF' : 'ON')
})
