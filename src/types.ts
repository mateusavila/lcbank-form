export interface KVList {
  key: string
  value: string | undefined
}

export interface ValidateForm {
  hasEmail: boolean
  goTo: string
  requiredEmail: boolean
}