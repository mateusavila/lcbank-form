export const maskName = (input: HTMLInputElement): void => {
  input.addEventListener('input', () => {
    let value = input.value
    value = value.replace(/[^a-zA-ZÀ-ÿ\s']/g, '')
    input.value = value
  })
}