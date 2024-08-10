import { KVList } from "./types"

export const collectionInput = (data: DOMStringMap): KVList[] => Object.entries(data)
  .filter(([key]) => key.startsWith('input'))
  .map(([k, value]) => {
    const key = k.split('input')[1].toLowerCase()
    return { key, value }
  })