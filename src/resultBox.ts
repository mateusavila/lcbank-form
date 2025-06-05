export const resultBox = (resultBox: HTMLElement) => {
  const start = () => resultBox.classList.add('active')
  const end = () => resultBox.classList.remove('active')
  const title = () => resultBox.querySelector('#form-lcbank-result-title')
  const text = () => resultBox.querySelector('#form-lcbank-result-text')
  const template = `<div class="form-lcbank-result" id="form-lcbank-result" data-result>
    <div class="form-lcbank-result-info">
      <h2 class="form-lcbank-result-title" id="form-lcbank-result-title">Tudo certo!</h2>
      <img src="https://lcbform.com.br/wp-content/uploads/2025/06/obrigado.svg" loading="lazy" width="207" height="205" alt="Muito obrigado" />
      <p class="form-lcbank-result-text" id="form-lcbank-result-text">Seu processo será analisado e em breve um de nossos especialistas entrará em contato pelo <strong>WhatsApp</strong>.</p>
      <p><a href="#" id="form-result-close" class="form-result-close">Voltar para o início</a></p>
    </div>
  </div>`

  return {
    start, end, template, title, text
  }
}

