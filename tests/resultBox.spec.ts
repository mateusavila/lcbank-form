// urlQuery.test.js
import { describe, it, expect, beforeEach } from 'vitest'
import { resultBox } from '../src/resultBox'

describe('resultBox', () => {
  beforeEach(() => {
    document.body.innerHTML = resultBox().template
  })
  it('should resultBox appears on screen', () => {
    const result = document.querySelector('#form-lcbank-result')
    resultBox().start()
    expect(result?.classList.contains('active')).toBe(true)
    resultBox().end()
    expect(result?.classList.contains('active')).toBe(false)
  })

  it('should override the title and text', () => {
    const result = document.querySelector('#form-lcbank-result')
    resultBox().start()
    const title = result?.querySelector('#form-lcbank-result-title')
    const text = result?.querySelector('#form-lcbank-result-text')
    resultBox().title()!.innerHTML = 'titulo'
    resultBox().text()!.innerHTML = 'texto'

    expect(title?.innerHTML).toBe('titulo')
    expect(text?.innerHTML).toBe('texto')

  })
})