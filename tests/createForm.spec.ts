import { describe, it, expect, beforeEach, vi } from 'vitest'
import { createForm } from '../src/createForm'

describe('createForm', () => {
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
    // Mock para window.location
    Object.defineProperty(window, 'location', {
      value: { href: 'https://www.google.com.br' },
      writable: true
    })
  })

  it('should show more than 1 form in the page', () => {
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
    </div><div 
      data-form-lcbank-apply 
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

    const formsHTML = document.querySelectorAll('[data-form-lcbank-apply]')
    expect(formsHTML.length).toBe(2)
  })


  it('should show warning the developer if title is missing', () => {
    document.body.innerHTML = `<div 
      data-form-lcbank-apply>
    </div>`
    const consoleErrorSpy = vi.spyOn(console, 'error')
    createForm()
    expect(consoleErrorSpy).toHaveBeenCalledWith("É necessário atribuir o título da página com data-page-title=\"Título da página\"")
  })

  it('should show warning the developer if website is missing', () => {
    document.body.innerHTML = `<div 
      data-form-lcbank-apply 
      data-page-title="Página do Desenvolvedor">
    </div>`
    const consoleErrorSpy = vi.spyOn(console, 'error')
    createForm()
    expect(consoleErrorSpy).toHaveBeenCalledWith("É necessário atribuir o website com data-website=\"Título do website\"")
  })

  it('should warning the user if the ID is wrong', () => {
    document.body.innerHTML = `<div  id="form-rtv-errado"></div>`
    const consoleErrorSpy = vi.spyOn(console, 'error')
    createForm()
    expect(consoleErrorSpy).toHaveBeenCalledWith("O Elemento [data-form-lcbank-apply] não existe na página")
  })

  it('should open and close the modal', () => {
    createForm()

    const callToActions: NodeListOf<HTMLButtonElement> = document.querySelectorAll('[data-call-to-action]')
    const modal = document.getElementById('form-lcbank-modal')!
    const closeButton = document.getElementById('form-lcbank-close')!
    callToActions[0].click()
    expect(modal.classList.contains('active')).toBe(true)
    closeButton.click()
    expect(modal.classList.contains('active')).toBe(false)
    callToActions[1].click()
    expect(modal.classList.contains('active')).toBe(true)
  })

  it('should create a form with default labels', () => {
    createForm()
    const form: HTMLFormElement = document.querySelector('[data-form-lcbank]')!
    const modalParent = form.parentElement?.parentElement?.parentElement?.parentElement!
    expect(form).not.toBeNull()
    expect(form.querySelector('#form-lcbank-label-name')?.textContent).toContain('Nome Completo')
    expect(form.querySelector('#form-lcbank-label-cpf')?.textContent).toContain('CPF')
    expect(form.querySelector('#form-lcbank-label-button')?.textContent).toContain('Enviar seus dados')
    expect(form.querySelector('#form-lcbank-label-phone')?.textContent).toContain('Telefone')

    expect((modalParent.querySelector('.form-lcbank-image-logo') as HTMLImageElement)?.src).toBe('https://lcbform.com.br/wp-content/uploads/2024/09/logo-lcbank.svg')

    expect(modalParent.querySelector('.form-lcbank-master-title')?.textContent).toContain('Complete os campos para que nossos \n especialistas consultem o seu processo')
    expect(modalParent.querySelectorAll('.form-lcbank-master-privacy')[0]?.textContent).toContain('Ao enviar meus dados, eu concordo com a')
    expect(modalParent.querySelectorAll('.form-lcbank-master-privacy')[0].querySelector('a')?.textContent).toContain('Política de Privacidade')
    expect(modalParent.querySelectorAll('.form-lcbank-master-privacy')[0].querySelector('a')?.href).toBe('https://google.com.br/')
  })

  it('should create a form with default labels in modal-partial mode', () => {
    document.body.innerHTML = `<button data-call-to-action>Abrir modal</button> <button data-call-to-action>Abrir modal secundário</button><div 
      data-form-lcbank-apply 
      data-has-email="true" 
      data-mode="modal-partial"
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
    const form: HTMLFormElement = document.querySelector('[data-form-lcbank]')!
    const modalParent = form.parentElement?.parentElement?.parentElement?.parentElement!
    expect(form).not.toBeNull()
    expect(form.querySelector('#form-lcbank-label-name')?.textContent).toContain('Nome Completo')
    expect(form.querySelector('#form-lcbank-label-cpf')?.textContent).toContain('CPF')
    expect(form.querySelector('#form-lcbank-label-button')?.textContent).toContain('Enviar seus dados')
    expect(form.querySelector('#form-lcbank-label-phone')?.textContent).toContain('Telefone')

    expect(modalParent.querySelector('.form-lcbank-master-title')?.textContent).toContain('Complete os campos para que nossos \n especialistas consultem o seu processo')
    expect(modalParent.querySelectorAll('.form-lcbank-master-privacy')[0]?.textContent).toContain('Ao enviar meus dados, eu concordo com a')
    expect(modalParent.querySelectorAll('.form-lcbank-master-privacy')[0].querySelector('a')?.textContent).toContain('Política de Privacidade')
    expect(modalParent.querySelectorAll('.form-lcbank-master-privacy')[0].querySelector('a')?.href).toBe('https://google.com.br/')
  })

  it('should use custom labels from data attributes', () => {
    document.querySelector('[data-form-lcbank-apply]')?.setAttribute('data-label-name', 'Nome Personalizado')
    document.querySelector('[data-form-lcbank-apply]')?.setAttribute('data-label-email', 'Email Personalizado')
    document.querySelector('[data-form-lcbank-apply]')?.setAttribute('data-label-phone', 'Telefone Personalizado')
    document.querySelector('[data-form-lcbank-apply]')?.setAttribute('data-label-cpf', 'CPF Personalizado')
    createForm()
    expect(document.querySelector('#form-lcbank-label-name')?.textContent).toContain('Nome Personalizado')
    expect(document.querySelector('#form-lcbank-label-email')?.textContent).toContain('Email Personalizado')
    expect(document.querySelector('#form-lcbank-label-phone')?.textContent).toContain('Telefone Personalizado')
    expect(document.querySelector('#form-lcbank-label-cpf')?.textContent).toContain('CPF Personalizado')
  })

  it('should update the images', () => {
    document.querySelector('[data-form-lcbank-apply]')?.setAttribute('data-logo-company', 'https://www.php.net/images/logos/php-logo.svg')
    createForm()
    expect((document.querySelector('.form-lcbank-image-logo') as HTMLImageElement)?.src).toBe('https://www.php.net/images/logos/php-logo.svg')

  })

  it('should the placeholder is changed', () => {

    const element = document.querySelector('[data-form-lcbank-apply]')!
    element?.setAttribute('data-placeholder-cpf', 'Ex: 123.123.123-00')
    createForm()
    const phoneInput = (element.querySelector('[data-field-phone]') as HTMLInputElement)?.placeholder
    const nameInput = (element.querySelector('[data-field-name]') as HTMLInputElement)?.placeholder
    const cpfInput = (element.querySelector('[data-field-cpf]') as HTMLInputElement)?.placeholder
    expect(phoneInput).toBe('(99) 9999-9999')
    expect(nameInput).toBe('Ex: José Maria da Silva')

    expect(cpfInput).toBe('Ex: 123.123.123-00')
  })

  it('should hide the placeholders', () => {
    document.querySelector('[data-form-lcbank-apply]')?.setAttribute('data-hide-placeholder', 'true')
    createForm()
    const phoneInput = (document.querySelector('[data-field-phone]') as HTMLInputElement)?.placeholder
    const nameInput = (document.querySelector('[data-field-name]') as HTMLInputElement)?.placeholder
    const cpfInput = (document.querySelector('[data-field-cpf]') as HTMLInputElement)?.placeholder
    expect(phoneInput).toBe('')
    expect(nameInput).toBe('')
    expect(cpfInput).toBe('')
  })

  it('should include required asterisks for all fields', () => {
    createForm()
    const requiredFields = document.querySelectorAll('.form-lcbank-required')
    expect(requiredFields.length).toBe(4)
  })

  it('should hide the asterisk when e-mail is not required', () => {
    document.body.innerHTML = `<button data-call-to-action>Abrir modal</button> <button data-call-to-action>Abrir modal secundário</button><div 
      data-form-lcbank-apply 
      data-has-email="false" 
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
    const requiredFields = document.querySelectorAll('.form-lcbank-required')
    expect(requiredFields.length).toBe(3)
  })

  it('should hide the input email', () => {
    document.querySelector('[data-form-lcbank-apply]')?.setAttribute('data-has-email', 'false')
    createForm()
    expect(document.querySelector('#form-lcbank-email')).toBeNull()
  })

  it('should create a submit button', () => {
    createForm()
    const submitButton = document.querySelector('#form-lcbank-label-button')
    expect(submitButton).not.toBeNull()
    expect(submitButton?.textContent).toBe('Enviar seus dados')
  })

  it('should have at least 2 helpers', () => {
    createForm()
    const helpers = document.querySelectorAll('.form-lcbank-helper')
    expect(helpers).not.toBeNull()
    expect(helpers.length).toBe(1)
  })

  it('should have at least 5 input hidden fields', () => {
    createForm()
    const requiredFields = document.querySelectorAll('input[type="hidden"]')
    expect(requiredFields.length).toBe(5)
  })

  it('should apply the mask on CPF field', () => {
    createForm()
    const cpfInput: HTMLInputElement = document.querySelector('[data-field-cpf]')!
    const inputSequence = '12345678900'
    inputSequence.split('').forEach(char => {
      cpfInput.value += char
      cpfInput.dispatchEvent(new Event('input'))
    })
    expect(cpfInput).not.toBeNull()
    expect(cpfInput?.value).toBe('123.456.789-00')
  })

  it('should apply the mask on Phone field - cellphone', () => {
    createForm()
    const phoneInput: HTMLInputElement = document.querySelector('[data-field-phone]')!
    const inputSequence = '99999999999'
    inputSequence.split('').forEach(char => {
      phoneInput.value += char
      phoneInput.dispatchEvent(new Event('input'))
    })
    expect(phoneInput).not.toBeNull()
    expect(phoneInput?.value).toBe('(99) 99999-9999')
  })

  it('should apply the mask on Phone field - fixed phone', () => {
    createForm()
    const phoneInput: HTMLInputElement = document.querySelector('[data-field-phone]')!
    const inputSequence = '9999999999'
    inputSequence.split('').forEach(char => {
      phoneInput.value += char
      phoneInput.dispatchEvent(new Event('input'))
    })
    expect(phoneInput).not.toBeNull()
    expect(phoneInput?.value).toBe('(99) 9999-9999')
  })

  it('should show errors when invalid data', () => {
    createForm()
    const element = document.querySelector('[data-form-lcbank-apply]')!
    const submitButton: HTMLButtonElement = element.querySelector('[data-button-submit]')!
    submitButton.click()

    const phoneInput: HTMLInputElement = element.querySelector('[data-field-phone]')!
    const phoneEmail: HTMLInputElement = element.querySelector('[data-field-email]')!
    const phoneName: HTMLInputElement = element.querySelector('[data-field-name]')!
    const phoneCpf: HTMLInputElement = element.querySelector('[data-field-cpf]')!

    expect(phoneInput?.classList.contains('error')).toBe(true)
    expect(phoneEmail?.classList.contains('error')).toBe(true)
    expect(phoneName?.classList.contains('error')).toBe(true)
    expect(phoneCpf?.classList.contains('error')).toBe(true)
  })

  it('should show success fields', () => {
    createForm()

    const element = document.querySelector('[data-form-lcbank-apply]')!

    const submitButton: HTMLButtonElement = element.querySelector('[data-button-submit]')!

    const phoneInput: HTMLInputElement = element.querySelector('[data-field-phone]')!
    const emailInput: HTMLInputElement = element.querySelector('[data-field-email]')!
    const nameInput: HTMLInputElement = element.querySelector('[data-field-name]')!
    const cpfInput: HTMLInputElement = element.querySelector('[data-field-cpf]')!

    const phoneSequence = '47999999999'
    phoneSequence.split('').forEach(char => {
      phoneInput.value += char
      phoneInput.dispatchEvent(new Event('input'))
    })

    const cpfSequence = '83730890476'
    cpfSequence.split('').forEach(char => {
      cpfInput.value += char
      cpfInput.dispatchEvent(new Event('input'))
    })

    const emailSequence = 'teste@teste.com.br'
    emailSequence.split('').forEach(char => {
      emailInput.value += char
      emailInput.dispatchEvent(new Event('input'))
    })

    const nameSequence = 'Teste Plataforma'
    nameSequence.split('').forEach(char => {
      nameInput.value += char
      nameInput.dispatchEvent(new Event('input'))
    })

    submitButton.click()


    expect(phoneInput?.classList.contains('success')).toBe(true)
    expect(emailInput?.classList.contains('success')).toBe(true)
    expect(nameInput?.classList.contains('success')).toBe(true)
    expect(cpfInput?.classList.contains('success')).toBe(true)

  })

  it('should use default labels when no custom labels are provided', () => {
    document.body.innerHTML = `
      <div data-form-lcbank-apply data-page-title="Página do Desenvolvedor"
      data-website="LCbank"></div>
    `
    createForm()

    expect(document.querySelector('#form-lcbank-label-name')?.textContent).toContain('Nome Completo')
    expect(document.querySelector('#form-lcbank-label-cpf')?.textContent).toContain('CPF')
    expect(document.querySelector('#form-lcbank-label-phone')?.textContent).toContain('WhatsApp')
  })

  it('should use custom labels when provided', () => {
    document.body.innerHTML = `
      <div data-form-lcbank-apply
        data-has-email="true"
        data-label-name="Nome Personalizado"
        data-label-cpf="CPF Personalizado"
        data-label-phone="Telefone Personalizado"
        data-page-title="Página do Desenvolvedor"
        data-helper-cpf="Põe teu CPF"
        data-website="LCbank"
        data-label-email="E-mail Personalizado">
      </div>
    `
    createForm()

    expect(document.querySelector('#form-lcbank-label-name')?.textContent).toContain('Nome Personalizado')
    expect(document.querySelector('#form-lcbank-label-cpf')?.textContent).toContain('CPF Personalizado')
    expect(document.querySelector('#form-lcbank-label-phone')?.textContent).toContain('Telefone Personalizado')
    expect(document.querySelector('#form-lcbank-label-email')?.textContent).toContain('E-mail Personalizado')
    expect(document.querySelector('.form-lcbank-helper')?.textContent).toContain('Põe teu CPF')
  })

  it('should use a mix of default and custom labels', () => {
    document.body.innerHTML = `
      <div data-form-lcbank-apply
      data-website="LCbank"
        data-page-title="Página do Desenvolvedor"
        data-label-name="Nome Personalizado"
        data-label-cpf="CPF Personalizado">
      </div>
    `
    createForm()

    expect(document.querySelector('#form-lcbank-label-name')?.textContent).toContain('Nome Personalizado')
    expect(document.querySelector('#form-lcbank-label-cpf')?.textContent).toContain('CPF Personalizado')
    expect(document.querySelector('#form-lcbank-label-phone')?.textContent).toContain('WhatsApp')
  })

  // validando o modo form
  it('should use custom labels when provided', () => {
    document.body.innerHTML = `<button data-call-to-action>Abrir modal</button> <button data-call-to-action>Abrir modal secundário</button><div 
      data-form-lcbank-apply 
      data-has-email="true" 
      data-mode="form"
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

    expect(document.querySelector('.form-lcbank-master-privacy')).toBeNull()
    expect(document.querySelector('#form-lcbank-modal')).toBeNull()

  })

  // it('should log the current URL', () => {
  //   const consoleSpy = vi.spyOn(console, 'log')
  //   createForm()
  //   expect(consoleSpy).toHaveBeenCalledWith('https://www.google.com.br')
  // })

})