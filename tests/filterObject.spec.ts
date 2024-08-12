// urlQuery.test.js
import { describe, it, expect } from 'vitest'
import { filterObject } from '../src/filterObject'

describe('FilterObject', () => {
  it('should add URL parameters to inputs array', () => {

    const fields = {
      "name": "Mateus Ávila Isidoro",
      "email": "mateus@mateusavila.com.br",
      "cpf": "047.438.449-75",
      "phone": "(47) 98853-5582",
      "site": "https://www.google.com.br",
      "author": "Mateus Ávila Isidoro",
      "contract": "123.456.789.991",
      "affiliate": "Café das 4",
      "page_title": "Página do Mateus",
      "page_url": "https://www.google.com.br/homepage",
      "utm_source": "google",
      "utm_medium": "cpc",
      "utm_campaign": "18725033406",
      "utm_content": "143281941295",
      "utm_term": "rpv",
      "utm_id": "631296977414",
      "gad_source": "1",
      "gclid": "Cj0KCQjwh7K1BhCZARIsAKOrVqEpK8NDabK5eJFNbJasqe6kz5CMWMEYusMDNEbovwXTVvzk3e8QiS8aAnrJEALw_wcB"
    }

    const extra = filterObject(fields)

    expect(extra).toStrictEqual({
      "site": "https://www.google.com.br",
      "author": "Mateus Ávila Isidoro",
      "contract": "123.456.789.991",
      "affiliate": "Café das 4",
    })
  })
})