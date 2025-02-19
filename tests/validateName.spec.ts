import { describe, it, expect, beforeEach, vi } from 'vitest'
import { validateName } from '../src/validateName'

describe('validatePhone', () => {
  it('should return true if name is properly tipped', () => {
    const PhoneValue = 'Mateus Ávila'
    const validPhone = validateName(PhoneValue)
    expect(validPhone).toBe(true)
  })

  it('should return error when user add invalid name without space', () => {
    const PhoneValue = 'MateusAvila'
    const validPhone = validateName(PhoneValue)
    expect(validPhone).toBe(false)
  })

  it('should return error when user add a name and one space and 1 letter surname', () => {
    const PhoneValue = 'Mateus A'
    const validPhone = validateName(PhoneValue)
    expect(validPhone).toBe(false)
  })
})