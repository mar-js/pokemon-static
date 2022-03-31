import { render, screen } from '@testing-library/react'

import { Links } from './'

beforeEach(() => render(<Links />))

describe('Links Component', () => {
  it('Render', () => {
    expect(screen.getByText(/About/)).toBeTruthy()
  })

  it('Redirect', () => {
    expect(screen.getByText(/About/)).toHaveAttribute('href', '/about')
  })
})
