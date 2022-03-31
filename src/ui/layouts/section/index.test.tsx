import { render, screen } from '@testing-library/react'

import { Section } from './'

beforeEach(() => render(<Section>
  <p>Hello</p>
</Section>))

describe('Section Layouts', () => {
  it('Render', () => {
    expect(screen.getByText(/Hello/)).toBeTruthy()
  })
})
