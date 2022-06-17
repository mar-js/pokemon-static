import { GENERATOR_ID } from './'

describe('Generation Id', () => {
  it('Render', () => {
    expect(GENERATOR_ID(12)).toBeTruthy()
  })
})
