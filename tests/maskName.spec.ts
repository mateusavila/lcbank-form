import { describe, it, expect } from 'vitest'
import { maskName } from '../src/maskName'

describe('maskName', () => {
  it('should format phone numbers correctly', () => {
    // Cria um elemento input simulado
    const input = document.createElement('input') as HTMLInputElement

    // Aplica a máscara
    maskName(input)

    // Simula a inserção de um número de telefone com 10 dígitos
    input.value = 'Mateus Ávila Isidoro'
    input.dispatchEvent(new Event('input'))
    expect(input.value).toBe('Mateus Ávila Isidoro')
  })

  it('should truncate the value if it has more than 11 digits', () => {
    const input = document.createElement('input') as HTMLInputElement
    maskName(input)

    input.value = '1234567890123'
    input.dispatchEvent(new Event('input'))
    expect(input.value).toBe('') // Deve truncar para 11 dígitos
  })
})
