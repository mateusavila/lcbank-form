import { describe, it, expect } from 'vitest'
import { validateFieldBlur } from '../src/validateFieldBlur'
import { validateName } from '../src/validateName'
import { validateEmail } from '../src/validateEmail'

describe('validateFieldBlur', () => {
  it('should return undefined when capture the wrong input', () => {
    document.body.innerHTML = `<input type="text" id="nam">`
    const input = document.getElementById('name')! as HTMLInputElement

    expect(validateFieldBlur({
      input,
      validator: validateName,
      isEmail: false,
      requiredEmail: false,
      hasEmail: false
    })).toBeUndefined()
  })

  it('should apply the validation when user event blur is active', () => {
    document.body.innerHTML = `<input type="text" id="name">`
    const input = document.getElementById('name')! as HTMLInputElement

    const inputSequence = 'Josué'
    inputSequence.split('').forEach(char => {
      input.value += char
      input.dispatchEvent(new Event('input'))
    })
    validateFieldBlur({
      input,
      validator: validateName,
      isEmail: false,
      requiredEmail: false,
      hasEmail: false
    })
    input.dispatchEvent(new Event('blur'))

    expect(input.classList.contains('success')).toBeTruthy()
  })

  it('should apply the validation in e-mail field', () => {
    document.body.innerHTML = `<input type="email" id="email">`
    const input = document.getElementById('email')! as HTMLInputElement

    const inputSequence = 'josue@gmail.com'
    inputSequence.split('').forEach(char => {
      input.value += char
      input.dispatchEvent(new Event('input'))
    })
    validateFieldBlur({
      input,
      validator: validateEmail,
      isEmail: true,
      requiredEmail: true,
      hasEmail: true
    })
    input.dispatchEvent(new Event('blur'))

    expect(input.classList.contains('success')).toBeTruthy()
  })

  it('should validate the e-mail if is not required but user filled anyway', () => {
    document.body.innerHTML = `<input type="email" id="email">`
    const input = document.getElementById('email')! as HTMLInputElement

    const inputSequence = 'josue@gmail.com'
    inputSequence.split('').forEach(char => {
      input.value += char
      input.dispatchEvent(new Event('input'))
    })
    validateFieldBlur({
      input,
      validator: validateEmail,
      isEmail: true,
      requiredEmail: false,
      hasEmail: true
    })
    input.dispatchEvent(new Event('blur'))

    expect(input.classList.contains('success')).toBeTruthy()
  })

  it('should validate the e-mail if is not required but user filled anyway with wrong email', () => {
    document.body.innerHTML = `<input type="email" id="email">`
    const input = document.getElementById('email')! as HTMLInputElement


    validateFieldBlur({
      input,
      validator: validateEmail,
      isEmail: true,
      requiredEmail: false,
      hasEmail: true
    })
    const inputSequence = 'josue'
    inputSequence.split('').forEach(char => {
      input.value += char
      input.dispatchEvent(new Event('input'))
    })
    input.dispatchEvent(new Event('blur'))
    console.log('input claslist', input.classList.contains('success'))
    expect(input.classList.contains('success')).toBeFalsy()
    expect(input.classList.contains('error')).toBeTruthy()
  })

  it('should apply the validation in e-mail field, but return without classes when the fields is empty', () => {
    document.body.innerHTML = `<input type="email" id="email">`
    const input = document.getElementById('email')! as HTMLInputElement

    validateFieldBlur({
      input,
      validator: validateEmail,
      isEmail: true,
      requiredEmail: false,
      hasEmail: true
    })
    input.dispatchEvent(new Event('blur'))

    expect(input.classList.contains('success')).toBeFalsy()
  })



})