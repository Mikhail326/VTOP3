const valueTel = document.querySelector('#input-tel')
const submit = document.querySelector('#btn-form')

const reg = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/

const submitFormContact = (e) => {
    if (!reg.test(valueTel.value)) {
      e.preventDefault()
    } else {
      console.log("true")
    }
  }

  submit.addEventListener('click', submitFormContact)