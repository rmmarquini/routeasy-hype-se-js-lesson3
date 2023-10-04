// Seu código vai aqui
const elem = document.querySelector(".wrapper input[type='text']")
elem.setAttribute('id', 'inputEl')


const button = document.querySelector('.wrapper button')

const changeInput = () => {
  const input = document.querySelector('#inputEl');
  if(input) {
    console.log(input)
    input.value = 'Hello World'
  }
}

button.addEventListener('click', changeInput)
