import { maskCPF } from './maskCPF'
import { maskPhone } from './maskPhone'
import { validateForm } from './validateForm'
import { collectionInput } from './collectionInput'
import { modalBox } from './modalBox'
import { urlBuilder } from './urlBuilder'
import { isValidURL } from './isValidURL'
import { ValidateForm } from './types'
import { loadingBox } from './loadingBox'
import { resultBox } from './resultBox'
import { templateBuilder } from './templateBuilder'

export const createForm = () => {
  const block = document.querySelector<HTMLDivElement>('#form-rtv-apply')

  if (!block) {
    console.error("O Elemento #form-rtv-apply não existe na página")
    return
  }
  const data = block.dataset

  // campos obrigatórios
  const pageTitle = data.pageTitle?.length
  const pageUrl = data.pageUrl?.length
  const website = data.website?.length

  if (!pageTitle) {
    console.error("É necessário atribuir o título da página com data-page-title=\"Título da página\"")
    return
  }

  if (!website) {
    console.error("É necessário atribuir o website com data-website=\"Título do website\"")
    return
  }

  if (!pageUrl || !isValidURL(data.pageUrl)) {
    console.error("É necessário atribuir a URL da página com data-page-url=\"https://www.lcbank.com.br\". Esta URL precisa ser válida.")
    return
  }

  let printInputs = ''
  let inputs = [...collectionInput(data), { key: 'page_title', value: data.pageTitle }, { key: 'page_url', value: data.pageUrl }, { key: 'website', value: data.website }]
  const getUrlQueryString = window.location.search

  /* v8 ignore next 3 */
  if (getUrlQueryString) {
    inputs = [...inputs, ...urlBuilder(getUrlQueryString)]
  }

  inputs.map(({ key, value }) => {
    return printInputs += `<input type="hidden" name="${key}" value="${value}" />`
  })

  const hidePlaceholder = data.hidePlaceholder === 'true'
  const goTo = data.goTo ?? '/obrigado'
  const hasEmail = data.hasEmail === 'true'
  const requiredEmail = data.requiredEmail !== 'false'

  const company = data.company ?? 'LC Bank'
  const logoCompany = data.logoCompany ?? 'https://precatorioestadual.com.br/wp-content/uploads/2024/08/logotipo.png'
  const imageMoney = data.imageMoney ?? 'https://precatorioestadual.com.br/wp-content/uploads/2024/08/money-desktop.png'
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

  const modalTitle = data.modalTitle ?? 'Solicite a antecipação <br> e receba o dinheiro da sua RPV em 24h!'
  const modalText = data.modalText ?? 'Preencha o formulário para que nossos especialistas consultem seu processo:'

  const modalPrivacy = data.modalPrivacy ?? 'Ao enviar meus dados, eu concordo com a'
  const modalPrivacyLink = data.modalPrivacyLink ?? 'https://google.com.br'
  const modalPrivacyText = data.modalPrivacyText ?? 'Política de Privacidade'
  const modalFooterText = data.modalFooterText ?? '*Após a assinatura do contrato.'

  const template = `<div class="form-lcbank-modal" id="form-lcbank-modal">
    ${templateBuilder().closeModal()}
    <div class="form-lcbank-image-box">
      <img src="${logoCompany}" alt="${company}" class="form-lcbank-image-logo">
      <img src="${imageMoney}" alt="image-money" class="form-lcbank-image-money">
    </div>
    <div class="form-lcbank-master">
      <div class="form-lcbank-master-container">
        <h2 class="form-lcbank-master-title">${modalTitle}</h2>
        <p class="form-lcbank-master-subtitle">${modalText}</p>
        <form action="#" method="post" novalidate id="form-lcbank" class="form-lcbank-form">
          ${templateBuilder().input({
    type: 'text',
    name: 'name',
    placeholder: placeholderName,
    errorMessage: errorName,
    label: labelName
  })}
          ${hasEmail && templateBuilder().input({
    type: 'email',
    name: 'email',
    placeholder: placeholderEmail,
    errorMessage: errorEmail,
    label: labelEmail
  })}
          ${templateBuilder().input({
    type: 'text',
    name: 'cpf',
    placeholder: placeholderCpf,
    errorMessage: errorCpf,
    label: labelCpf
  })}
          ${templateBuilder().input({
    type: 'text',
    name: 'phone',
    placeholder: placeholderPhone,
    errorMessage: errorPhone,
    label: labelPhone
  })}
          ${printInputs}
          ${templateBuilder().submitButton(labelButton)}
          ${loadingBox().template}
          ${resultBox().template}
        </form>
        <p class="form-lcbank-master-privacy">${modalPrivacy} <a href="${modalPrivacyLink}" target="_blank" rel="noopener noreferrer">${modalPrivacyText}</a></p>
        <p class="form-lcbank-master-privacy">${modalFooterText}</p>
      </div>
    </div>
  </div>`

  block.innerHTML = template

  // adiciona os controles de abertura de modal
  modalBox()

  // aplicar as máscaras
  maskCPF(document.querySelector('#form-lcbank-cpf')!)
  maskPhone(document.querySelector('#form-lcbank-phone')!)

  // validar o formulário
  const optionsValidateForm: ValidateForm = {
    goTo,
    hasEmail,
    requiredEmail
  }
  validateForm(optionsValidateForm)
}