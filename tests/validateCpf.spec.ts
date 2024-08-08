import { describe, it, expect, beforeEach, vi } from 'vitest'
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
})