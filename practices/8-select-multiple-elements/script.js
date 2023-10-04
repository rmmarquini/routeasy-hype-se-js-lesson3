// Atribua o elemento HTML correto para a variável abaixo
const listItems = 

const handleHover = (event) => {
  // Adicione uma funcionalidade que altere as cores dos itens da lista quando o mouse passar por cima
  // Dica: interprete o arquivo CSS para saber qual classe utilizar
  
  return event.target.innerText = 'ON'
}

if (listItems.length > 1) {
  listItems.forEach(item => item.addEventListener('mouseover', handleHover))
}