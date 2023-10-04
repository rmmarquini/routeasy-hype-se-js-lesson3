const verifyBtn = document.getElementById('verify')
const clearBtn = document.getElementById('clear')

const elFirstName = document.querySelector("#firstName")
const elLastName = document.querySelector("#lastName")
const elFullName = document.querySelector("#fullName")

verifyBtn.addEventListener('click', function() {
  // seu código vai aqui
  let firstName = elFirstName.value
  let lastName = elLastName.value
  elFullName.value = `${firstName} ${lastName}`
})

clearBtn.addEventListener('click', () => {
  // seu código vai aqui
  elFirstName.value = 'Max'
  elLastName.value = 'Musterman'
  elFullName.value = ''
})
