const button = document.querySelector('#button');

const removeRedCircle = () => {
  // Seu código vai aqui
  const elRedCircle = document.querySelector("#red")
  elRedCircle.remove()
};

button.addEventListener('click', removeRedCircle);
