import { KEYWORDS } from './'

describe('Keywords Helpers', () => {
  it('Render', () => {
    expect(typeof (KEYWORDS(['a', 'b']))).toBe('string')
  })
})
