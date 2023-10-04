// Atribua o elemento HTML correto para a variável abaixo
const listItems = document.querySelectorAll("#list li")

const handleHover = (event) => { 
  // Adicione uma funcionalidade que altere as cores dos itens da lista quando o mouse passar por cima
  // Dica: interprete o arquivo CSS para saber qual classe utilizar
  event.target.classList.remove('off')
  event.target.classList.add('on')
  
  return event.target.innerText = 'ON'
}

const handleOut = (event) => { 
  event.target.classList.remove('on')
  event.target.classList.add('off')
  
  return event.target.innerText = 'OFF'
}

if (listItems.length > 1) {
  listItems.forEach(item => item.addEventListener('mouseover', handleHover))
  listItems.forEach(item => item.addEventListener('mouseout', handleOut))
}