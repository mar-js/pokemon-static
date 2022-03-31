import { render, screen } from '@testing-library/react'

import { GlobalStyles } from './'

beforeEach(() => render(<GlobalStyles />))

describe('GlobalStyles Helpers', () => {
  it('Render', () => {
    expect(screen).toBeTruthy()
  })
})
