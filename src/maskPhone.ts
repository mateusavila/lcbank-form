export function maskPhone(input: HTMLInputElement): void {
  input.addEventListener('input', () => {
    let value = input.value.replace(/\D/g, '')

    if (value.length > 11) {
      value = value.slice(0, 11)
    }

    let formattedValue = ''

    if (value.length > 0) {
      formattedValue = '(' + value.slice(0, 2)

      if (value.length > 2) {
        formattedValue += ') ' + value.slice(2, value.length > 10 ? 7 : 6)

        if (value.length > (value.length > 10 ? 7 : 6)) {
          formattedValue += '-' + value.slice(value.length > 10 ? 7 : 6)
        }
      }
    }

    input.value = formattedValue
  })
}