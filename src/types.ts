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
