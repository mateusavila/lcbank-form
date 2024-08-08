import { describe, it, expect, beforeEach, vi } from 'vitest'
import { validatePhoneNumber } from '../src/validatePhone'

describe('validatePhone', () => {
  it('should validate the CPF', () => {
    const PhoneValue = '(47) 98853-5582'
    const validPhone = validatePhoneNumber(PhoneValue)
    expect(validPhone).toBe(true)
  })

  it('should invalidate the CPF', () => {
    const PhoneValue = '(47) 98853-55'
    const validPhone = validatePhoneNumber(PhoneValue)
    expect(validPhone).toBe(false)
  })
})