const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function showError (input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

function showSuccess (input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

function checkEmail (input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, 'Неправильный электронный адрес')
  }
}

function checkRequired (inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${input.dataset.name} введена не верно`)
    } else {
      showSuccess(input)
    }
  })
}

function checkLength (input, min, max) {
  if (input.id == 'username') {
    if (input.value.length < min) {
      showError(
        input,
        `Длинна имени пользователя должна быть как минимум ${min} знака`
      )
    } else if (input.value.length > max) {
      showError(
        input,
        `Длинна имени пользователя не должна превышать ${max} знаков`
      )
    }
  } else if (input.id == 'password') {
    if (input.value.length < min) {
      showError(input, `Длинна пароля должна быть как минимум ${min} знаков`)
    } else if (input.value.length > max) {
      showError(input, `Длинна пароля не должна превышать ${max} знаков`)
    }
  }
}

function getFieldName (input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function checkPasswordsMatch (input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Пароли не совпадают')
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault()
  checkRequired([username, email, password, password2])
  checkLength(username, 3, 15)
  checkLength(password, 6, 25)
  checkEmail(email)
  checkPasswordsMatch(password, password2)
})
