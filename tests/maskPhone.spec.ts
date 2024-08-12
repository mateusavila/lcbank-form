import { describe, it, expect } from 'vitest'
import { maskPhone } from '../src/maskPhone'

describe('maskPhone', () => {
  it('should format phone numbers correctly', () => {
    // Cria um elemento input simulado
    const input = document.createElement('input') as HTMLInputElement

    // Aplica a máscara
    maskPhone(input)

    // Simula a inserção de um número de telefone com 10 dígitos
    input.value = '1234567890'
    input.dispatchEvent(new Event('input'))
    expect(input.value).toBe('(12) 3456-7890')

    // Simula a inserção de um número de telefone com 11 dígitos
    input.value = '12345678901'
    input.dispatchEvent(new Event('input'))
    expect(input.value).toBe('(12) 34567-8901')

    // Simula a inserção de um número de telefone com menos de 10 dígitos
    input.value = '12345'
    input.dispatchEvent(new Event('input'))
    expect(input.value).toBe('(12) 345')
  })

  it('should truncate the value if it has more than 11 digits', () => {
    const input = document.createElement('input') as HTMLInputElement
    maskPhone(input)

    input.value = '1234567890123'
    input.dispatchEvent(new Event('input'))
    expect(input.value).toBe('(12) 34567-8901') // Deve truncar para 11 dígitos
  })
})
