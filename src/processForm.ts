/* v8 ignore next 30 */
import { loadingBox } from "./loadingBox"
import { resultBox } from "./resultBox"

export const processForm = async (fields: Record<string, string>, goTo: string) => {

  const { start, title, text, end } = resultBox()
  // button()

  // await fetch('http://localhost:8000/wp-json/api/contact-form', {
  await fetch('https://lcbform.com.br/wp-json/api/contact-form', {
    method: 'POST',
    body: JSON.stringify(fields),
  })
    .then((response: any) => response.json())
    .then((response: any) => {
      loadingBox().endLoading()
      if (response.status !== 200) {

        title()!.innerHTML = response.title
        text()!.innerHTML = response.text
        start()
      }
      if (response.status === 200) {
        end()
        loadingBox().endLoading()
        window.location.href = goTo
      }
    })
}