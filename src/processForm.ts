/* v8 ignore next 30 */
import { loadingBox } from "./loadingBox"
import { resultBox } from "./resultBox"

export const processForm = async (fields: Record<string, string>, goTo: string, form: HTMLFormElement) => {

  const { start, title, text, end } = resultBox(form.querySelector('[data-result]')!)
  await fetch('https://lcbform.com.br/wp-json/api/contact-form', {
    method: 'POST',
    body: JSON.stringify(fields),
  })
    .then((response: any) => response.json())
    .then((response: any) => {
      loadingBox(form.querySelector('[data-loading]')!).endLoading()
      if (response.status !== 200) {

        title()!.innerHTML = response.title
        text()!.innerHTML = response.text
        start()
      }
      if (response.status === 200) {
        end()
        loadingBox(form.querySelector('[data-loading]')!).endLoading()
        window.location.href = goTo
      }
    })
}