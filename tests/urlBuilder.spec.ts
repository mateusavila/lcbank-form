// urlQuery.test.js
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { urlBuilder } from '../src/urlBuilder'
import { KVList } from '../src/types'

describe('URL Query String Test', () => {
  const originalWindowLocation = window.location

  beforeEach(() => {
    // Mock do window.location
    vi.stubGlobal('location', {
      search: '?utm_source=google&utm_medium=cpc&utm_campaign=18725033406&utm_content=143281941295&utm_term=rpv&utm_id=631296977414&gad_source=1&gclid=Cj0KCQjwh7K1BhCZARIsAKOrVqEpK8NDabK5eJFNbJasqe6kz5CMWMEYusMDNEbovwXTVvzk3e8QiS8aAnrJEALw_wcB'
    })
  })

  afterEach(() => {
    // Restaura o window.location original após cada teste
    vi.unstubAllGlobals()
  })

  it('should add URL parameters to inputs array', () => {
    const inputs: KVList[] = [] // Assume que inputs é um array vazio inicialmente

    const getUrlQueryString = window.location.search
    if (getUrlQueryString) {
      inputs.push(...urlBuilder(getUrlQueryString))
    }


    // Verifica se os parâmetros foram adicionados ao array inputs
    expect(inputs.length).toBeGreaterThan(0)
    expect(inputs[0]).toStrictEqual({ key: 'utm_source', value: 'google' })
    expect(inputs[1]).toStrictEqual({ key: 'utm_medium', value: 'cpc' })
    // Adicione mais verificações conforme necessário
  })
})