export function validatePhoneNumber(phoneNumber: string): boolean {
  const phonePattern = /^\(\d{2}\) \d{4,5}-\d{4}$/
  return phonePattern.test(phoneNumber)
}

