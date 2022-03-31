import { render, screen } from '@testing-library/react'

import { IPokemonName } from '@assets/interfaces'

import { PokemonName } from './'

beforeEach(() => {
  const DATA: IPokemonName = {
    name: 'Pikachu'
  }

  return render(<PokemonName { ...DATA } />)
})

describe('PokemonName Component', () => {
  it('Render', () => {
    expect(screen.getByText(/Pikachu/)).toBeTruthy()
  })
})
