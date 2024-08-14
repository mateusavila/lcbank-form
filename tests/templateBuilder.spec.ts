import { describe, it, expect } from 'vitest'
import { templateBuilder } from '../src/templateBuilder'

describe('templateBuilder', () => {
  it('should print the correct name template', () => {
    const inputField = templateBuilder().input({
      type: 'text',
      required: true,
      name: 'name',
      placeholder: 'Ex: José Maria da Silva',
      errorMessage: 'Nome é um campo obrigatório',
      label: 'Nome Completo'
    })
    expect(inputField).toBe(`<div class="form-lcbank-field"><label class="form-lcbank-label" for="form-lcbank-name" id="form-lcbank-label-name">Nome Completo <span class="form-lcbank-required">*</span></label><input type="text" class="form-lcbank-input" name="name" id="form-lcbank-name" placeholder="Ex: José Maria da Silva"><span class="form-lcbank-error">Nome é um campo obrigatório</span></div>`)
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
    expect(inputField).toBe(`<div class="form-lcbank-field"><label class="form-lcbank-label" for="form-lcbank-email" id="form-lcbank-label-email">E-mail </label><input type="email" class="form-lcbank-input" name="email" id="form-lcbank-email" placeholder="E-mail"><span class="form-lcbank-error">E-mail é um campo obrigatório</span></div>`)
  })

})