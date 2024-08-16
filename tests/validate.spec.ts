import { describe, it, expect } from 'vitest'
import { clearClassValidation, validate } from '../src/validate'
import { validateName } from '../src/validateName'

describe('validate', () => {
  it('should return error when user send a wrong input file', () => {
    document.body.innerHTML = `<input type="name" id="nam">`
    const input = document.getElementById('name') as HTMLInputElement

    expect(validate({ input, validator: validateName })).toBeUndefined()
  })

  it('should return error when user send without validator', () => {
    document.body.innerHTML = `<input type="name" id="name">`
    const input = document.getElementById('name') as HTMLInputElement

    expect(validate({ input, validator: null })).toBeUndefined()
  })

  it('should validate properly name', () => {
    document.body.innerHTML = `<input type="name" id="name">`
    const input = document.getElementById('name') as HTMLInputElement
    const inputSequence = 'Josué'
    inputSequence.split('').forEach(char => {
      input.value += char
      input.dispatchEvent(new Event('input'))
    })

    expect(validate({ input, validator: validateName })).toBe(true)
    expect(input.classList.contains('success')).toBe(true)
  })

  it('should clear the classes', () => {
    document.body.innerHTML = `<input type="name" id="name" class="error success">`
    const input = document.getElementById('name') as HTMLInputElement
    clearClassValidation(input)

    expect(input.classList.contains('success')).toBe(false)
    expect(input.classList.contains('error')).toBe(false)
  })
})