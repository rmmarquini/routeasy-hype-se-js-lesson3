// seu código aqui
const div = document.createElement("div")
div.setAttribute("id", "wrapper")

const btnEl = document.querySelector("#button")
btnEl.parentNode.append(div)
div.appendChild(btnEl)

// se espera que btn seja filho do elemento com id 'wrapper'
const btn = document.querySelector('#wrapper button');

if(btn) {
  const handleClick = () => {
    btn.innerText = 'Thank you! ❤️'
  }
  btn.addEventListener('click', handleClick)
}