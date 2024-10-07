import { generateRandomString } from "./generateRandomString"
import { InputFieldInterface, ModalFooterTemplate, ModalHeaderPartial, ModalTitleHeader } from "./types"

export const templateBuilder = () => {

  const input = (options: InputFieldInterface) => {
    const { label, placeholder, errorMessage, type, name, required, helper } = options

    const id = generateRandomString(10)

    return `<div class="form-lcbank-field"><label class="form-lcbank-label" for="form-lcbank-${id}" id="form-lcbank-label-${name}" data-input-field-${name}>${label} ${required && required === true ? `<span class="form-lcbank-required">*</span>` : ''}</label><input type="${type === 'email' ? type : 'text'}" class="form-lcbank-input" name="${name}" id="form-lcbank-${id}" placeholder="${placeholder}" data-field-${name}><span class="form-lcbank-error">${errorMessage}</span>${helper && helper.length ? `<span class="form-lcbank-helper">${helper}</span>` : ''}</div>`
  }

  const closeModal = () => `<button type="button" id="form-lcbank-close" class="form-lcbank-close"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjU3MTQgMS44NDk4OUwxMy43NjU2IDFMOC4wMDAwMiA3LjA4MDkxTDIuMjM0NDEgMUwxLjQyODU5IDEuODQ5ODlMNy4xOTQxOSA3LjkzMDhMMS40Mjg1OSAxNC4wMTE3TDIuMjM0NDEgMTQuODYxNkw4LjAwMDAyIDguNzgwN0wxMy43NjU2IDE0Ljg2MTZMMTQuNTcxNCAxNC4wMTE3TDguODA1ODQgNy45MzA4TDE0LjU3MTQgMS44NDk4OVoiIGZpbGw9IiMyMjIyMjIiIHN0cm9rZT0iIzIyMjIyMiIvPgo8L3N2Zz4K" alt="close" width="14" height="14" loading="lazy" class="form-lcbank-close-img"></button>`

  const submitButton = (label: string) => `<div class="form-lcbank-field"><button type="submit" id="form-lcbank-label-button" class="form-lcbank-label-button" data-button-submit>${label}</button></div>`

  const modalTemplateHeader = (options: ModalTitleHeader) => {
    const {
      company,
      logoCompany,
      imageTitle,
      imageText,
      titleMobile,
      modalTitle } = options
    return `<div class="form-lcbank-modal" id="form-lcbank-modal">
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
            <p class="form-lcbank-master-title">${modalTitle}</p>`
  }

  const modalFooterTemplate = (options: ModalFooterTemplate) => {
    const { modalPrivacy, modalPrivacyLink, modalPrivacyText } = options
    return `<p class="form-lcbank-master-privacy">${modalPrivacy} <a href="${modalPrivacyLink}" target="_blank" rel="noopener noreferrer">${modalPrivacyText}</a></p>
          </div>
        </div>
      </div>
    </div>`
  }

  const modalPartialHeader = (options: ModalHeaderPartial) => {
    const { titleMobile, modalTitle } = options
    return `
      <div class="form-lcbank-modal-partial" id="form-lcbank-modal">
      ${templateBuilder().closeModal()}
      <div class="form-lcbank-modal-partial-content">
        <h2 class="form-lcbank-master-title">${titleMobile}</h2>
        <p class="form-lcbank-master-title">${modalTitle}</p>`
  }

  const modalPartialFooter = () => {
    return `</div></div><div class="form-lcbank-modal-backdrop" data-backdrop></div>`
  }

  return {
    input,
    closeModal,
    submitButton,
    modalTemplateHeader,
    modalFooterTemplate,
    modalPartialFooter,
    modalPartialHeader
  }
}