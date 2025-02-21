import { ValidateFieldBlur } from "./types"
import { validate, clearClassValidation } from "./validate"

export const validateFieldBlur = (options: ValidateFieldBlur) => {
  const { input, validator, hasEmail, requiredEmail, isEmail } = options

  if (!input) {
    console.error("Input não está validado")
    return
  }

  const handleBlur = () => {
    if (!isEmail || (hasEmail && (requiredEmail || input.value.length))) {
      return validate({ input, validator })
    }
  
    if (hasEmail && input.value.length === 0) {
      return clearClassValidation(input)
    }
  }

  input.addEventListener('blur', handleBlur)

  // Return a cleanup function
  /* v8 ignore next 3 */
  return () => {
    input.removeEventListener('blur', handleBlur)
  }
}