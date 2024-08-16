import { filterObject } from "./filterObject"
import { loadingBox } from "./loadingBox"
import { processForm } from "./processForm"
import { ValidateForm } from "./types"
import { validate } from "./validate"
import { validateCPF } from "./validateCPF"
import { shouldEvaluateEmail, validateEmail } from "./validateEmail"
import { validateName } from "./validateName"
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

      /* v8 ignore next 1 */
      fields.extra = JSON.stringify(filterObject(fields)) ?? ''

      const arrFields = [
        {
          input: fieldName as HTMLInputElement,
          validator: validateName
        },
        {
          input: fieldEmail as HTMLInputElement,
          validator: validateEmail
        },
        {
          input: fieldCpf as HTMLInputElement,
          validator: validateCPF
        },
        {
          input: fieldPhone as HTMLInputElement,
          validator: validatePhoneNumber
        },
      ]

      arrFields.map(({ input, validator }, index) => {
        if (input && index !== 1) {
          if (!validate({
            input, validator
          })) {
            errors++
          }
        }
        if (shouldEvaluateEmail(input, { hasEmail, requiredEmail })) {
          if (!validate({
            input, validator
          })) {
            errors++
          }
        }
      })

      if (errors > 0) {
        return console.log('tem erros no form')
      }

      [fieldName, fieldCpf, fieldPhone, fieldEmail].forEach((field) => {
        if (field) {
          (field as HTMLInputElement).disabled = true
        }
      })
      loadingBox().startLoading()

      /* v8 ignore next 3 */
      if (fields.email.length === 0) {
        fields.email = `${fields.cpf}@gmail.com`
      }
      return processForm(fields, goTo)
    })
  }
}