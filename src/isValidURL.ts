export const isValidURL = (url: string | undefined): boolean => {
  if (!url) return false
  const regex = new RegExp(
    '^(https?:\\/\\/)' + // protocolo obrigatório
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domínio
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // ou endereço IP
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // porta e caminho
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // string de consulta
    '(\\#[-a-z\\d_]*)?$', 'i' // fragmento de URL
  )

  return !!regex.test(url)
}