import { maskCPF } from './maskCPF'
import { maskPhone } from './maskPhone'
import { validateForm } from './validateForm'
import { collectionInput } from './collectionInput'
import { modalBox } from './modalBox'
import { urlBuilder } from './urlBuilder'
import { ValidateForm } from './types'
import { loadingBox } from './loadingBox'
import { resultBox } from './resultBox'
import { templateBuilder } from './templateBuilder'
import { validateFieldBlur } from './validateFieldBlur'
import { validateCPF } from './validateCPF'
import { validatePhoneNumber } from './validatePhone'
import { validateName } from './validateName'
import { validateEmail } from './validateEmail'
import { maskName } from './maskName'

export const createForm = () => {
  const blocks = document.querySelectorAll<HTMLDivElement>('[data-form-lcbank-apply]')

  if (!blocks || blocks.length === 0) {
    console.error("O Elemento [data-form-lcbank-apply] não existe na página")
    return
  }
  blocks.forEach((block) => {
    const data = block.dataset

    // campos obrigatórios
    const pageTitle = data.pageTitle?.length
    const website = data.website?.length
    const mode: 'modal' | 'form' = data.mode?.length ? data.mode as 'modal' | 'form' : 'modal'

    if (!pageTitle) {
      console.error("É necessário atribuir o título da página com data-page-title=\"Título da página\"")
      return
    }

    if (!website) {
      console.error("É necessário atribuir o website com data-website=\"Título do website\"")
      return
    }

    const pageUrl = window.location.href

    let printInputs = ''
    let inputs = [...collectionInput(data), { key: 'page_title', value: data.pageTitle }, { key: 'page_url', value: pageUrl }, { key: 'website', value: data.website }]
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

    const company = data.company ?? 'LCbank'
    const logoCompany = data.logoCompany ?? 'https://lcbform.com.br/wp-content/uploads/2024/09/logo-lcbank.svg'
    const imageTitle = data.imageTitle ?? `Solicite a antecipação\n e receba o dinheiro da\n sua RPV em 24h!`
    const titleMobile = data.titleMobile ?? `Antecipe agora<br> o dinheiro da sua RPV`
    const imageText = data.imageTitle ?? `*Após a assinatura do contrato. `
    const labelName = data.labelName ?? 'Nome Completo'
    const labelCpf = data.labelCpf ?? 'CPF'
    const labelPhone = data.labelPhone ?? 'WhatsApp'
    const labelEmail = data.labelEmail ?? 'E-mail'

    const errorName = data.errorName ?? 'Nome é um campo obrigatório'
    const errorCpf = data.errorCpf ?? 'CPF é um campo obrigatório'
    const errorPhone = data.errorPhone ?? 'Telefone é um campo obrigatório'
    const errorEmail = data.errorPhone ?? 'E-mail é um campo obrigatório'

    const placeholderName = !hidePlaceholder ? data.placeholderName ?? 'Ex: José Maria da Silva' : ''
    const placeholderCpf = !hidePlaceholder ? data.placeholderCpf ?? '000.000.000-00' : ''
    const placeholderPhone = !hidePlaceholder ? data.placeholderPhone ?? 'Telefone' : ''
    const placeholderEmail = !hidePlaceholder ? data.placeholderPhone ?? 'E-mail' : ''
    const labelButton = data.labelButton ?? 'Bora antecipar'

    const helperCPF = data.helperCpf ?? 'O seu CPF nos ajuda a analisar o seu processo.'

    const modalTitle = data.modalTitle ?? 'Complete os campos para que nossos \n especialistas consultem o seu processo'

    const modalPrivacy = data.modalPrivacy ?? 'Ao enviar meus dados, eu concordo com a'
    const modalPrivacyLink = data.modalPrivacyLink ?? 'https://google.com.br'
    const modalPrivacyText = data.modalPrivacyText ?? 'Política de Privacidade'

    const headerTemplate = mode === 'modal' ? `<div class="form-lcbank-modal" id="form-lcbank-modal">
      <div class="form-lcbank-modal-block">
        ${templateBuilder().closeModal()}
        <div class="form-lcbank-image-box">
          <div class="form-lcbank-image-box-info">
            <img src="${logoCompany}" alt="${company}" class="form-lcbank-image-logo" loading="lazy">
            <p class="form-lcbank-image-logo-title">${imageTitle}</p>
            </div>
            <p class="form-lcbank-image-logo-text">${imageText}</p>
        </div>
        <div class="form-lcbank-master">
          <div class="form-lcbank-master-container">
            <h2 class="form-lcbank-master-mobile-title">${titleMobile}</h2>
            <p class="form-lcbank-master-title">${modalTitle}</p>` : ''

    const footerTemplate = mode === 'modal' ? `<p class="form-lcbank-master-privacy">${modalPrivacy} <a href="${modalPrivacyLink}" target="_blank" rel="noopener noreferrer">${modalPrivacyText}</a></p>
          </div>
        </div>
      </div>
    </div>` : ''

    const template = `${headerTemplate}
      <form action="#" method="post" novalidate id="form-lcbank" class="form-lcbank-form" data-form-lcbank>
    ${templateBuilder().input({
      required: true,
      name: 'name',
      placeholder: placeholderName,
      errorMessage: errorName,
      label: labelName
    })}
    ${hasEmail ? templateBuilder().input({
      type: 'email',
      required: requiredEmail,
      name: 'email',
      placeholder: placeholderEmail,
      errorMessage: errorEmail,
      label: labelEmail
    }) : ''}
    ${templateBuilder().input({
      required: true,
      name: 'cpf',
      placeholder: placeholderCpf,
      errorMessage: errorCpf,
      label: labelCpf,
      helper: helperCPF
    })}
    ${templateBuilder().input({
      required: true,
      name: 'phone',
      placeholder: placeholderPhone,
      errorMessage: errorPhone,
      label: labelPhone
    })}
      ${printInputs}
      ${templateBuilder().submitButton(labelButton)}
      ${loadingBox(block.querySelector('[data-loading]')!).template}
      ${resultBox(block.querySelector('[data-result]')!).template}
      </form>
    ${footerTemplate}`

    block.innerHTML = template

    // adiciona os controles de abertura de modal
    modalBox()

    // fields
    const cpfField: HTMLInputElement = block.querySelector('[data-field-cpf]')!
    const phoneField: HTMLInputElement = block.querySelector('[data-field-phone]')!
    const nameField: HTMLInputElement = block.querySelector('[data-field-name]')!
    const emailField: HTMLInputElement | null = block.querySelector('[data-field-email]') ?? null

    // aplicar as máscaras
    maskCPF(cpfField)
    maskPhone(phoneField)
    maskName(nameField)

    // validate blur
    validateFieldBlur({
      input: cpfField,
      validator: validateCPF,
      hasEmail,
      requiredEmail,
      isEmail: false
    })
    validateFieldBlur({
      input: phoneField,
      validator: validatePhoneNumber,
      hasEmail,
      requiredEmail,
      isEmail: false
    })
    validateFieldBlur({
      input: nameField,
      validator: validateName,
      hasEmail,
      requiredEmail,
      isEmail: false
    })

    if (emailField) {
      validateFieldBlur({
        input: emailField!,
        validator: validateEmail,
        hasEmail,
        requiredEmail,
        isEmail: true
      })
    }

    const form: HTMLFormElement = block.querySelector('[data-form-lcbank]')!

    // validar o formulário
    const optionsValidateForm: ValidateForm = {
      goTo,
      hasEmail,
      requiredEmail,
      form
    }
    validateForm(optionsValidateForm)
  })
}