export const filterObject = (fields: Record<string, string>) => {

  const excludeFieldsToCreateExtraFields = ['name', 'email', 'cpf', 'phone', 'page_title', 'page_url', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id', 'gad_source', 'gclid', 'website']

  const extra = Object.entries(fields)
    .filter((field: [string, string]) => !excludeFieldsToCreateExtraFields.includes(field[0]))
    .map(field => ({
      [field[0]]: field[1]
    })).reduce((acc, item) => {
      const key = Object.keys(item)[0]
      acc[key] = item[key]
      return acc
    }, {})

  return extra
}