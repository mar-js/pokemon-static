import { render, screen } from '@testing-library/react'

import { Title } from './'

beforeEach(() => render(<Title />))

describe('Title Component', () => {
  it('Render', () => {
    expect(screen.getByText(/P/)).toBeTruthy()
  })

  it('Redirct', () => {
    expect(screen.getByText(/P/)).toHaveAttribute('href', '/')
  })
})
