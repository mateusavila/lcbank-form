export function modalBox(): void {
  const modal = document.getElementById('form-lcbank-modal')!
  const nameField = document.getElementById('form-lcbank-label-name')!
  const closeButton = document.getElementById('form-lcbank-close')!
  const callToActions = document.querySelectorAll('[data-call-to-action]')
  callToActions.forEach((button) => {
    button.addEventListener('click', function (event) {
      event.preventDefault()
      modal?.classList.add('active')
      nameField.focus()
    })
  })
  closeButton.addEventListener('click', function (event) {
    event.preventDefault()
    modal?.classList.remove('active')
  })
}

