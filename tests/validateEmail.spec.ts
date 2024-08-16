import { describe, it, expect } from 'vitest'
import { validateEmail, shouldEvaluateEmail } from '../src/validateEmail'

describe('validateEmail', () => {
  it('should validate the E-mail', () => {
    expect(validateEmail('jose@maria.com.br')).toBe(true)
  })

  it('should invalidate the E-mail', () => {
    expect(validateEmail('jose@maria.c')).toBe(false)
    expect(validateEmail('@maria.c')).toBe(false)
    expect(validateEmail('mateus-at-maria.c')).toBe(false)
  })

  it('should return a undefined when the input is false?', () => {
    document.body.innerHTML = `<input type="email" id="emails">`
    const input = document.getElementById('email')! as HTMLInputElement

    expect(shouldEvaluateEmail(input, { hasEmail: true, requiredEmail: true })).toBeFalsy()
  })

  it('should a required email to be evaluated?', () => {
    document.body.innerHTML = `<input type="email" id="email">`
    const input = document.getElementById('email')! as HTMLInputElement

    expect(shouldEvaluateEmail(input, { hasEmail: true, requiredEmail: true })).toBe(true)
  })

  it('should a non required e-mail should be evaluated when got no value?', () => {
    document.body.innerHTML = `<input type="email" id="email">`
    const input = document.getElementById('email')! as HTMLInputElement

    expect(shouldEvaluateEmail(input, { hasEmail: true, requiredEmail: false })).toBe(false)
  })

  it('should a non required e-mail should be evaluated when got a value?', () => {
    document.body.innerHTML = `<input type="email" id="email" value="m">`
    const input = document.getElementById('email')! as HTMLInputElement

    expect(shouldEvaluateEmail(input, { hasEmail: true, requiredEmail: false })).toBe(true)
  })




})