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
  const { requiredEmail, goTo, hasEmail, form } = options

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

    const fieldName: HTMLInputElement = form.querySelector('[data-field-name]')!
    const fieldCpf: HTMLInputElement = form.querySelector('[data-field-cpf]')!
    const fieldPhone: HTMLInputElement = form.querySelector('[data-field-phone]')!
    const fieldEmail: HTMLInputElement | null = form.querySelector('[data-field-email]') ?? null

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
      loadingBox(form.querySelector('[data-loading]')!).start()

      /* v8 ignore next 3 */
      if (!fields.email || fields.email.length === 0) {
        fields.email = `${fields.cpf}@gmail.com`
      }
      return processForm(fields, goTo, form)
    })
  }
}