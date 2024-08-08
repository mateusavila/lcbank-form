export function maskCPF(input: HTMLInputElement): void {

  input.addEventListener('input', () => {
    let value = input.value.replace(/\D/g, '')
    const limitedValue = value.slice(0, 11)
    input.value = limitedValue.replace(
      /^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/,
      (_, g1, g2, g3, g4) => {
        let result = ''
        if (g1) result += g1
        if (g2) result += '.' + g2
        if (g3) result += '.' + g3
        if (g4) result += '-' + g4
        return result
      })
  })
}