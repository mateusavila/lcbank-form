// urlQuery.test.js
import { describe, it, expect } from 'vitest'
import { isValidURL } from '../src/isValidURL'

describe('loadingBox', () => {
  it('should validate the URL', () => {
    expect(isValidURL('https://www.google.com.br')).toBe(true)
  })
  it('should invalidate the URL', () => {
    expect(isValidURL('https://www')).toBe(false)
    expect(isValidURL('https://.com.br')).toBe(false)
    expect(isValidURL('ggogle.com.br')).toBe(false)
  })
  it('should empty string', () => {
    expect(isValidURL('')).toBe(false)
  })
})