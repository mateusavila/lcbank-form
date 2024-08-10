export function validateCPF(cpf: string): boolean {
  // Remove non-numeric characters
  cpf = cpf.replace(/[^\d]+/g, '')

  // Check if it has 11 digits
  if (cpf.length !== 11) {
    return false
  }

  // Check if all digits are the same
  if (/^(\d)\1+$/.test(cpf)) {
    return false
  }

  // Validate first digit
  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i)
  }
  let rev = 11 - (sum % 11)
  if (rev === 10 || rev === 11) {
    rev = 0
  }
  if (rev !== parseInt(cpf.charAt(9))) {
    return false
  }

  // Validate second digit
  sum = 0
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i)
  }
  rev = 11 - (sum % 11)
  if (rev === 10 || rev === 11) {
    rev = 0
  }
  if (rev !== parseInt(cpf.charAt(10))) {
    return false
  }

  return true
}