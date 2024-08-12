import { describe, it, expect, beforeEach, vi } from 'vitest'
import { validatePhoneNumber } from '../src/validatePhone'

describe('validatePhone', () => {
  it('should validate the CPF', () => {
    const PhoneValue = '(99) 99999-9999'
    const validPhone = validatePhoneNumber(PhoneValue)
    expect(validPhone).toBe(true)
  })

  it('should invalidate the CPF', () => {
    const PhoneValue = '(99) 99999-99'
    const validPhone = validatePhoneNumber(PhoneValue)
    expect(validPhone).toBe(false)
  })
})