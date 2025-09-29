export interface KVList {
  key: string
  value: string | undefined
}

export interface EmailOptions {
  hasEmail: boolean
  requiredEmail: boolean
}
export interface ValidateForm extends EmailOptions {
  goTo: string
  goToMobile: string | undefined
  form: HTMLFormElement
}

export interface InputFieldInterface {
  name: string
  label: string
  type?: 'text' | 'email'
  placeholder: string
  errorMessage: string
  required: boolean
  helper?: string
}

export interface ValidateFieldBlur extends EmailOptions {
  input: HTMLInputElement
  validator: Function | null
  isEmail: boolean
}

export interface ValidateField {
  input: HTMLInputElement
  validator: Function | null
}


export interface ModalTitleHeader {
  company: string
  logoCompany: string
  imageTitle: string
  imageText: string
  titleMobile: string
  modalTitle: string
}

export interface ModalFooterTemplate {
  modalPrivacy: string
  modalPrivacyLink: string
  modalPrivacyText: string
}

export interface ModalHeaderPartial {
  modalTitle: string
}