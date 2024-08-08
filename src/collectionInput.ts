export const collectionInput = (data: DOMStringMap) => Object.entries(data)
  .filter(([key, _value]) => key.startsWith('input'))
  .map(([key, value]) => {
    const newKey = key.split('input')[1].toLowerCase()
    return {
      key: newKey,
      value
    }
  })