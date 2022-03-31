import { render, screen } from '@testing-library/react'

import { IPokemonText } from '@assets/interfaces'

import { PokemonText } from './'

beforeEach(() => {
  const DATA: IPokemonText = {
    id: 1,
    name: 'Pikachu'
  }

  return render(<PokemonText { ...DATA } />)
})

describe('PokemonText Component', () => {
  it('Render', () => {
    expect(screen.getByText(/Pikachu/)).toBeTruthy()
  })
})
