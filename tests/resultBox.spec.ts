// urlQuery.test.js
import { describe, it, expect, beforeEach } from 'vitest'
import { resultBox } from '../src/resultBox'
import { createForm } from '../src/createForm'

describe('resultBox', () => {
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
  it('should resultBox appears on screen', () => {
    const result: HTMLElement = document.querySelector('[data-result]')!
    resultBox(result).start()
    expect(result?.classList.contains('active')).toBe(true)
    resultBox(result).end()
    expect(result?.classList.contains('active')).toBe(false)
  })

  it('should override the title and text', () => {
    const result: HTMLElement = document.querySelector('[data-result]')!
    resultBox(result).start()
    const title = result?.querySelector('#form-lcbank-result-title')
    const text = result?.querySelector('#form-lcbank-result-text')
    resultBox(result).title()!.innerHTML = 'titulo'
    resultBox(result).text()!.innerHTML = 'texto'

    expect(title?.innerHTML).toBe('titulo')
    expect(text?.innerHTML).toBe('texto')

  })
})