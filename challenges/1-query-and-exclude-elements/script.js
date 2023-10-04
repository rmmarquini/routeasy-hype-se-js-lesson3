// Atribua o elemento HTML correto para a variável 'listItems'
const listItems = 

const button = document.getElementById('button')

const handleClick = () => {
  listItems.forEach((item) => {
    const oldText = item.innerText
    return (item.innerText = oldText === 'ON' ? 'OFF' : 'ON')
  })
}
if (listItems.length > 1) {
  button.addEventListener('click', handleClick)
}
