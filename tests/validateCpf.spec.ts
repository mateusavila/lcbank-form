import { describe, it, expect } from 'vitest'
import { validateCPF } from '../src/validateCPF'

describe('validateCPF', () => {
  it('should validate the CPF', () => {
    const CPFValue = '047.438.449-75'
    const validCPF = validateCPF(CPFValue)
    expect(validCPF).toBe(true)
  })

  it('should invalidate the CPF', () => {
    const CPFValue = '047.438.449-74'
    const validCPF = validateCPF(CPFValue)
    expect(validCPF).toBe(false)
  })

  it('should invalidate the CPF with same digits', () => {
    const CPFValue = '000.000.000-00'
    const validCPF = validateCPF(CPFValue)
    expect(validCPF).toBe(false)
  })

  it('should incomplete CPF', () => {
    const CPFValue = '000.000.000'
    const validCPF = validateCPF(CPFValue)
    expect(validCPF).toBe(false)
  })

  it('should wrong input document', () => {
    const CPFValue = '17.999.888/0000-00'
    const validCPF = validateCPF(CPFValue)
    expect(validCPF).toBe(false)
  })
})