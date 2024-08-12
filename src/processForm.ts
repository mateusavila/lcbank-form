import { loadingBox } from "./loadingBox"

export const processForm = async (fields: Record<string, string>, goTo: string) => {
  await fetch('http://localhost:8000/wp-json/api/contact-form', {
    method: 'POST',
    body: JSON.stringify(fields),
  })
    .then((response: any) => {
      console.log('response', response)
    })
    .catch((error: any) => {
      console.log('error', error)
    })
    .finally(() => {
      // window.location.href = goTo
      loadingBox().endLoading()
      console.log('go-to', goTo)
    })
}