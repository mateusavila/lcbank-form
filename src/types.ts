export interface KVList {
  key: string
  value: string | undefined
}

export interface ValidateForm {
  hasEmail: boolean
  goTo: string
  requiredEmail: boolean
}

export interface InputFieldInterface {
  name: string
  label: string
  type: 'text' | 'email'
  placeholder: string
  errorMessage: string
  required: boolean
}