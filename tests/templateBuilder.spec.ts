import { describe, it, expect, beforeEach } from 'vitest'
import { templateBuilder } from '../src/templateBuilder'

describe('templateBuilder', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })
  it('should print the correct name template', () => {
    const inputField = templateBuilder().input({
      type: 'text',
      required: true,
      name: 'name',
      placeholder: 'Ex: José Maria da Silva',
      errorMessage: 'Nome é um campo obrigatório',
      label: 'Nome Completo'
    })
    document.body.innerHTML = inputField
    const inputFieldHTML = document.querySelector('[data-field-name]')
    expect(inputFieldHTML).toBeTruthy()
  })
  it('should print the correct e-mail template when the field is not required', () => {
    const inputField = templateBuilder().input({
      type: 'email',
      required: false,
      name: 'email',
      placeholder: 'E-mail',
      errorMessage: 'E-mail é um campo obrigatório',
      label: 'E-mail'
    })
    document.body.innerHTML = inputField
    const inputFieldHTML = document.querySelector('[data-field-email]')
    expect(inputFieldHTML).toBeTruthy()
  })

})