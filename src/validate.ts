import { ValidateField } from "./types"

export const validate = (options: ValidateField) => {
  const { input, validator } = options

  if (!input) {
    console.error("Por favor, adicione um input válido")
    return
  }

  if (!validator) {
    console.error("Por favor, adicione uma função validadora")
    return
  }

  if (!validator(input.value)) {
    input.classList.add('error')
    input.classList.remove('success')
    return false
  } else {
    input.classList.add('success')
    input.classList.remove('error')
    return true
  }
}

export const clearClassValidation = (input: HTMLInputElement) => input.classList.remove('error', 'success')