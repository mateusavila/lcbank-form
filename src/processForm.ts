/* v8 ignore next 30 */
import { loadingBox } from "./loadingBox"
import { resultBox } from "./resultBox"
import { isMobile } from "./isMobile"
import { convertMobileUrl } from "./convertMobileUrl"

// development link
// https://wp.mateusavila.com.br/tack/wp-json/api/contact-form
// https://lcbform.com.br/wp-json/api/contact-form
export const processForm = async (fields: Record<string, string>, goTo: string, form: HTMLFormElement, goToMobile: string | undefined) => {
  const parentForm = form.parentElement!
  const { start, title, text, end } = resultBox(parentForm.querySelector('[data-result]')!)
  await fetch('https://lcbform.com.br/wp-json/api/contact-form', {
    method: 'POST',
    body: JSON.stringify(fields),
  })
    .then((response: any) => response.json())
    .then((response: any) => {
      loadingBox(form.querySelector('[data-loading]')!).end()
      if (response.status !== 200) {
        title()!.innerHTML = response.title
        text()!.innerHTML = response.text
        start()
      }
      if (response.status === 200) {
        end()
        loadingBox(form.querySelector('[data-loading]')!).end()
        if (isMobile() && goToMobile) {
          window.location.href = convertMobileUrl(goToMobile, fields)
          return
        } else {
          window.location.href = goTo
        }
      }
    })
}