import validator from "validator"

export default class Contato {
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
    const nomeInput = el.querySelector("input[name='nome']")
    const emailInput = el.querySelector("input[name='email']")
    const telefoneInput = el.querySelector("input[name='telefone']")
    const errorMessageDiv = document.querySelector(".errorMessages")
    const messages = []

    if (!nomeInput.value) {
      messages.push("Nome é um campo obrigatório.")
    }

    if (emailInput.value && !validator.isEmail(emailInput.value)) {
      messages.push("E-mail inválido.")
    }

    if (!emailInput.value && !telefoneInput.value) {
      messages.push(
        "Pelo menos um contato (e-mail ou telefone) deve ser fornecido."
      )
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
