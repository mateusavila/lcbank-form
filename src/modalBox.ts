import { clearClassValidation } from "./validate"

export function modalBox(): void {
  const modal = document.getElementById('form-lcbank-modal')!
  const nameField = document.getElementById('form-lcbank-label-name')!
  const backDrop = document.querySelector('[data-backdrop]')!
  const closeButton = document.getElementById('form-lcbank-close') ?? null
  const callToActions = document.querySelectorAll('[data-call-to-action]')
  const closeResultLink = document.querySelectorAll('[data-close-modal]')

  const closeAction = (event: Event) => {
    event.preventDefault()
    modal?.classList.remove('active');
    (document.getElementById('form-lcbank') as HTMLFormElement)!.reset()
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"]')
    inputs.forEach((input) => clearClassValidation(input as HTMLInputElement))
  }

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
    closeButton.addEventListener('click', closeAction)
  }
  if (closeResultLink) {
    closeResultLink.forEach((item) => item.addEventListener('click', closeAction));
  }
  if (backDrop) {
    backDrop.addEventListener('click', closeAction)
  }
}

