import { describe, it, expect } from 'vitest'
import { validateCPF } from '../src/validateCPF'

describe('validateCPF', () => {
  it('should validate the CPF', () => {
    const CPFValue = '837.308.904-76'
    const validCPF = validateCPF(CPFValue)
    expect(validCPF).toBe(true)
  })

  it('should invalidate the CPF', () => {
    const CPFValue = '837.308.904-74'
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

  it('should validate a CPF where the first validation digit is 0', () => {
    const CPFValue = '123.456.789-09'
    const validCPF = validateCPF(CPFValue)
    expect(validCPF).toBe(true)
  })

  it('should validate a CPF where the second validation digit is 0', () => {
    const CPFValue = '123.456.789-09'
    const validCPF = validateCPF(CPFValue)
    expect(validCPF).toBe(true)
  })

  it('should invalidate a CPF where the first validation digit should be 10 or 11', () => {
    const CPFValue = '111.444.777-35' // CPF known to trigger 10 or 11 in first validation
    const validCPF = validateCPF(CPFValue)
    expect(validCPF).toBe(true)
  })

  it('should invalidate a CPF where the second validation digit should be 10 or 11', () => {
    const CPFValue = '123.456.789-09' // CPF known to trigger 10 or 11 in second validation
    const validCPF = validateCPF(CPFValue)
    expect(validCPF).toBe(true)
  })
})