export function validateEmail(phoneNumber: string): boolean {
  // Define a regex pattern for validating phone numbers in the desired formats
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  // Test the phone number against the regex pattern
  return emailPattern.test(phoneNumber)
}

// // Exemplo de uso
// const phoneNumbers = [
//   "(12) 3456-7890",    // válido
//   "(12) 34567-8901",   // válido
//   "(12) 34567-890",    // inválido
//   "(123) 4567-8901",   // inválido
//   "(12)3456-7890",     // inválido
//   "(12) 3456-78901"    // inválido
// ]

// phoneNumbers.forEach(phone => {
//   console.log(`${phone} is ${validatePhoneNumber(phone) ? 'valid' : 'invalid'}`)
// })
