import { processForm } from "./processForm"
import { ValidateForm } from "./types"
import { validateCPF } from "./validateCPF"
import { validateEmail } from "./validateEmail"
import { validatePhoneNumber } from "./validatePhone"

export const validateForm = (options: ValidateForm) => {

  const { requiredEmail, goTo, hasEmail } = options

  const form: HTMLElement = document.getElementById('form-lcbank')!
  if (form) {
    // capturar todos os inputs
    const createJsonObject = (form: HTMLFormElement) => {
      const inputs = form.querySelectorAll('input')
      const fields: Record<string, string> = {}

      inputs.forEach(input => {
        fields[input.name] = input.value
      })
      return fields
    }

    const requiredField = (field: string) => field.length

    const fieldName = document.getElementById('form-lcbank-name')
    const fieldCpf = document.getElementById('form-lcbank-cpf')
    const fieldPhone = document.getElementById('form-lcbank-phone')
    const fieldEmail = document.getElementById('form-lcbank-email') ?? null

    const resetCSSInputs = (input: HTMLElement) => input.classList.remove('error', 'success')

    form.addEventListener('submit', function (event) {
      event.preventDefault()
      let errors = 0
      const fields = createJsonObject(form as HTMLFormElement);
      [fieldName, fieldCpf, fieldPhone, fieldEmail].forEach((field) => field && resetCSSInputs(field))

      if (!requiredField(fields.name)) {
        fieldName?.classList.add('error')
        errors++
      } else {
        fieldName?.classList.add('success')
      }

      if (!validateCPF(fields.cpf)) {
        fieldCpf?.classList.add('error')
        errors++
      } else {
        fieldCpf?.classList.add('success')
      }

      if (!validatePhoneNumber(fields.phone)) {
        fieldPhone?.classList.add('error')
        errors++
      } else {
        fieldPhone?.classList.add('success')
      }

      if (hasEmail && requiredEmail && !validateEmail(fields.email)) {
        fieldEmail?.classList.add('error')
        errors++
      } else {
        fieldEmail?.classList.add('success')
      }

      if (errors > 0) {
        return console.log('tem erros no form')
      }

      [fieldName, fieldCpf, fieldPhone, fieldEmail].forEach((field) => {
        if (field) {
          (field as HTMLInputElement).disabled = true
        }
      })
      return processForm(fields, goTo)
    })
  }
}