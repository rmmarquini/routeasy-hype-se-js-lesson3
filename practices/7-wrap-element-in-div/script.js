// seu código aqui


// se espera que btn seja filho do elemento com id 'wrapper'
const btn = document.querySelector('#wrapper button');

if(btn) {
  const handleClick = () => {
    btn.innerText = 'Thank you! ❤️'
  }
  btn.addEventListener('click', handleClick)
}