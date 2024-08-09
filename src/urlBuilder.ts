import { KVList } from "./types"

export const urlBuilder = (search: string): KVList[] => {
  const searchParams = search.startsWith('?') ? search.substring(1) : search
  const pairs = searchParams.split('&')
  const result: KVList[] = []
  pairs.forEach(pair => {
    const [key, value] = pair.split('=')
    result.push({
      key: decodeURIComponent(key),
      value: decodeURIComponent(value)
    })
  })
  return result
}