import { render, screen } from '@testing-library/react'

import { Navbar } from './'

beforeEach(() => render(<Navbar />))

describe('Navbar Component', () => {
  it('Render', () => {
    expect(screen.getByText(/Contact/)).toBeTruthy()
  })

  it('Redirect', () => {
    expect(screen.getByText(/About/)).toHaveAttribute('href', '/about')
  })
})
