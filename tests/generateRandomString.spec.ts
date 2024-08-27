// urlQuery.test.js
import { describe, it, expect } from 'vitest'
import { generateRandomString } from '../src/generateRandomString'

describe('generateRandomString', () => {

  it('should generate a string with size of 10 characteres', () => {
    expect(generateRandomString(10).length).toBe(10)
  })
})