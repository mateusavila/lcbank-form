export function resultBox() {
  const resultBox = document.getElementById('form-lcbank-result')!

  const start = () => resultBox.classList.add('active')
  const end = () => resultBox.classList.remove('active')
  const title = () => resultBox.querySelector('#form-lcbank-result-title')
  const text = () => resultBox.querySelector('#form-lcbank-result-text')
  const button = () => document.querySelector('#form-lcbank-result-button')?.addEventListener('click', function (event) {
    event.preventDefault()
    end()
  })

  const template = `<div class="form-lcbank-result" id="form-lcbank-result">
    <div class="form-lcbank-result-info">
      <h2 class="form-lcbank-result-title" id="form-lcbank-result-title"></h2>
      <p class="form-lcbank-result-text" id="form-lcbank-result-text"></p>
    </div>
  </div>`

  return {
    start, end, template, title, text, button
  }
}

