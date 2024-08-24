import { clearClassValidation } from "./validate"

export function modalBox(): void {
  const modal = document.getElementById('form-lcbank-modal')!
  const nameField = document.getElementById('form-lcbank-label-name')!
  const closeButton = document.getElementById('form-lcbank-close') ?? null
  const callToActions = document.querySelectorAll('[data-call-to-action]')
  if (callToActions) {
    callToActions.forEach((button) => {
      button.addEventListener('click', function (event) {
        event.preventDefault()
        modal?.classList.add('active')
        nameField.focus()
      })
    })
  }
  if (closeButton) {
    closeButton.addEventListener('click', function (event) {
      event.preventDefault()
      modal?.classList.remove('active');
      (document.getElementById('form-lcbank') as HTMLFormElement)!.reset()

      const inputs = document.querySelectorAll('input[type="text"], input[type="email"]')
      inputs.forEach((input) => clearClassValidation(input as HTMLInputElement))
    })
  }
}

