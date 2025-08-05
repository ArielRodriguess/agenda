import validator from "validator"

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass)
  }

  init() {
    this.events()
  }

  events() {
    if (!this.form) return
    this.form.addEventListener("submit", (e) => {
      e.preventDefault()
      this.validate(e)
    })
  }

  validate(e) {
    const el = e.target
    const emailInput = el.querySelector("input[name='email']")
    const passwordInput = el.querySelector("input[name='password']")
    const errorMessageDiv = document.querySelector(".errorMessages")
    const messages = []

    if (!validator.isEmail(emailInput.value)) {
      messages.push("E-mail inválido.")
    }

    if (passwordInput.value.length < 8 || passwordInput.value.length > 20) {
      messages.push("Senha precisa ter entre 8 e 20 caracteres.")
    }

    if (messages.length > 0) {
      errorMessageDiv.innerHTML = messages.join("<br>")
      errorMessageDiv.classList.add("alert", "alert-danger")
      return
    } else {
      el.submit()
    }
  }
}
