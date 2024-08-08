import { maskCPF } from './maskCPF'
import { maskPhone } from './maskPhone'
import { validateForm } from './validateForm'
import { collectionInput } from './collectionInput'

export const createForm = () => {
  const block = document.querySelector<HTMLDivElement>('#form-rtv-apply')

  if (!block) {
    console.error("O Elemento #form-rtv-apply não existe na página")
    return

  }
  const data = block.dataset

  const inputs = collectionInput(data)
  console.log(inputs)

  let inputsArray = ''

  inputs.map((input) => {
    return inputsArray += `<input type="hidden" name="${input.key}" value="${input.value}" />`
  })

  const hidePlaceholder = data.hidePlaceholder === 'true'

  const goTo = data.goTo ?? '/obrigado'
  const hasEmail = data.hasEmail === 'true'

  const labelName = data.labelName ?? 'Nome Completo'
  const labelCpf = data.labelCpf ?? 'CPF'
  const labelPhone = data.labelPhone ?? 'Telefone'
  const labelEmail = data.labelEmail ?? 'E-mail'

  const errorName = data.errorName ?? 'Nome é um campo obrigatório'
  const errorCpf = data.errorCpf ?? 'CPF é um campo obrigatório'
  const errorPhone = data.errorPhone ?? 'Telefone é um campo obrigatório'
  const errorEmail = data.errorPhone ?? 'E-mail é um campo obrigatório'

  const placeholderName = !hidePlaceholder ? data.placeholderName ?? 'Ex: José Maria da Silva' : ''
  const placeholderCpf = !hidePlaceholder ? data.placeholderCpf ?? 'CPF' : ''
  const placeholderPhone = !hidePlaceholder ? data.placeholderPhone ?? 'Telefone' : ''
  const placeholderEmail = !hidePlaceholder ? data.placeholderPhone ?? 'E-mail' : ''
  const labelButton = data.labelButton ?? 'Bora antecipar'

  const emailTemplate = hasEmail ? `<div class="form-lcbank-field">
    <label class="form-lcbank-label" for="form-lcbank-name" id="form-lcbank-label-email">${labelEmail} <span class="form-lcbank-required">*</span></label>
    <input type="email" class="form-lcbank-input" name="email" id="form-lcbank-email" placeholder="${placeholderEmail}"><span class="form-lcbank-error">${errorEmail}</span>
  </div>` : ``

  const template = `<div class="form-lcbank-master">
      <form action="#" method="post" novalidate id="form-lcbank">
        <div class="form-lcbank-field">
          <label class="form-lcbank-label" for="form-lcbank-name" id="form-lcbank-label-name">${labelName} <span class="form-lcbank-required">*</span></label>
          <input type="text" class="form-lcbank-input" name="name" id="form-lcbank-name" placeholder="${placeholderName}"><span class="form-lcbank-error">${errorName}</span>
        </div>
        ${emailTemplate}
        <div class="form-lcbank-field">
          <label class="form-lcbank-label" for="form-lcbank-cpf" id="form-lcbank-label-cpf">${labelCpf} <span class="form-lcbank-required">*</span></label>
          <input type="text" class="form-lcbank-input" name="cpf" id="form-lcbank-cpf" placeholder="${placeholderCpf}"><span class="form-lcbank-error">${errorCpf}</span>
        </div>
        <div class="form-lcbank-field">
          <label class="form-lcbank-label" for="form-lcbank-phone" id="form-lcbank-label-phone">${labelPhone} <span class="form-lcbank-required">*</span></label>
          <input type="text" class="form-lcbank-input" name="phone" id="form-lcbank-phone" placeholder="${placeholderPhone}"><span class="form-lcbank-error">${errorPhone}</span>
        </div>
        ${inputsArray}
        <div class="form-lcbank-field">
          <button type="submit" id="form-lcbank-label-button" class="form-lcbank-label-button">${labelButton}</button>
        </div>
      </form>
    </div>`


  const activeUrl = window.location.href
  console.log(activeUrl)
  block.innerHTML = template

  // aplicar as máscaras
  maskCPF(document.querySelector('#form-lcbank-cpf')!)
  maskPhone(document.querySelector('#form-lcbank-phone')!)

  // validar o formulário
  validateForm(hasEmail, goTo)

}