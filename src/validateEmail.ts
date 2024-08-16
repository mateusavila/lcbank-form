import { EmailOptions } from "./types"

export const validateEmail = (email: string): boolean => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailPattern.test(email)
}

export const shouldEvaluateEmail = (input: HTMLInputElement | null, options: EmailOptions) => {

  if (!input) {
    return false
  }
  const { hasEmail, requiredEmail } = options

  if (hasEmail && requiredEmail) {
    return true
  }

  if (hasEmail && !requiredEmail && input.value.length) {
    return true
  }

  return false
}