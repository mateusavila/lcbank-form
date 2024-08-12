// urlQuery.test.js
import { describe, it, expect } from 'vitest'
import { loadingBox } from '../src/loadingBox'

describe('loadingBox', () => {
  it('should loading appears on screen', () => {
    document.body.innerHTML = `<div 
    id="form-lcbank-loading">
    </div>`
    const loading = document.querySelector('#form-lcbank-loading')
    loadingBox().startLoading()
    expect(loading?.classList.contains('active')).toBe(true)
    loadingBox().endLoading()
    expect(loading?.classList.contains('active')).toBe(false)
  })
})