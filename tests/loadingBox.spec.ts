// urlQuery.test.js
import { describe, it, expect, beforeEach } from 'vitest'
import { loadingBox } from '../src/loadingBox'
import { createForm } from '../src/createForm'

describe('loadingBox', () => {
  beforeEach(() => {
    document.body.innerHTML = `<button data-call-to-action>Abrir modal</button> <button data-call-to-action>Abrir modal secundário</button><div 
      data-form-lcbank-apply 
      data-has-email="true" 
      data-mode="modal"
      data-label-name="Nome Completo" 
      data-label-cpf="CPF" 
      data-label-phone="Telefone" 
      data-page-title="Página do Desenvolvedor"
      data-website="LCBank"
      data-input-url="https://www.google.com.br/homepage"
      data-input-site="https://www.google.com.br"
      data-placeholder-phone="(99) 9999-9999" 
      data-label-button="Enviar seus dados">
    </div>`
    createForm()
  })
  it('should loading appears on screen', () => {

    const loading: HTMLElement = document.querySelector('[data-loading]')!
    loadingBox(loading).start()
    expect(loading?.classList.contains('active')).toBe(true)
    loadingBox(loading).end()
    expect(loading?.classList.contains('active')).toBe(false)
  })
})